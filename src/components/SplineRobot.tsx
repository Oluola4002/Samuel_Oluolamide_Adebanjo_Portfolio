"use client";
import Image from"next/image";
import{Component,lazy,Suspense,useEffect,useRef,useState,type ReactNode}from"react";
import type{Application}from"@splinetool/runtime";

/*
 Interactive robot, built to stay light:
 1. A still image (18 KB) shows instantly, so the hero always looks finished.
 2. The 3D engine only downloads after the page has loaded, the browser is idle,
    and the robot is on screen. Low-memory phones and data-saver users keep the
    still image, which still tilts toward taps and the mouse.
 3. Once live, the 3D scene renders at a capped resolution and pauses completely
    whenever it is scrolled off screen or the tab is hidden.
*/
const Spline=lazy(()=>import("@splinetool/react-spline"));
const SCENE="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";
// Transparent background: the page (and the orbit rings behind) show straight through the 3D scene.
const SCENE_BG={light:"rgba(0,0,0,0)",dark:"rgba(0,0,0,0)"};

class Safe extends Component<{children:ReactNode;onFail:()=>void},{err:boolean}>{
 state={err:false};static getDerivedStateFromError(){return{err:true}}
 componentDidCatch(){this.props.onFail()}render(){return this.state.err?null:this.props.children}
}

type Nav=Navigator&{deviceMemory?:number;connection?:{saveData?:boolean;effectiveType?:string}};
function canRun3D(){
 const n=navigator as Nav;
 if(matchMedia("(prefers-reduced-motion: reduce)").matches)return false;
 if(n.connection?.saveData||/2g/.test(n.connection?.effectiveType||""))return false;
 if((n.deviceMemory??8)<=2||(n.hardwareConcurrency??8)<=2)return false;
 try{return!!document.createElement("canvas").getContext("webgl2")}catch{return false}
}
const theme=()=>(document.documentElement.dataset.theme==="dark"?"dark":"light") as "light"|"dark";

export default function SplineRobot(){
 const box=useRef<HTMLDivElement>(null),poster=useRef<HTMLDivElement>(null),app=useRef<Application|null>(null);
 const[load,setLoad]=useState(false),[ready,setReady]=useState(false),[failed,setFailed]=useState(false);
 const live=ready&&!failed;

 // Decide whether (and when) to load the 3D engine.
 useEffect(()=>{
  if(!canRun3D())return;
  let seen=false,idle=false,done=false;const go=()=>{if(seen&&idle&&!done){done=true;setLoad(true)}};
  const io=new IntersectionObserver(([e])=>{if(e.isIntersecting){seen=true;go()}},{rootMargin:"200px"});
  box.current&&io.observe(box.current);
  const whenIdle=()=>{const ric=(window as any).requestIdleCallback as undefined|((cb:()=>void,o:{timeout:number})=>void);ric?ric(()=>{idle=true;go()},{timeout:2500}):setTimeout(()=>{idle=true;go()},1200)};
  document.readyState==="complete"?whenIdle():addEventListener("load",whenIdle,{once:true});
  return()=>{io.disconnect();removeEventListener("load",whenIdle)};
 },[]);

 // Pause the 3D scene when it is off screen or the tab is hidden: zero GPU/CPU while you read.
 useEffect(()=>{
  if(!live||!box.current)return;let vis=true;
  const sync=()=>{const a=app.current as any;if(!a)return;vis&&!document.hidden?a.play?.():a.stop?.()};
  const io=new IntersectionObserver(([e])=>{vis=e.isIntersecting;sync()});io.observe(box.current);
  document.addEventListener("visibilitychange",sync);
  return()=>{io.disconnect();document.removeEventListener("visibilitychange",sync)};
 },[live]);

 // Keep the 3D background matched to the theme.
 useEffect(()=>{const f=()=>{try{app.current?.setBackgroundColor(SCENE_BG[theme()])}catch{}};addEventListener("themechange",f);return()=>removeEventListener("themechange",f)},[]);

 // Look toward the pointer. Live: relay taps/clicks to the 3D scene (phones have no hover).
 // Still image: tilt it toward the pointer with a cheap GPU transform.
 useEffect(()=>{
  let raf=0;
  const tilt=(e:PointerEvent)=>{
   const p=poster.current,b=box.current;if(!p||!b)return;cancelAnimationFrame(raf);
   raf=requestAnimationFrame(()=>{const r=b.getBoundingClientRect(),x=(e.clientX-(r.left+r.width/2))/innerWidth,y=(e.clientY-(r.top+r.height*.35))/innerHeight;
    p.style.transform=`perspective(900px) rotateY(${Math.max(-1,Math.min(1,x))*16}deg) rotateX(${Math.max(-1,Math.min(1,-y))*8}deg)`});
  };
  const relay=(e:PointerEvent)=>{
   const c=box.current?.querySelector("canvas");if(!c||e.target===c)return;
   const o={clientX:e.clientX,clientY:e.clientY,screenX:e.screenX,screenY:e.screenY,bubbles:true,pointerType:"mouse",isPrimary:true};
   c.dispatchEvent(new PointerEvent("pointermove",o));
  };
  const down=(e:PointerEvent)=>live?relay(e):tilt(e);
  const move=(e:PointerEvent)=>{if(!live&&e.pointerType==="mouse")tilt(e)};
  addEventListener("pointerdown",down,{passive:true});addEventListener("pointermove",move,{passive:true});
  return()=>{cancelAnimationFrame(raf);removeEventListener("pointerdown",down);removeEventListener("pointermove",move)};
 },[live]);

 const onLoad=(a:Application)=>{
  app.current=a;
  try{a.setBackgroundColor(SCENE_BG[theme()])}catch{}
  // Cap rendering resolution: a 3x phone screen would otherwise render 9x the pixels.
  try{const r=(a as any)._renderer,cap=Math.min(devicePixelRatio||1,innerWidth<768?1.25:1.5);r?.setPixelRatio?.(cap);dispatchEvent(new Event("resize"))}catch{}
  setReady(true);
 };

 return(<div ref={box} className="robot relative h-[400px] w-full sm:h-[480px] lg:h-[560px] xl:h-[620px]">
  {load&&!failed&&<div className={`absolute inset-0 transition-opacity duration-700 ${live?"opacity-100":"opacity-0"}`}>
   <Safe onFail={()=>setFailed(true)}><Suspense fallback={null}><Spline scene={SCENE} onLoad={onLoad}/></Suspense></Safe>
  </div>}
  <div ref={poster} className={`pointer-events-none absolute inset-0 transition-[opacity,transform] duration-700 ease-out ${live?"opacity-0":"opacity-100"}`}>
   <Image src="/images/robot-poster.webp" alt="Interactive robot" fill priority quality={95} sizes="(max-width:1024px) 100vw, 620px" className="object-contain object-center"/>
  </div>
  <span className="absolute left-3 top-4 whitespace-nowrap font-mono sm:left-6 sm:top-7 text-[10px] uppercase tracking-[.18em] text-ink-400">{live?"Click anywhere · it looks":"Tap anywhere"}</span>
 </div>);
}
