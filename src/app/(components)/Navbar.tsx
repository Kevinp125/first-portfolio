import React from 'react';
import Link from 'next/link';
import { BriefcaseBusiness, FolderCode, Braces, House, User} from 'lucide-react'; //importing specific icons from lucide-react library these icons already have the svg code edited and are made into components so tailwind works on them. We want them with tailwind working so we can apply hover effects and transitions to them.

//<Link> tag is a react thing that improves client side traveling to links. when user clicks on it it will take you there
//href defines where the link will take you once it is clicked

//declaring an array of objects that contain the href and name of the links that will be displayed in the navbar
const links = [
  {href: '/', icon: <House className = "text-black hover:text-pink-300 transition-colors duration-300 ease-in-out}"/>, hoverLabel: "Home"},
  {href: '/about', icon:  <User className = "text-black hover:text-pink-300 transition-colors duration-300 ease-in-out }" />, hoverLabel: "About"},
  {href: '/projects', icon: <FolderCode className = "text-black hover:text-pink-300 transition-colors duration-300 ease-in-out}"/> , hoverLabel: "Projects" },
  {href: '/experience', icon: <BriefcaseBusiness className = "text-black hover:text-pink-300 transition-colors duration-300 ease-in-out}" />, hoverLabel: "Experience" },
  {href: '/skills', icon: <Braces className = "text-black hover:text-pink-300 transition-colors duration-300 ease-in-out}" />, hoverLabel: "Skills" },
]

//we are going to return all the link tags under a nav tag that is styled with tailwindcss

export default function Navbar (){
  
  return(
    <nav
    className = {`
    /* ─────────────────────────── MOBILE + MEDIUM (default) ─────────────────────────── */
    fixed bottom-0 inset-x-0
    h-16 flex items-center justify-evenly
    bg-navbarFill/60 backdrop-blur-md safe-bottom
    border-4 border-navbarBorder
    

    /*───────────────────────────── DESKTOP ≥ lg (override) ───────────────────────────*/

    lg:left-auto lg:right-12 lg:top-1/2 transform lg:-translate-y-1/2 
    lg:w-16 lg:h-96 bg-navbarFill rounded-3xl 
    lg:flex-col shadow-xl z-10`}>{/*fixed makes the navbar stay in the same place on the screen, right-10 moves it 10 units from the right side of the screen, top-1/2 moves it 50% from the top of the screen, transform -translate-y-1/2 moves it up 50% of its height*/}

    {/*mapping through the links array and creating a Link tag for each link in the array, just easier and better code practice so we dont have to
      manually change a bunch of Link tags now if we want to update any specific link just go to link array*/}

    {/*Used links && links.map in case links is null we can protect our code.*/}
    
    {/*added spans because they are inline and wont make their own blocks. Made position absolute so they dont mess with icons positioning. Made each link a relative group so they know in reference to what is their aboslute position changing. Second span is to add the arrow affect to my tags*/}

    {links && links.map( ({href, icon, hoverLabel}) => (
      <Link key = {href} href = {href} className = "group relative group"> {icon} 
        <span className = "hidden md:block absolute right-10 -top-0.5 text-sm bg-zinc-700 text-white p-0.5 pl-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out pointer-events-none"> {hoverLabel} 

          <span className = "absolute top-1/2 transform -translate-y-1/2 -translate-x-2 w-4 h-4 bg-zinc-700 rotate-45 -z-10"></span>

        </span>
      
      
      </Link>
    
    ))}

    </nav>

  );

}