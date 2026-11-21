"use client";
import{useEffect,useState}from"react";
import{ArrowUpRight01Icon,Menu01Icon,Cancel01Icon}from"@/components/hugeicons";
import Icon from"./Icon";
import ThemeToggle from"./ThemeToggle";
import{CV}from"@/lib/data";
const links=[["About","#about"],["Education","#education"],["Research","#research"],["Work","#work"],["Experience","#experience"],["Contact","#contact"]];
export default function Navbar(){
 const[s,setS]=useState(false),[o,setO]=useState(false);
 useEffect(()=>{const f=()=>setS(scrollY>40);f();addEventListener("scroll",f,{passive:true});return()=>removeEventListener("scroll",f)},[]);
 useEffect(()=>{document.body.style.overflow=o?"hidden":""},[o]);
 return(<>
  <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${s?"bg-cream/95 lg:bg-cream/80 lg:backdrop-blur-md border-b border-ink/10":""}`}>
   <nav className="wrap flex h-[72px] items-center justify-between">
    <a href="#top" className="font-serif text-2xl leading-none">Samuel<span className="italic text-ink-400"> Adebanjo</span></a>
    <ul className="hidden items-center gap-9 lg:flex">
     {links.map(([l,h])=><li key={h}><a href={h} className="text-[13px] text-ink-600 transition-colors hover:text-ink">{l}</a></li>)}
    </ul>
    <div className="flex items-center gap-3"><ThemeToggle/>
    <a href={CV} target="_blank" rel="noopener noreferrer" className="btn-dark hidden !py-2.5 lg:inline-flex">View CV<Icon i={ArrowUpRight01Icon} s={16}/></a>
    <button onClick={()=>setO(true)} aria-label="Open menu" className="lg:hidden"><Icon i={Menu01Icon} s={26}/></button></div>
   </nav>
  </header>
  <div className={`menu fixed inset-0 z-[60] flex flex-col bg-ink p-6 text-cream lg:hidden ${o?"open":""}`} aria-hidden={!o}>
   <div className="flex items-center justify-between"><span className="font-serif text-2xl">Menu</span><button onClick={()=>setO(false)} aria-label="Close menu"><Icon i={Cancel01Icon} s={26}/></button></div>
   <ul className="mt-14 space-y-3">{links.map(([l,h],i)=><li key={h}><a onClick={()=>setO(false)} href={h} className="font-serif text-5xl"><span className="mr-3 align-top font-sans text-xs text-cream/40">0{i+1}</span>{l}</a></li>)}</ul>
   <a href={CV} target="_blank" rel="noopener noreferrer" className="btn mt-auto self-start bg-cream text-ink">View CV<Icon i={ArrowUpRight01Icon} s={16}/></a>
  </div>
 </>);
}
