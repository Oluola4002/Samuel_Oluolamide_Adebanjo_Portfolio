"use client";
import{useEffect,useRef,useState}from"react";

/*
 3D solar system around the robot (the robot is the "sun"), built with CSS 3D only.
 - The orbit plane is tilted in perspective, so rings read as real orbits.
 - It is drawn twice: the far half behind the robot, the near half in front of it,
   so planets genuinely pass behind and in front of the robot.
 - Planets are shaded spheres, lit from the robot's direction.
 - The whole system tilts toward the mouse; each planet is one of Samuel's research
   areas: hover or tap it for its name, click to jump to the Research section.
 No WebGL, no extra engine: transforms run on the GPU and pause off screen.
*/
type P={d:number;t:number;a:number;s:number;k:string;name:string};
const planets:P[]=[
 {d:40,t:34,a:30,s:10,k:"p-ink",name:"Adaptive learning & control"},
 {d:60,t:58,a:200,s:16,k:"p-ember",name:"Space rocketry & propulsion"},
 {d:80,t:88,a:120,s:20,k:"p-sand saturn",name:"Planetary & critical infrastructure"},
 {d:100,t:130,a:300,s:12,k:"p-stone",name:"Aerial & ground robotics"},
];
const stars:[number,number,number][]=[[8,14,1.6],[17,8,1.1],[27,16,1.4],[22,27,1],[34,24,1.8],[44,12,1.1]];
const links=[[0,1],[1,2],[2,3],[2,4],[4,5]];

type Pick=(n:string|null,el?:HTMLElement)=>void;
function Plane({half,onPick}:{half:"far"|"near";onPick:Pick}){
 return(<div className={`orb-layer ${half}`}>
  <div className="orb-plane">
   {planets.map(p=><div key={p.d} className="orb-ring" style={{width:`${p.d}%`,height:`${p.d}%`}}>
    <div className="orb-spin" style={{animationDuration:`${p.t}s`,animationDelay:`-${p.t*p.a/360}s`}}>
     <div className="orb-slot">
      {/* counter-spin + undo the plane tilt so the sphere always faces you */}
      <div className="orb-unspin" style={{animationDuration:`${p.t}s`,animationDelay:`-${p.t*p.a/360}s`}}>
       <div className="orb-face">
        <a href="#research" aria-label={p.name} tabIndex={half==="near"?0:-1}
         onPointerEnter={e=>onPick(p.name,e.currentTarget)} onPointerLeave={()=>onPick(null)} onFocus={e=>onPick(p.name,e.currentTarget)} onBlur={()=>onPick(null)}
         className={`planet ${p.k}`} style={{width:p.s,height:p.s}}/>
       </div>
      </div>
     </div>
    </div>
   </div>)}
  </div>
 </div>);
}

export default function Orbits(){
 const el=useRef<HTMLDivElement>(null),[tip,setTip]=useState<{n:string;x:number;y:number}|null>(null);
 // the label is drawn on top of everything (outside the 3D layers), at the planet's on-screen position
 const pick:Pick=(n,t)=>{const b=el.current?.getBoundingClientRect();if(!n||!t||!b)return setTip(null);const r=t.getBoundingClientRect();setTip({n,x:r.left+r.width/2-b.left,y:r.top-b.top})};
 useEffect(()=>{
  const n=el.current;if(!n)return;
  const io=new IntersectionObserver(([e])=>n.classList.toggle("paused",!e.isIntersecting));io.observe(n);
  if(matchMedia("(prefers-reduced-motion: reduce)").matches||!matchMedia("(hover:hover)").matches)return()=>io.disconnect();
  // gentle parallax: the orbit plane leans toward the mouse (eased, one style write per frame)
  let raf=0,tx=0,ty=0,cx=0,cy=0;
  const tick=()=>{cx+=(tx-cx)*.06;cy+=(ty-cy)*.06;n.style.setProperty("--tilt",`${66+cy*8}deg`);n.style.setProperty("--yaw",`${-16+cx*14}deg`);raf=Math.abs(tx-cx)+Math.abs(ty-cy)>.002?requestAnimationFrame(tick):0};
  const move=(e:PointerEvent)=>{tx=e.clientX/innerWidth*2-1;ty=e.clientY/innerHeight*2-1;if(!raf)raf=requestAnimationFrame(tick)};
  addEventListener("pointermove",move,{passive:true});
  return()=>{io.disconnect();removeEventListener("pointermove",move);cancelAnimationFrame(raf)};
 },[]);
 return(<div ref={el} className="orbits pointer-events-none absolute inset-0 overflow-hidden lg:overflow-visible">
  <Plane half="far" onPick={pick}/>
  <Plane half="near" onPick={pick}/>
  {tip&&<span className="orb-tip" style={{left:tip.x,top:tip.y}}>{tip.n}</span>}
  <svg aria-hidden className="absolute right-0 top-0 -z-10 hidden h-[26%] w-[34%] text-ink/30 lg:block" viewBox="0 0 50 30" fill="none">
   {links.map(([a,b])=><line key={a+"-"+b} x1={stars[a][0]} y1={stars[a][1]} x2={stars[b][0]} y2={stars[b][1]} stroke="currentColor" strokeWidth=".15"/>)}
   {stars.map(([x,y,r],i)=><circle key={i} className="twinkle" style={{animationDelay:`${i*.7}s`}} cx={x} cy={y} r={r*.35} fill="currentColor"/>)}
  </svg>
 </div>);
}
