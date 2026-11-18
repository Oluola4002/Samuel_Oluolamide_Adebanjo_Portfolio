"use client";
import Image from"next/image";
import{useState}from"react";
import Rail from"./Rail";
import{recognitions,moments}from"@/lib/data";
/* One rail with a switch between awards and moments, instead of two stacked rails. */
export default function Gallery(){
 const[t,setT]=useState<"a"|"m">("a");
 const items=t==="a"?recognitions:moments;
 return(<div>
  <div className="mb-8 flex justify-center"><div className="inline-flex rounded-full border border-cream/15 p-1">{([["a","Awards & certificates"],["m","In the room"]] as const).map(([k,l])=><button key={k} onClick={()=>setT(k)} className={`rounded-full px-5 py-2 text-sm transition-colors ${t===k?"bg-cream text-ink":"text-cream/60 hover:text-cream"}`}>{l}</button>)}</div></div>
  <Rail dark key={t}>{items.map(r=><figure key={r.t} className="w-[72%] shrink-0 snap-start sm:w-[300px]">
   <div className="cimg in aspect-[4/5] rounded-2xl bg-ink-800"><Image src={r.img} alt={r.t} fill loading="lazy" quality={95} sizes="(max-width:640px) 72vw, 300px" className="object-contain p-2"/></div>
   <figcaption className="mt-4"><span className="block font-serif text-xl">{r.t}</span><span className="text-sm text-cream/55">{r.d}</span></figcaption>
  </figure>)}</Rail>
 </div>);
}
