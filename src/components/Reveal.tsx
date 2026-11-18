"use client";
import{useEffect}from"react";
export default function Reveal(){
 useEffect(()=>{
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{rootMargin:"0px 0px -10% 0px"});
  document.querySelectorAll("[data-r],.cimg").forEach(n=>io.observe(n));
  return()=>io.disconnect();
 },[]);
 return null;
}
