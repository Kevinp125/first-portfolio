import Header from "../(components)/Header";
import IconCard from "../(components)/IconCard";

export default function app() {

  //below are array of objects that store the filepath of the image and the alt for it 
  //if you wish to add another icon add another object to the array and make sure you
  //put the image in the corresponding folder in the public directory
  const languageIcons = [
    {src: "/images/techIcons/languages/c.svg", alt: "C"},
    {src: "/images/techIcons/languages/cpp.svg", alt: "C++"},
    {src: "/images/techIcons/languages/csharp.svg", alt: "C#"},
    {src: "/images/techIcons/languages/java.svg", alt: "Java"},
    {src: "/images/techIcons/languages/css.svg", alt: "css"},
    {src: "/images/techIcons/languages/html.svg", alt: "html"},
    {src: "/images/techIcons/languages/js.svg", alt: "javascript"},
    {src: "/images/techIcons/languages/ts.svg", alt: "typeScript"},
  ];

  const webIcons = [ 
    {src: "/images/techIcons/web/react.svg", alt: "React"},
    {src: "/images/techIcons/web/nextjs.svg", alt: "Next.js"},
    {src: "/images/techIcons/web/nodejs.svg", alt: "Node.js"},
    {src: "/images/techIcons/web/tailwind.svg", alt: "Tailwind"},
  ];

  const toolIcons = [
    {src: "/images/techIcons/tools/chat.svg", alt: "ChatGPT"},
    // {src: "/images/techIcons/tools/discord.svg", alt: "Discord"},
    {src: "/images/techIcons/tools/figma.svg", alt: "figma"},
    {src: "/images/techIcons/tools/git.svg", alt: "git"},
    {src: "/images/techIcons/tools/github.svg", alt: "github"},
    {src: "/images/techIcons/tools/jira.svg", alt: "jira"},
    {src: "/images/techIcons/tools/teams.svg", alt: "Teams"},
    {src: "/images/techIcons/tools/unity.svg", alt: "Unity"},
    {src: "/images/techIcons/tools/vscode.svg", alt: "vscode"},
  ];


  return (
    <div className="flex flex-col items-center mb-16 lg:mb-0"> {/*This div is just to make sure all other siblings in this page stack on each other vertically */}

      <div className = "flex flex-cols items-start pt-56 pl-10 md:pt-96 lg:pl-44 lg:pt-48"> {/*This div is to align the <p> tag with our header */}
        <Header header = "Skills" icon = "Skills"/>
        <p className = "animate-fade animate-once animate-duration-[2000ms] animate-normal animate-fill-forwards text-lg max-w-2xl wrap ">Throughout my journey of studying computer science and working on various projects, I&apos;ve had the opportunity to work with and experiment with a diverse range of technologies, tools, and frameworks. Here&apos;s a glimpse of what I&apos;ve explored along the way. </p>
      </div>
      
      <div className = "grid grid-cols-1 gap-16 pt-12 lg:pl-40"> {/*Here we define a grid of only one column so that all of our sections "sibling divs" can stack on each other */}

        {/*languages section we wrap the header and nested grid in a div so that tailwind knows both of those take up one row */}
        <div>

          <h1 className = "animate-fade-down animate-once animate-duration-[1500ms] animate-ease-in animate-normal animate-fill-forwards flex flex-col items-center text-4xl pb-5">Languages</h1>
          {/*This is a nested grid of 4 cols didnt declared the rows because they will be auto created as cols fill up but this grid is for icons which will be rendered through the IconCard component. We map through languageIcons array of objects to get each object */}
          <div className = "grid grid-cols-2 md:grid-cols-4 gap-4">
            {/*For below IconCard compoment and other ones below we have style and className passed as props so we can animate them within the component itself */}
            {languageIcons.map(({src, alt}, i) => (
              <IconCard style = {{animationDelay: `${i*0.2}s`}} className = "animate-fade animate-once animate-duration-[2500ms] animate-ease-out animate-normal animate-fill-forwards" key = {i} src = {src} alt = {alt}/>
            ))}
          </div>

        </div>
      
        {/*Web section also has header and nested grid like explained above*/}

        <div>

          <h2 className = "animate-fade-down animate-once animate-duration-[1500ms] animate-ease-in animate-normal animate-fill-forwards flex flex-col items-center text-4xl pb-5"> Web</h2>

          <div className = "grid grid-cols-2 md:grid-cols-4 gap-4">
            {/*We map through webIcons array of objects to get each object and pass in the values to the IconCard component */}
            {webIcons.map(({src, alt}, i) => (
              <IconCard style = {{animationDelay: `${i*0.2}s`}} className = "animate-fade animate-once animate-duration-[2500ms] animate-ease-out animate-normal animate-fill-forwards" key = {i} src = {src} alt = {alt}/>
            ))}
          </div>


        </div>


        {/*Tools section also has header and nested grid like explained above*/}

        <div>

          <h3 className = "animate-fade-down animate-once animate-duration-[1500ms] animate-ease-in animate-normal animate-fill-forwards flex flex-col items-center text-4xl pb-6"> Tools </h3>

          <div className = "grid grid-cols-2 md:grid-cols-4 gap-4 pb-5">
            {/*We map through webIcons array of objects to get each object and pass in the values to the IconCard component*/}
            {toolIcons.map(({src, alt}, i) => (
              <IconCard style = {{animationDelay: `${i*0.2}s`}} className = "animate-fade animate-once animate-duration-[2500ms] animate-ease-out animate-normal animate-fill-forwards" key = {i} src = {src} alt = {alt}/>
            ))}
          </div>

        </div>



      </div> 
    </div>

  );
}