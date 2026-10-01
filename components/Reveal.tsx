"use client";
import { useEffect, useRef, type ReactNode } from "react";
export function Reveal({children,className=""}:{children:ReactNode;className?:string}){
 const ref=useRef<HTMLDivElement>(null);
 useEffect(()=>{const el=ref.current;if(!el)return;const io=new IntersectionObserver(([entry])=>{if(entry.isIntersecting){el.classList.add("is-visible");io.unobserve(el)}},{threshold:.12,rootMargin:"0px 0px -40px"});io.observe(el);return()=>io.disconnect()},[]);
 return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}
