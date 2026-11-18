"use client";
import{useState}from"react";
import{skills}from"@/lib/data";
export default function Skills(){
 const ks=Object.keys(skills),[k,setK]=useState(ks[0]);
 return(<div>
  <div className="flex flex-wrap gap-2">{ks.map(x=><button key={x} onClick={()=>setK(x)} className={`rounded-full px-4 py-2 text-sm transition-colors ${k===x?"bg-ink text-cream":"border border-ink/15 text-ink-600 hover:border-ink"}`}>{x}</button>)}</div>
  <ul key={k} className="mt-8 grid grid-cols-1 gap-x-8 sm:grid-cols-2">{skills[k].map((s,i)=><li key={s} className="flex items-baseline gap-4 border-b border-ink/10 py-3"><span className="text-xs text-ink-400">0{i+1}</span><span className="text-[15px]">{s}</span></li>)}</ul>
 </div>);
}
