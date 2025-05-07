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
      techUsed: ["Next.js", "Tailwind", "React"],
    },
    
    //CyberSpurs
    {
      name: "Cyber Spurs",
      description: "Cyber Spurs is a game about a futuristic cowboy taking down cyber criminals using bullet time and takedown abilities. I created the boss battle state machine from scratch and handled enemy navigation with NavMeshes. Try playing it for yourself!",
      imageSrc: "/images/projectIcons/cyber.png",
      imageAlt: "Cyber Spurs Logo",
      linkRef:"https://play.unity.com/en/games/b645f619-26f2-4bb4-875a-3b0952dbef90/cyberspurs",
      techUsed: ["Unity", "C#"],
    },

    //2-4 Tree Gerbie Project
    {
      name: "2-4 Tree",
      description: "I spent a few months implementing a 2-4 tree in Java from scratch. While I can't beat Java's TreeSet (maybe one day), my implementation was only a few milliseconds slower. This project helped me understand edge cases, achieve near-comparable performance, and truly grasp how the 2-4 tree data structure works.",
      imageSrc: "/images/projectIcons/bonsaiTree.png",
      imageAlt: "2-4 Tree Logo",
      linkRef:"https://github.com/Kevinp125/2-4-Tree.git",
      techUsed: ["Java"],
    },


    //Skip List Gerbie Project
    {
      name: "Skip List Collection",
      description: "I implemented a SkipList from scratch using generics, making it compatible with any data type—just like a Java collection. This project helped me truly understand generics and how to make data structures accessible to any type.",
      imageSrc: "/images/projectIcons/skiplist.png",
      imageAlt: "Skip List Collections Logo",
      linkRef:"https://github.com/Kevinp125/SkipList-Project.git",
      techUsed: ["Java"],
    },

  ];


  return (
    //This div is just to make sure all other siblings in this page stack on each other vertically
    <div className = "flex flex-col items-center">
      
      {/*This div is to align the <p> tag with our header */}
      <div className = "flex flex-row justify-start pt-60 pl-12 md:p-6 md:pt-96 lg:pl-50 lg:pt-48">
        <Header header = "Projects" icon = "Projects"/>
        <p className = "animate-fade animate-once animate-duration-[2000ms] animate-normal animate-fill-forwards text-lg max-w-2xl wrap ">Since I began studying computer science, I&apos;ve worked on a variety of projects showcasing my skills and creativity, which is all also on my GitHub.</p>
      </div>

      {/*This div maintains our grid of project cards. We map over the projectInfo array of objects and pass each object into the PorjectCard where the card gets rendered on to the grid */}
      <div className = "grid grid-cols-1 pl-7 mb-20 lg:grid-cols-2 gap-4 pt-8 lg:pl-36 lg:mb-0 auto-rows-fr"> {/*Here we added auto-rows-fr to make sure if one card has a lot of tech and the height is bigger other cards match this height as well */}
        {projectInfo.map((project, i) => (
          //below we passed in the inline css style prop to the ProjectCard component so that we can stagger the animation of each card. We do this by multiplying the index by 0.2s so that each card is delayed by 0.2s. We also passed in the className so we can give parent porject card div the fade-right animation
          //remember we need to use style because we need to change vanilla css since tailwind doesnt support dynamic delay times they are static
          <ProjectCard style = {{animationDelay: `${i*0.2}s`}} className = "animate-fade-right animate-normal animate-fill-forwards" key = {i} project = {project}/>
  
        ))}
      </div>

    </div>
    
  );
}