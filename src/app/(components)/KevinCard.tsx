//this component is the card on the side of the screen

"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Github, Linkedin, FileText, ChevronRight, ChevronLeft} from 'lucide-react';

//variable that will contain pfp image displayed on the littel card on the left side of the page

const KevinPFP = <Image className = "rounded-3xl" src = "/images/kevinpfpV2.jpg" alt = "Kevin's Profile Picture" width = {200} height = {200} unoptimized/>; 

//making an array of key value pairs so we can map over it and display them in our pink circles that will be the social links in the card
const circleSocialIcons = [
  {href: "https://www.linkedin.com/in/kevin-pereda/", icon: <Linkedin className = "w-8 h-8 text-black z-20"/>, }, 
  {href: "https://github.com/Kevinp125", icon: <Github className = "w-8 h-8 text-black z-20"/>, },
  {href: "mailto:kptwdo15@gmail.com", icon: <Mail className = "w-8 h-8 text-black z-20"/>, },
];

export default function KevinCard (){
  
  {/*below first div is for the card and to center it in the middle of the screen and we apply a flex (items center) so anything inside the div is centered horizontally. Inside i have a sep dev for the image another for the circle links */}

  {/* For the social links i declared an array of objects above so it wasnt hard coded. If you want to change socials change it there code below maps through them and returns
      a div that also has a flexbox so that the icon is centered withhin this div container */}
  
  {/*For the resume link i used the Link tag from next/link and passed in the href to the resume pdf and the text of the link is "Resume"
    Had to hardcode the resume link because I wanted an icon next to text and in order to keep those aligned I had to wrap them within a div
     and use the flex to center everything within that container. */}
  
  const [open, setOpen] = useState(false); //giving state so we can keep track of when the card is slid open on mobile or closed
  const [animate, setAnimate] = useState(false); //this state is so that the animation isnt also always happening whenever the page resizes set it to false initially

  const handleToggle = () => { //make a function and assign it to the namne handleToggle this is the callback that is going to be used whenever our slide out button is clicked
    setOpen(!open);          // flip drawer state
    setAnimate(true);        // enable animation
    setTimeout(() => setAnimate(false), 350);   // disable after 0.35 s
  };


  return(
    /*Below "<>" is a Fragment which allows us to wrap multiple jsx elements in a lightweight wrapper that adds nothing to the dom. components need to return only one root node */
    /* ───────── Toggle Button (only shows < md) ───────── */
    <>
      {open && ( //this will only apply if open is true. All it is is a blur background that takes up the entire page so when the card is out user focuses on that
        <div
          className={`
            lg:hidden fixed inset-0
            backdrop-blur-sm
            z-20 pointer-events-auto   /* block clicks */
          `}
        />
      )}

      <div //this wrapper div is what puts the slide out button and the card side by side to each other and fixes them on the center of screen
        className={`
          fixed left-1/2 lg:left-14 /*On lg screens dont cetner card just put it towards left*/
          top-1/2 -translate-y-1/2
          flex items-center                      /* button + card sit side‑by‑side */
          ${animate ? "transition-transform duration-300" : "transition-none"} /*If animate state is true we want to well animate it otherwise dont because card will bounce around when resizing*/
          ${open ? "translate-x-[calc(-50%+1rem)]" : "translate-x-[calc(-50vw-20.80rem+2.75rem)]"}   /* when opened out card at half the screen and when closed we have some calculation so only the little button sticks out*/
          lg:translate-x-0  
          z-40
        `}
      >

          <div className = "flex items-center flex-col bg-navbarFill w-72 h-128 rounded-3xl overflow-visible z-30">
            <div className = "w-52 h-52 translate-y-8">
              {KevinPFP}
            </div>

            <div className = "flex justify-center gap-3 mt-32">

              {circleSocialIcons && circleSocialIcons.map(({href, icon}) =>(
                <div key = {href} className = "w-16 h-16 bg-pink-300 rounded-full flex items-center justify-center"> 
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    {icon}
                  </a>
                </div>
            
              ))}
            </div>

            <div className = " flex justify-center items-center w-52 h-14 mt-6 rounded-full bg-subtlePink">
              <Link target = "_blank" href = "/KevinResume.pdf"> <FileText className = "text-black w-6 h-6" /> </Link>
              <Link target = "_blank" href = "/KevinResume.pdf" className = "text-black text-2xl target:"> Resume </Link>

            </div>

          </div>

          {/*Here when the button gets clicked we use the callback function handleToggle which is defined higher up. It toggles the open value to true. sets animate to true so it can animate and after a little bit sets animate back to false. Also we hide button on lg screens. */}
          <button onClick = {handleToggle} className = "lg:hidden -ml-3 z-20 bg-subtlePink h-20 w-11 rounded-lg transition-transform duration-300 border-2 border-navbarBorder "> {/*On button click we want to set its value to the opposite value */}
            {open ? <ChevronLeft className="translate-x-3 w-6 h-6 stroke-black"/>: <ChevronRight className="translate-x-3 w-6 h-6 stroke-black"/>}

          </button>
      </div>
    </>
  );

}