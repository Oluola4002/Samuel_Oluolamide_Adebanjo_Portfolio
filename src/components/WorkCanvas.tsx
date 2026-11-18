"use client";
import Image from"next/image";
import{useEffect,useRef,useState}from"react";
import{projects}from"@/lib/data";

/* Numbered list on the left, large image card on the right (stacked on phones).
   Auto-advances every 6s while on screen; hovering or tapping a project takes over. */
const DUR=6000;
export default function WorkCanvas(){
 const[a,setA]=useState(0),[hold,setHold]=useState(false),[vis,setVis]=useState(false),root=useRef<HTMLDivElement>(null);
 useEffect(()=>{const io=new IntersectionObserver(([e])=>setVis(e.isIntersecting),{threshold:.25});root.current&&io.observe(root.current);return()=>io.disconnect()},[]);
 useEffect(()=>{if(!vis||hold)return;const t=setTimeout(()=>setA(v=>(v+1)%projects.length),DUR);return()=>clearTimeout(t)},[a,vis,hold]);
 const p=projects[a];
 return(<div ref={root} className="grid gap-10 lg:grid-cols-[1fr_1.25fr] lg:gap-16" onMouseEnter={()=>setHold(true)} onMouseLeave={()=>setHold(false)}>
  <ol className="order-2 border-t border-ink/15 lg:order-1">
   {projects.map((x,i)=>{const on=i===a;return(<li key={x.t} className="relative border-b border-ink/15">
    <button onClick={()=>{setA(i);setHold(true)}} aria-expanded={on} className="flex w-full items-baseline gap-4 py-4 text-left">
     <span className={`font-mono text-xs ${on?"text-ember":"text-ink-400"}`}>0{i+1}</span>
     <span className={`text-[17px] transition-colors ${on?"text-ink":"text-ink-400 hover:text-ink"}`}>{x.t}</span>
    </button>
    <div className={`grid transition-[grid-template-rows] duration-500 ${on?"grid-rows-[1fr]":"grid-rows-[0fr]"}`}><div className="overflow-hidden">
     <p className="pb-3 pl-9 text-[15px] leading-relaxed text-ink-600">{x.d}</p>
     <div className="flex flex-wrap gap-2 pb-5 pl-9">{x.tags.map(t=><span key={t} className="chip">{t}</span>)}</div>
    </div></div>
    {on&&<span aria-hidden className="absolute -bottom-px left-0 h-px bg-ink" style={{animation:vis&&!hold?`bar ${DUR}ms linear forwards`:"none",width:vis&&!hold?undefined:"100%"}} key={a+String(hold)}/>}
   </li>)})}
  </ol>
  <div className="order-1 lg:order-2">
   <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] bg-cream-200 lg:aspect-[5/4]">
    {projects.map((x,i)=><div key={x.img} className={`absolute inset-0 transition-[opacity,transform] duration-700 ${i===a?"scale-100 opacity-100":"scale-[1.03] opacity-0"}`}>
     <Image src={x.img} alt={x.t} fill quality={95} sizes="(max-width:1024px) 100vw, 640px" loading="lazy" className="object-contain p-4"/>
    </div>)}
    <div className="glass absolute inset-x-4 bottom-4 flex items-center justify-between gap-4 rounded-2xl px-5 py-4 sm:inset-x-auto sm:left-6 sm:min-w-[300px]">
     <div><p className="font-mono text-[10px] uppercase tracking-[.16em] text-ink-400">{p.k}</p><p className="mt-1 font-serif text-2xl leading-none">{p.t}</p></div>
     <span className="font-mono text-xs text-ink-400">{a+1}/{projects.length}</span>
    </div>
   </div>
  </div>
 </div>);
}
