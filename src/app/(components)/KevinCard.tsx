import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Github, Linkedin, FileText} from 'lucide-react';

//variable that will contain pfp image displayed on the littel card on the left side of the page

const KevinPFP = <Image className = "rounded-3xl" src = "/images/KevinPFP.jpg" alt = "Kevin Pereda" width = {200} height = {200}/>; 

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

  return(
    <div className = "fixed flex items-center flex-col left-8 top-1/2 -translate-y-1/2 bg-navbarFill w-72 h-128 rounded-3xl overflow-visible z-10">
      <div className = "w-52 h-52 translate-y-8">
        {KevinPFP}
      </div>

      <div className = "flex justify-center gap-3 mt-32">

        {circleSocialIcons && circleSocialIcons.map(({href, icon}) =>(
          <div className = "w-16 h-16 bg-pink-300 rounded-full flex items-center justify-center"> 
            <a href={href} target="_blank" rel="noopener noreferrer">
              {icon}
            </a>
          </div>
      
        ))}
      </div>

      <div className = " flex justify-center items-center w-52 h-14 mt-6 rounded-full bg-pink-300">
        <Link target = "_blank" href = "/KevinResume.pdf"> <FileText className = "text-black w-6 h-6" /> </Link>
        <Link target = "_blank" href = "/KevinResume.pdf" className = "text-black text-2xl target:"> Resume </Link>

      </div>

    </div>

  );

}