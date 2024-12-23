import Header from "../(components)/Header";
import IconCard from "../(components)/IconCard";

export default function app() {

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
    {src: "/images/techIcons/tools/discord.svg", alt: "Discord"},
    {src: "/images/techIcons/tools/figma.svg", alt: "figma"},
    {src: "/images/techIcons/tools/git.svg", alt: "git"},
    {src: "/images/techIcons/tools/github.svg", alt: "github"},
    {src: "/images/techIcons/tools/jira.svg", alt: "jira"},
    {src: "/images/techIcons/tools/teams.svg", alt: "Teams"},
    {src: "/images/techIcons/tools/unity.svg", alt: "Unity"},
    {src: "/images/techIcons/tools/vscode.svg", alt: "vscode"},
  ];


  return (
    <div className="flex flex-col items-center">

      <div className = "flex flex-cols items-start pl-44 pt-48">
        <Header header = "Skills" icon = "Skills"/>
        <p className = "text-lg max-w-2xl wrap ">Throughout my journey of studying computer science and working on various projects, I&apos;ve had the opportunity to work with and experiment with a diverse range of technologies, tools, and frameworks. Here&apos;s a glimpse of what I&apos;ve explored along the way. </p>
      </div>
      
      <div className = "grid grid-cols-1 gap-16 pt-12 pl-40">

        {/*languages section */}
        <div>

          <h1 className = "flex flex-col items-center text-4xl pb-5">Languages</h1>

          <div className = "grid grid-cols-4 gap-4">
            {languageIcons.map(({src, alt}) => (
              <IconCard key = {src} src = {src} alt = {alt}/>
            ))}
          </div>

        </div>
      
        {/*Web section */}

        <div>

          <h2 className = "flex flex-col items-center text-4xl pb-5"> Web</h2>

          <div className = "grid grid-cols-4 gap-4">
            {webIcons.map(({src, alt}) => (
              <IconCard key = {src} src = {src} alt = {alt}/>
            ))}
          </div>


        </div>


        {/*Tools section */}

        <div>

          <h3 className = "flex flex-col items-center text-4xl pb-6"> Tools </h3>

          <div className = "grid grid-cols-4 gap-4 pb-5">
            {toolIcons.map(({src, alt}) => (
              <IconCard key = {src} src = {src} alt = {alt}/>
            ))}
          </div>

        </div>



      </div> 
    </div>

  );
}