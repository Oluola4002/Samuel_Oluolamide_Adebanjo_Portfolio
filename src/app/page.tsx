import{ArrowUpRight01Icon,ArrowDown01Icon,ArrowRight01Icon,Rocket01Icon,DroneIcon,Satellite01Icon,AiBrain01Icon,BookOpen01Icon}from"@/components/hugeicons";
import Icon from"@/components/Icon";
import Portraits from"@/components/Portraits";
import SplineRobot from"@/components/SplineRobot";
import Orbits from"@/components/Orbits";
import WorkCanvas from"@/components/WorkCanvas";
import Gallery from"@/components/Gallery";
import Tabs from"@/components/Tabs";
import Skills from"@/components/Skills";
import Contact from"@/components/Contact";
import{CV,stats,honors,pillars,papers,experience,leadership}from"@/lib/data";

const pIcons=[Rocket01Icon,DroneIcon,Satellite01Icon,AiBrain01Icon];
// Affiliations wall, set in mixed type like a logo strip.
const orgs:[string,string][]=[["Lagos State University","font-serif text-2xl"],["NASRDA · CSTP","font-mono text-sm tracking-[.2em]"],["Society of Petroleum Engineers","font-sans text-base font-semibold"],["ASME Foundation","font-serif text-2xl italic"],["Nigerian Society of Engineers","font-mono text-sm tracking-[.14em] uppercase"],["FlexiSAF","font-sans text-xl font-bold tracking-tight"],["Innovia Labs","font-serif text-2xl"],["COREN","font-mono text-sm tracking-[.3em]"]];

