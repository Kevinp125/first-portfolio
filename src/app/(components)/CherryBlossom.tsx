import Image from "next/image";

export default function CherryBlossom() {
  return(
    <Image
      className = 
      {`select-none fixed top-0 left-0 origin-top-left rotate-45 z-50 pointer-events-none 

        /* translate: smaller on phones, larger on tablets, full on desktop */
        translate-x-24  -translate-y-20      /* default (<640 px) */
        sm:translate-x-24 sm:-translate-y-16  /* 640‑767 px */
        md:translate-x-36 md:-translate-y-32  /* 768 px and up */

        scale-75  sm:scale-90 md:scale-100`} 
      src = "/images/cherryBlossom.webp" 
      alt = "Kevin Cherry Blossom" 
      width = {450} height = {550}/>

  );


}
