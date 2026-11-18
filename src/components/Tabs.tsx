"use client";
import{useState}from"react";
import{Add01Icon,MinusSignIcon}from"@/components/hugeicons";
import Icon from"./Icon";
type Item={r:string;o:string;p:string;l?:string;a:string[]};
export default function Tabs({sets}:{sets:Record<string,Item[]>}){
 const keys=Object.keys(sets),[t,setT]=useState(keys[0]),[o,setO]=useState(0);
 return(<div>
  <div className="mb-8 inline-flex rounded-full border border-ink/15 p-1">{keys.map(k=><button key={k} onClick={()=>{setT(k);setO(0)}} className={`rounded-full px-5 py-2 text-sm transition-colors ${t===k?"bg-ink text-cream":"text-ink-600"}`}>{k}</button>)}</div>
  <ul className="border-t border-ink/15">{sets[t].map((e,i)=><li key={e.r} className="border-b border-ink/15">
   <button onClick={()=>setO(o===i?-1:i)} aria-expanded={o===i} className="grid w-full grid-cols-[1fr_auto] items-center gap-4 py-5 text-left sm:grid-cols-[180px_1fr_auto]">
    <span className="hidden text-sm text-ink-400 sm:block">{e.p}</span>
    <span><span className="block text-lg font-medium leading-snug">{e.r}</span><span className="text-sm text-ink-600">{e.o}{e.l?` · ${e.l}`:""}<span className="sm:hidden"> · {e.p}</span></span></span>
    <Icon i={o===i?MinusSignIcon:Add01Icon}/>
   </button>
   <div className={`grid transition-[grid-template-rows] duration-500 ${o===i?"grid-rows-[1fr]":"grid-rows-[0fr]"}`}><ul className="overflow-hidden sm:ml-[180px]">{e.a.map(x=><li key={x} className="pb-3 text-[15px] leading-relaxed text-ink-600 last:pb-6">• {x}</li>)}</ul></div>
  </li>)}</ul>
 </div>);
}
