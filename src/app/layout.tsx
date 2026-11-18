import type{Metadata,Viewport}from"next";
import localFont from"next/font/local";
import"./globals.css";
import Navbar from"@/components/Navbar";
import Reveal from"@/components/Reveal";

const sans=localFont({src:"../fonts/inter-latin-wght-normal.woff2",weight:"100 900",variable:"--f-sans",display:"swap"});
const mono=localFont({src:"../fonts/jetbrains-mono-latin-500-normal.woff2",weight:"500",variable:"--f-mono",display:"swap"});
const serif=localFont({src:[{path:"../fonts/instrument-serif-latin-400-normal.woff2",style:"normal"},{path:"../fonts/instrument-serif-latin-400-italic.woff2",style:"italic"}],weight:"400",variable:"--f-serif",display:"swap"});

export const viewport:Viewport={themeColor:"#F2EDE4"};
// Runs before paint so the page never flashes the wrong theme.
const themeScript=`try{var t=localStorage.getItem("theme")||(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");document.documentElement.dataset.theme=t;if(t==="dark")document.querySelector('meta[name="theme-color"]')?.setAttribute("content","#0E0E0D")}catch(e){}`;
export const metadata:Metadata={
 title:"Samuel Oluolamide Adebanjo - Aerospace Engineer",
 description:"Portfolio of Samuel Oluolamide Adebanjo, First-Class Aerospace Engineer and researcher in Aero-Astro Intelligence: autonomous UAV/UGV robotics, flight dynamics and deep learning.",
 keywords:["Samuel Oluolamide Adebanjo","Aerospace Engineer","Aero-Astro Intelligence","UAV Autonomy","Lagos State University","SPE NAICE"],
 authors:[{name:"Samuel Oluolamide Adebanjo"}],
 openGraph:{title:"Samuel Oluolamide Adebanjo - Aero-Astro Intelligence",description:"First-Class Aerospace Engineer pioneering autonomous robotics and aerospace systems.",url:"https://samueloluolamideadebanjo.com",siteName:"Samuel Oluolamide Adebanjo",locale:"en_US",type:"website"},
 twitter:{card:"summary_large_image",title:"Samuel Oluolamide Adebanjo - Aerospace Engineer"},
};

export default function RootLayout({children}:{children:React.ReactNode}){
 return(<html lang="en" className={`${sans.variable} ${serif.variable} ${mono.variable}`} suppressHydrationWarning>
  <head><script dangerouslySetInnerHTML={{__html:themeScript}}/></head>
  <body className="font-sans antialiased">
   <div className="curtain" aria-hidden><i/><i/><b><span><em>Samuel Adebanjo</em></span></b></div>
   <Navbar/>{children}<Reveal/>
  </body></html>);
}
