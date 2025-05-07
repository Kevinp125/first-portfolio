"use client";

import { useEffect } from "react";
export default function ScrollLock(){

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
  
    // stash originals (in case other pages changed them)
    const htmlOverflow = html.style.overflow;
    const bodyOverflow = body.style.overflow;
  
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
  
    /* cleanup on route‑change / unmount */
    return () => {
      html.style.overflow = htmlOverflow;
      body.style.overflow = bodyOverflow;
    };
  }, []);

  return null;

}