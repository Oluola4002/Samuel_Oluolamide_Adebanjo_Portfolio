"use client";
import Image from"next/image";
import{useEffect,useRef,useState}from"react";
import{portraits}from"@/lib/data";
export default function Portraits(){
 const[i,setI]=useState(0),[vis,setVis]=useState(false),r=useRef<HTMLDivElement>(null);
 useEffect(()=>{const io=new IntersectionObserver(([e])=>setVis(e.isIntersecting));r.current&&io.observe(r.current);return()=>io.disconnect()},[]);
 // only cycles while on screen, so it costs nothing elsewhere on the page
 useEffect(()=>{if(!vis)return;const t=setInterval(()=>{if(!document.hidden)setI(v=>(v+1)%portraits.length)},4200);return()=>clearInterval(t)},[vis]);
 return(<div ref={r} className="relative mx-auto aspect-[4/5] w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[460px]">
  <div aria-hidden className="absolute inset-x-[8%] bottom-[6%] top-[14%] rounded-t-full bg-cream-200"/>
  {portraits.map((p,k)=><div key={p.src} className={`slide fade-b ${k===i?"on":""}`}>
   <Image src={p.src} alt={`Samuel Oluolamide Adebanjo, ${p.cap}`} fill loading="lazy" quality={95} sizes="(max-width:768px) 80vw, 460px" className="object-contain object-bottom"/>
  </div>)}
  <div className="absolute -bottom-2 left-0 right-0 flex items-center justify-between text-xs text-ink-600">
   <span key={i} className="italic font-serif text-base">{portraits[i].cap}</span>
   <div className="flex gap-1.5">{portraits.map((_,k)=><button key={k} onClick={()=>setI(k)} aria-label={`Photo ${k+1}`} className={`h-1 rounded-full transition-all duration-500 ${k===i?"w-6 bg-ink":"w-2 bg-ink/25"}`}/>)}</div>
  </div>
 </div>);
}
