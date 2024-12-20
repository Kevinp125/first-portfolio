"use client";
import { usePathname } from 'next/navigation'; //importing the useRouter hook to figure out route we are on so that main header can change dynamically depending on route we are on

export default function Header(){

  const pathname = usePathname(); //using the useRouter hook to get the route we are on down the line
  let header; //value that will store whatever our boolean returns
  const pageTitles = { //creating an object with the key-value structure we are going to call router.getPathname() to get the route we are on and then get the value of that key from the object
    '/': 'Home',
    '/about': 'About',
    '/projects': 'Projects',
    '/experience': 'Experience',
    '/skills': 'Skills',
  }

  header = pageTitles[pathname as keyof typeof pageTitles] || 'page not found'; //had to assert in this line that the router.pathname would be a key of the pageTitles object. If it is not a key of the object it will return 'page not found'

  return <h1> {header} </h1>; //returning the header so it can be rendered

}