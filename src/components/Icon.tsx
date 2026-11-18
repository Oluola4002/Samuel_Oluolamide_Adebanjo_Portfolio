import{createElement as h}from"react";
type Def=readonly(readonly[string,Record<string,string>])[];
export default function Icon({i,s=18,c}:{i:Def;s?:number;c?:string}){
 return <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className={c} aria-hidden>{i.map(([t,a],k)=>h(t,{...a,key:k}))}</svg>;
}