// Centred section heading with an ember-dot label.
function Head({e,t,s}:{n?:string;e:string;t:React.ReactNode;s?:string;c?:string}){
 return(<div data-r className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
  <p className="dot-label">{e}</p>
  <h2 className="h2 mt-5">{t}</h2>
  {s&&<p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-ink-600">{s}</p>}
 </div>);
}

export default function Home(){
 return(<main id="top">
  {/* HERO */}
  <section className="wrap grid min-h-[100svh] items-center gap-10 pb-12 pt-28 lg:grid-cols-[1.15fr_1fr] lg:pt-24">
   <div className="order-2 lg:order-1">
    <a href="#research" data-r className="pill"><i/>New · SPE paper at NAICE 2026<Icon i={ArrowRight01Icon} s={14}/></a>
    <h1 className="lines mt-7 font-serif text-[3.4rem] leading-[.95] tracking-tight sm:text-7xl xl:text-[6.5rem]"><span><span>Engineering</span></span><span><span>autonomy for <em className="text-ink-400">air</em></span></span><span><span>&amp; <em className="text-ink-400">space.</em></span></span></h1>
    <p data-r className="eyebrow mt-7">First-Class Aerospace Engineer · Lagos, Nigeria</p>
    <p data-r className="mt-4 max-w-lg text-[17px] leading-relaxed text-ink-600">I’m Samuel Oluolamide Adebanjo, LASU’s best graduating student of 2026, building <span className="text-ink">Aero-Astro Intelligence</span>: autonomous UAVs, ground robots and adaptive machine learning for aerospace problems.</p>
    <div data-r className="mt-10 flex flex-wrap gap-3">
     <a href="#work" className="btn-dark">See my work<Icon i={ArrowDown01Icon} s={16}/></a>
     <a href={CV} target="_blank" rel="noopener noreferrer" className="btn-line">Full CV<Icon i={ArrowUpRight01Icon} s={16}/></a>
    </div>
   </div>
   <div className="relative isolate order-1 -mx-5 sm:mx-0 lg:order-2"><Orbits/><SplineRobot/></div>
  </section>

  {/* STATS */}
  <section className="wrap"><dl className="grid grid-cols-2 border-y border-ink/15 md:grid-cols-4">
   {stats.map((s,i)=><div key={s.l} data-r className={`py-7 pr-4 ${i%2?"pl-5 border-l border-ink/15":""} ${i===2?"md:pl-5 md:border-l md:border-ink/15":""} ${i>1?"border-t border-ink/15 md:border-t-0":""}`}><dt className="font-serif text-4xl sm:text-5xl">{s.v}</dt><dd className="mt-2 text-xs leading-snug text-ink-400">{s.l}</dd></div>)}
  </dl></section>

  {/* AFFILIATIONS */}
  <section className="py-14" aria-label="Affiliations">
   <p className="mb-8 text-center text-sm text-ink-400">Trained, published &amp; recognised with</p>
   <div className="fade-x overflow-hidden"><div className="mq items-center">{[...orgs,...orgs].map(([n,c],i)=><span key={i} aria-hidden={i>=orgs.length} className={`whitespace-nowrap px-8 text-ink/45 sm:px-12 ${c}`}>{n}</span>)}</div></div>
  </section>

  {/* ABOUT */}
  <section id="about" className="cv wrap py-16 md:py-24">
   <Head n="01" e="About" t={<>A record-setting foundation, aimed at <em>robotic perception</em> &amp; adaptive control.</>}/>
   <div className="grid items-start gap-10 md:grid-cols-[.8fr_1.4fr] md:gap-14">
    <div data-r className="md:sticky md:top-24"><Portraits/></div>
    <div data-r>
     <div className="space-y-4 text-[15px] leading-relaxed text-ink-600">
      <p>First-Class Honours with a CGPA of <b className="font-medium text-ink">4.97/5.00</b>. Best graduating student across Lagos State University in 2026, with the highest CGPA in the history of the Department of Aerospace Engineering.</p>
      <p>Graduate Member of the Nigerian Society of Engineers (GMNSE) and Pupil Member of COREN. Seeking graduate research in perception, adaptive control and human-robot interaction.</p>
     </div>
     <ol className="mt-8 grid grid-cols-2 gap-x-5 sm:gap-x-8">{honors.map(([t,p],i)=><li key={t} className="flex gap-3 border-t border-ink/15 py-3.5"><span className="font-mono text-[10px] text-ink-400">{String(i+1).padStart(2,"0")}</span><span><span className="block text-[13px] font-medium leading-snug sm:text-[15px]">{t}</span><span className="text-xs text-ink-400 sm:text-[13px]">{p}</span></span></li>)}</ol>
    </div>
   </div>
  </section>

  {/* RESEARCH (dark) */}
  <section id="research" className="cv dark bg-ink py-20 text-cream md:py-28">
   <div className="wrap">
    <Head n="02" e="Research" t={<>Aero-Astro <em>Intelligence</em>: aerospace, robotics &amp; AI as one discipline.</>}/>
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-cream/10 lg:grid-cols-4">
     {pillars.map((p,i)=><div key={p.t} data-r className="bg-ink p-4 sm:p-7"><Icon i={pIcons[i]} s={24} c="text-ember"/><h3 className="mt-6 font-serif text-xl leading-tight sm:mt-10 sm:text-2xl">{p.t}</h3><p className="mt-2 text-xs leading-relaxed text-cream/55 sm:mt-3 sm:text-sm">{p.d}</p></div>)}
    </div>
    <div className="mt-12 grid gap-10 lg:grid-cols-2">
     {papers.map(p=><article key={p.id} data-r className="border-t border-cream/20 pt-6">
      <p className="flex items-center gap-2 text-xs uppercase tracking-[.18em] text-cream/50"><Icon i={BookOpen01Icon} s={14}/>{p.id} · {p.role}</p>
      <h3 className="mt-4 font-serif text-2xl leading-snug sm:text-[1.7rem]">{p.t}</h3>
      <p className="mt-4 text-sm leading-relaxed text-cream/60">{p.d}</p>
      <a href={`https://doi.org/${p.doi}`} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-1 text-sm underline-offset-4 hover:underline">DOI {p.doi}<Icon i={ArrowUpRight01Icon} s={14}/></a>
     </article>)}
    </div>
   </div>
  </section>

  {/* WORK */}
  <section id="work" className="cv py-16 md:py-24">
   <div className="wrap">
    <Head n="03" e="Selected work" t={<>Robotics, CAD &amp; <em>autonomous systems</em> built for the real world.</>} s="Five projects, from a delivery drone to a 360 m² aircraft hangar."/>
    <div data-r><WorkCanvas/></div>
   </div>
  </section>

  {/* EXPERIENCE + SKILLS */}
  <section id="experience" className="cv wrap py-16 md:py-24">
   <Head n="04" e="Experience" t={<>From rocket propulsion labs to <em>generative AI.</em></>}/>
   <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr]">
    <div data-r><Tabs sets={{Experience:experience,Leadership:leadership}}/></div>
    <div data-r><p className="dot-label mb-6">Toolkit</p><Skills/></div>
   </div>
  </section>

  {/* RECOGNITION + MOMENTS */}
  <section className="cv dark bg-ink py-20 text-cream md:py-28">
   <div className="wrap">
    <Head n="05" e="Recognition" t={<>Awards, certificates &amp; moments <em>in the room.</em></>}/>
    <Gallery/>
   </div>
  </section>

  {/* CONTACT */}
  <section id="contact" className="cv dark border-t border-cream/10 bg-ink py-20 text-cream md:py-28">
   <div className="wrap"><Contact/>
    <footer className="mt-24 flex flex-col justify-between gap-3 border-t border-cream/10 pt-8 text-xs text-cream/45 sm:flex-row">
     <span>© {new Date().getFullYear()} Samuel Oluolamide Adebanjo</span><span>samueloluolamideadebanjo.com · Aero-Astro Intelligence</span>
    </footer>
   </div>
  </section>
 </main>);
}
