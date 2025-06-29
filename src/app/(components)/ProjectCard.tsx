import Image from "next/image";
import Link from "next/link";

//typeScript makes us define an intergasce for the props getting passed into component because it allows us to break down the type of each item in the object. Allows for type safety 
interface Project {
  name: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  linkRef: string;
  techUsed: string[];
}


export default function ProjectCard({project, className, style}: {project: Project, className: string, style: React.CSSProperties}) {

  //Needed these ternaries because for some reason my cyber spur image was smaller than the other ones so it checks if the image path name passed in was the cyber spurs one it makes the width and height bigger for it
  const width = project.imageSrc === "/images/projectIcons/cyber.png" ? 175 : 100;
  const height = project.imageSrc === "/images/projectIcons/cyber.png" ? 175 : 100;

  return (
    //style and className in this div got passed in and they are what animate the whole project card
    <div style = {style} className = {`${className} opacity-0 group flex flex-col items-center justify-center bg-navbarFill w-80 min-h-64 rounded-2xl border-3 border-pink-300 relative overflow-hidden`}> {/*This div centers the icon and title in the middle of the box */}
      
      {/*Made below div absolute in document flow relative to our div above which is the card itself so that when we hover the image and name dont affect positioning of other hover info */}
      <div className = "absolute flex flex-col items-center justify-center transition-opacity duration-300 group-hover:opacity-0 group-hover:pointer-events-none"> {/*This div centers the icon and text so that they are lined up it also has some hover properties for example when we hover we set opactiy to 0 so it can fade out */}
        <Image className = "select-none" src = {project.imageSrc} alt = {project.imageAlt} width = {width} height = {height}/>
        <p className = "p-5 text-lg">{project.name}</p>
      </div>
      
      <div className = "flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"> {/*This div is the the conent that is going to appear when hovered over the card. Hence the hover opecity-100. */}
        
        <div className="absolute inset-0 bg-zinc-950 opacity-30 pointer-events-none"></div> {/*Had to make a spearate div for the background color because the opacity of this bg was affecting the below text */}
        
        <div className = "flex flex-col items-center justify-center z-10"> {/*Had to set z of everything in here to 10 so that it went over the bg above and wasnt in the same layer allows for text to show as white */}

          <p className = "text-white text-sm p-4">{project.description}</p>
          {/*The below div is used to display the little tags underneaht my project descriptiont that show what tech I used for the respective project going to make this div a flex and tell it to wrap so as items get added they wrap to the next row and stay centered */}
          <div className = "flex flex-grow flex-wrap gap-3 justify-center items-center">
            {project.techUsed.map((tech, i) => {
                return(
                  <span key = {i} className = "flex justify-center items-center bg-pink-300 rounded-lg px-2 py-1 text-sm text-black font-extrabold" >
                    {tech}
                  </span>
                );
              })}
          </div>

          <Link target = "_blank" className = "underline text-subtlePink hover:text-pink-400 p-4" href = {project.linkRef}> Visit </Link>
        </div>
  
      </div>
    </div>
  );
} 