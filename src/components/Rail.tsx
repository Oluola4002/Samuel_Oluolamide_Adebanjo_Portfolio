"use client";
import{useRef}from"react";
import{ArrowLeft01Icon,ArrowRight01Icon}from"@/components/hugeicons";
import Icon from"./Icon";
export default function Rail({children,dark}:{children:React.ReactNode;dark?:boolean}){
 const r=useRef<HTMLDivElement>(null);
 const go=(d:number)=>r.current?.scrollBy({left:d*r.current.clientWidth*.8,behavior:"smooth"});
 const b=`grid h-11 w-11 place-items-center rounded-full border transition-colors ${dark?"border-cream/20 hover:bg-cream hover:text-ink":"border-ink/20 hover:bg-ink hover:text-cream"}`;
 return(<div>
  <div ref={r} className="rail">{children}</div>
  <div className="mt-6 flex gap-2"><button className={b} onClick={()=>go(-1)} aria-label="Previous"><Icon i={ArrowLeft01Icon}/></button><button className={b} onClick={()=>go(1)} aria-label="Next"><Icon i={ArrowRight01Icon}/></button></div>
 </div>);
}
