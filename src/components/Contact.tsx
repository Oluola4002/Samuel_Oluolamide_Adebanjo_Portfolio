"use client";
import{useState}from"react";
import{Copy01Icon,Tick02Icon,Call02Icon,ArrowUpRight01Icon,SentIcon}from"@/components/hugeicons";
import Icon from"./Icon";
import{EMAIL,PHONE,socials}from"@/lib/data";
export default function Contact(){
 const[c,setC]=useState(false);
 const copy=()=>{navigator.clipboard?.writeText(EMAIL);setC(true);setTimeout(()=>setC(false),2500)};
 const send=(e:React.FormEvent<HTMLFormElement>)=>{e.preventDefault();const f=new FormData(e.currentTarget);location.href=`mailto:${EMAIL}?subject=${encodeURIComponent("Portfolio enquiry from "+f.get("n"))}&body=${encodeURIComponent(String(f.get("m"))+"\n\n— "+f.get("n")+" ("+f.get("e")+")")}`};
 const inp="w-full border-b border-cream/20 bg-transparent py-3 text-cream placeholder:text-cream/35 focus:border-cream focus:outline-none";
 return(<div className="grid gap-14 lg:grid-cols-2">
  <div data-r>
   <p className="dot-label">Contact</p>
   <h2 className="h2 mt-5">Let’s build the future of <em>autonomous systems.</em></h2>
   <p className="mt-6 max-w-md text-cream/65">Open to graduate research in robotics, autonomy and perception, engineering roles and deep-tech collaboration.</p>
   <div className="mt-10 flex flex-wrap gap-3">
    <button onClick={copy} className="btn bg-cream text-ink">{EMAIL}<Icon i={c?Tick02Icon:Copy01Icon} s={16}/></button>
    <a href="tel:+2347044765385" className="btn border border-cream/20 hover:border-cream"><Icon i={Call02Icon} s={16}/>{PHONE}</a>
   </div>
   <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm">{socials.map(s=><li key={s.n}><a href={s.h} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-cream/70 hover:text-cream">{s.n}<Icon i={ArrowUpRight01Icon} s={14}/></a></li>)}</ul>
  </div>
  <form onSubmit={send} data-r className="space-y-6 self-end">
   <input name="n" required placeholder="Your name" className={inp}/>
   <input name="e" type="email" required placeholder="Your email" className={inp}/>
   <textarea name="m" required rows={4} placeholder="Tell me about the opportunity…" className={inp+" resize-none"}/>
   <button className="btn bg-cream text-ink">Send message<Icon i={SentIcon} s={16}/></button>
  </form>
 </div>);
}
