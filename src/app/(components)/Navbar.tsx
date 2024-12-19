import React from 'react';
import Link from 'next/link';

//<Link> tag is a react thing that improves client side traveling to links. when user clicks on it it will take you there
//href defines where the link will take you once it is clicked

//declaring an array of objects that contain the href and name of the links that will be displayed in the navbar
const links = [
  {href: '/', name: 'H'},
  {href: '/about', name: 'A'},
  {href: '/projects', name: 'P'},
  {href: '/experience', name: 'E'},
  {href: '/skills', name: 'S'},
]

export default function Navbar (){
  
  return(
    <nav
    className = "fixed right-12 top-1/2 transform -translate-y-1/2 w-16 h-96 bg-navbarFill rounded-3xl flex flex-col items-center justify-evenly shadow-xl border-4 border-navbarBorder">{/*fixed makes the navbar stay in the same place on the screen, right-10 moves it 10 units from the right side of the screen, top-1/2 moves it 50% from the top of the screen, transform -translate-y-1/2 moves it up 50% of its height*/}

    {/*mapping through the links array and creating a Link tag for each link in the array, just easier and better code practice so we dont have to
      manually change a bunch of Link tags now if we want to update any specific link just go to link array*/}

    {links && links.map( ({href, name}) => (
      <Link key = {href} href = {href}> {name} </Link>
    ))}

    </nav>

  );

}