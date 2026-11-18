"use client";
import{useEffect,useState}from"react";
import{Sun03Icon,Moon02Icon}from"@/components/hugeicons";
import Icon from"./Icon";

export type Theme="light"|"dark";
export const BG={light:"#F2EDE4",dark:"#0E0E0D"};

function apply(t:Theme){
 const r=document.documentElement;r.dataset.theme=t;
 document.querySelector('meta[name="theme-color"]')?.setAttribute("content",BG[t]);
 try{localStorage.setItem("theme",t)}catch{}
 dispatchEvent(new CustomEvent("themechange",{detail:t}));
}

export default function ThemeToggle({c=""}:{c?:string}){
 const[t,setT]=useState<Theme>("light");
 useEffect(()=>{setT((document.documentElement.dataset.theme as Theme)||"light");
  // follow the system setting until the visitor picks one themselves
  const q=matchMedia("(prefers-color-scheme: dark)");
  const f=(e:MediaQueryListEvent)=>{let saved=null;try{saved=localStorage.getItem("theme")}catch{}if(!saved){const n=e.matches?"dark":"light";document.documentElement.dataset.theme=n;setT(n);dispatchEvent(new CustomEvent("themechange",{detail:n}))}};
  q.addEventListener("change",f);return()=>q.removeEventListener("change",f)},[]);
 const toggle=(e:React.MouseEvent)=>{
  const n:Theme=t==="dark"?"light":"dark",r=document.documentElement;
  r.style.setProperty("--tx",e.clientX+"px");r.style.setProperty("--ty",e.clientY+"px");
  const d=document as Document&{startViewTransition?:(cb:()=>void)=>unknown};
  const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
  if(d.startViewTransition&&!reduce)d.startViewTransition(()=>apply(n));else apply(n);
  setT(n);
 };
 return <button onClick={toggle} aria-label={`Switch to ${t==="dark"?"light":"dark"} mode`} title={`${t==="dark"?"Light":"Dark"} mode`} className={`grid h-10 w-10 place-items-center rounded-full border border-ink/15 transition-colors hover:border-ink ${c}`}><Icon i={t==="dark"?Sun03Icon:Moon02Icon} s={18}/></button>;
}
