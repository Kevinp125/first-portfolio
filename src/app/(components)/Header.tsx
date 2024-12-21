// "use client";
// import { usePathname } from 'next/navigation'; //importing the useRouter hook to figure out route we are on so that main header can change dynamically depending on route we are on

// export default function Header(){

//   const pathname = usePathname(); //using the useRouter hook to get the route we are on down the line
//   let header; //value that will store whatever our boolean returns
//   const pageTitles = { //creating an object with the key-value structure we are going to call router.getPathname() to get the route we are on and then get the value of that key from the object
//     '/': 'Home',
//     '/about': 'About',
//     '/projects': 'Projects',
//     '/experience': 'Experience',
//     '/skills': 'Skills',
//   }

//   header = pageTitles[pathname as keyof typeof pageTitles] || 'page not found'; //had to assert in this line that the router.pathname would be a key of the pageTitles object. If it is not a key of the object it will return 'page not found'

//   return <h1> {header} </h1>; //returning the header so it can be rendered

// }

//above implemetation was using the useRouter hook to get the route we are on and then using that to change the header dynamically depending on the route we are on. Leaving it commented so you can see how to use useRouter however to much run time just going to apply class styles in this component and call it in each respective page

import { BriefcaseBusiness, FolderCode, Braces, House, User} from 'lucide-react'; //importing specific icons from lucide-react library these icons already have the svg code edited and are made into components so tailwind works on them. Importing them here since our little header tag has an icon

export default function Header({header, icon}: {header: string, icon: string}){ //the prop syntax inside the parenthesis a little different than vanilla Javascript because in TS we need to define the types. we are taking the "header" attribute and letting ts know that the object passed in has a property of header thagt is a string

    const icons = { //an key value pair object that has the name of the icon and the icon component itself
      Home: <House className = "text-pink-300 w-5 h-5" />,
      About: <User className = "text-pink-300 w-5 h-5" />,
      Projects: <FolderCode className = "text-pink-300 w-5 h-5" />,
      Experience: <BriefcaseBusiness className = "text-pink-300 w-5 h-5"/>,
      Skills: <Braces className = "text-pink-300 w-5 h-5"/>,
    }
    //here in order to save us the trouble of passing in an icon from wherever we call the header component we pass in a string and then see if it matches any icon we have if it does it will assign that icon
    const iconComponent = icons[icon as keyof typeof icons] || null;

    //here we place the icon and the header inside a flex component dont specify flex row because by default that is what is applied. Horizontal axis is the main axis (side by side) and the vertical axis is the cross axis (top to bottom) therefore we use items-center which targets the cross to center them vertically (make sure same height)
    return (
      <div className = " fixed top-24 flex items-center gap-0.5 border-navbarBorder border-2 rounded-2xl p-2 "> 

        {iconComponent}
        <h1 className = "text-xl text-pink-300 "> {header} </h1>
      
      </div>

    );
}