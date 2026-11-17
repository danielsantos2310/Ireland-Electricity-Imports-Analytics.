
const $ = (s)=>document.querySelector(s);
const fmt = (v,d=1)=>Number(v).toLocaleString(undefined,{maximumFractionDigits:d});
let DATA;

function setupCanvas(canvas){
  const dpr=window.devicePixelRatio||1;
  const rect=canvas.getBoundingClientRect();
  canvas.width=rect.width*dpr; canvas.height=rect.height*dpr;
  const ctx=canvas.getContext('2d'); ctx.scale(dpr,dpr);
  return {ctx,w:rect.width,h:rect.height};
}
function axes(ctx,w,h,ymin,ymax){
  const p={l:58,r:22,t:26,b:42};
  ctx.strokeStyle='#233945';ctx.fillStyle='#9AB0BA';ctx.font='12px system-ui';
  for(let i=0;i<=4;i++){
    const y=p.t+(h-p.t-p.b)*i/4;
    ctx.beginPath();ctx.moveTo(p.l,y);ctx.lineTo(w-p.r,y);ctx.stroke();
    const val=ymax-(ymax-ymin)*i/4;
    ctx.fillText(fmt(val,0),8,y+4);
  }
  return p;
}
function lineChart(id,rows,xKey,series,ymin=0,ymax=null){
  const canvas=document.getElementById(id); if(!canvas)return;
  const {ctx,w,h}=setupCanvas(canvas);
  const vals=rows.flatMap(r=>series.map(s=>Number(r[s.key]||0)));
  ymax=ymax??Math.max(...vals)*1.08;
  const p=axes(ctx,w,h,ymin,ymax);
  const colors=['#7ED8A4','#F3B45D','#69D8E7','#F27668','#C9B7F4','#E9E37A'];
  series.forEach((s,si)=>{
    ctx.strokeStyle=colors[si%colors.length];ctx.lineWidth=3;ctx.beginPath();
    rows.forEach((r,i)=>{
      const x=p.l+(w-p.l-p.r)*(i/(rows.length-1||1));
      const y=p.t+(h-p.t-p.b)*(1-(Number(r[s.key])-ymin)/(ymax-ymin));
      i?ctx.lineTo(x,y):ctx.moveTo(x,y);
    });ctx.stroke();
  });
  ctx.fillStyle='#9AB0BA';ctx.font='11px system-ui';
  [0,Math.floor((rows.length-1)/2),rows.length-1].forEach(i=>{
    const x=p.l+(w-p.l-p.r)*(i/(rows.length-1||1));
    ctx.fillText(String(rows[i][xKey]),x-18,h-14);
  });
}
function barCompare(id,rows,labelKey,aKey,bKey){
  const canvas=document.getElementById(id);if(!canvas)return;
  const {ctx,w,h}=setupCanvas(canvas);
  const p={l:150,r:26,t:20,b:24};
  const max=Math.max(...rows.flatMap(r=>[r[aKey],r[bKey]]))*1.1;
  const gh=(h-p.t-p.b)/rows.length;
  ctx.font='12px system-ui';
  rows.forEach((r,i)=>{
    const y=p.t+i*gh;
    ctx.fillStyle='#9AB0BA';ctx.fillText(r[labelKey],8,y+gh*.52);
    const bw=(gh*.26);
    ctx.fillStyle='#69D8E7';ctx.fillRect(p.l,y+gh*.18,(w-p.l-p.r)*r[aKey]/max,bw);
    ctx.fillStyle='#7ED8A4';ctx.fillRect(p.l,y+gh*.55,(w-p.l-p.r)*r[bKey]/max,bw);
  });
}
function render(){
  const k=DATA.kpis;
  $('#kpis').innerHTML=[
    [`${k.generation_2010_twh} → ${k.generation_2025_twh} TWh`,'Domestic generation, 2010→2025'],
    [`${k.wind_share_2010}% → ${k.wind_share_2025}%`,'Wind share'],
    [`${k.gas_wind_share_2025}%`,'Gas + wind share in 2025'],
    [`${k.gas_import_dependency_2025}%`,'Gas import dependence, 2025']
  ].map(x=>`<div class="kpi"><strong>${x[0]}</strong><span>${x[1]}</span></div>`).join('');

  lineChart('transition',DATA.annual_summary,'year',[
    {key:'gas_gwh'},{key:'wind_gwh'},{key:'coal_gwh'},{key:'solar_gwh'}
  ]);

  const y2010=DATA.annual_long.filter(r=>r.year===2010);
  const y2025=DATA.annual_long.filter(r=>r.year===2025);
  const order=['Gas','Wind','Coal','Peat & Biomass','Hydro','Solar'];
  const comp=order.map(source=>({
    source,
    y2010:(y2010.find(r=>r.source===source)||{}).share_pct||0,
    y2025:(y2025.find(r=>r.source===source)||{}).share_pct||0
  }));
  barCompare('mixcompare',comp,'source','y2010','y2025');

  lineChart('thermal',DATA.thermal,'year',[{key:'public_thermal_efficiency_pct'}],40,55);
  lineChart('gasdep',DATA.gas_dependency,'year',[{key:'import_share_of_indigenous_plus_imports_pct'}],0,100);

  lineChart('corr',DATA.operating_relationships.filter(r=>r.year>=2018),'year',[{key:'gas_wind_corr'}],-1,1);

  const ressBody=DATA.ress.map(r=>`<tr><td>${r.auction}</td><td>${r.all_projects_eur_mwh??'—'}</td><td>${r.wind_eur_mwh??'—'}</td><td>${r.solar_eur_mwh??'—'}</td></tr>`).join('');
  $('#ressbody').innerHTML=ressBody;

  const ev=DATA.evidence.map(r=>`<tr><td>${r.question}</td><td>${r.finding}</td><td><span class="tag">${r.evidence_strength}</span></td></tr>`).join('');
  $('#evidencebody').innerHTML=ev;
}
fetch('data/site_data.json').then(r=>r.json()).then(d=>{DATA=d;render();window.addEventListener('resize',()=>render())});
