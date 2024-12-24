import Header from "../(components)/Header";
import ProjectCard from "../(components)/ProjectCard";

export default function app() {

  {/*Below is an Array of objects that contains project objects. If you want a new object on your website or to edit any old ones jsut edit the array the actual rendering code uses mapping so you'll be good */}
  const projectInfo = [

    //my website project
    {
      name: "Kevin.dev",
      description: "The site you are currently on! My personal portfolio website built with Next.js and Tailwind CSS. It showcases my projects, skills, and experiences.",
      imageSrc: "/images/projectIcons/naruto.png",
      imageAlt: "Naruto Kevin Website Logo",
      linkRef:"",
    },
    
    //CyberSpurs
    {
      name: "Cyber Spurs",
      description: "The site you are currently on! My personal portfolio website built with Next.js and Tailwind CSS. It showcases my projects, skills, and experiences.",
      imageSrc: "/images/projectIcons/cyber.png",
      imageAlt: "Cyber Spurs Logo",
      linkRef:"",
    },

    //2-4 Tree Gerbie Project
    {
      name: "2-4 Tree",
      description: "The site you are currently on! My personal portfolio website built with Next.js and Tailwind CSS. It showcases my projects, skills, and experiences.",
      imageSrc: "/images/projectIcons/bonsaiTree.png",
      imageAlt: "2-4 Tree Logo",
      linkRef:"",
    },


    //Skip List Gerbie Project
    {
      name: "Skip List Collections",
      description: "The site you are currently on! My personal portfolio website built with Next.js and Tailwind CSS. It showcases my projects, skills, and experiences.",
      imageSrc: "/images/projectIcons/skiplist.png",
      imageAlt: "Skip List Collections Logo",
      linkRef:"",
    },

  ];


  return (
    //This div is just to make sure all other siblings in this page stack on each other vertically
    <div className = "flex flex-col items-center">
      
      {/*This div is to align the <p> tag with our header */}
      <div className = "flex flex-row justify-start pl-44 pt-48">
        <Header header = "Projects" icon = "Projects"/>
        <p className = "text-lg max-w-2xl wrap ">Since I began studying computer science, I&apos;ve worked on a variety of projects showcasing my skills and creativity, which is all also on my GitHub.</p>
      </div>

      {/*This div maintains our grid of project cards. We map over the projectInfo array of objects and pass each object into the PorjectCard where the card gets rendered on to the grid */}
      <div className = "grid grid-cols-2 gap-4 pt-16 pl-36">
        {projectInfo.map((project, i) => (
          <ProjectCard key = {i} project = {project}/>
        ))}
      </div>

    </div>
    
  );
}