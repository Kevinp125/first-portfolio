import Header from "../(components)/Header";

export default function app() {
  return (
    <div className="flex flex-col items-center ">
      <div className = "flex flex-cols items-start pl-44 pt-48">
        <Header header = "Skills" icon = "Skills"/>
        <p className = "text-lg max-w-2xl wrap">Throughout my journey of studying computer science and working on various projects, I&apos;ve had the opportunity to work with and experiment with a diverse range of technologies, tools, and frameworks. Here&apos;s a glimpse of what I&apos;ve explored along the way. </p>
      </div>
      
      <div className = "grid grid-cols-2 grid-rows-2 w-96 h-96 bg-blue-400">
        {/*languages section */}
        <h1>Languages</h1>
        <div className = "col-start-1 row-start-1 grid grid-cols-5 w-48 h-48 bg-pink-400">


        </div>

        {/*Web section */}
        <h2> Web</h2>
        <div className = "col-start-2 row-start-1 grid grid-cols-5 w-48 h-48 bg-green-400">


        </div>

        {/*Tools section */}
        <h3 className = "col-span-2"> Tools </h3>
        <div className = "col-start-1 col-span-2 grid grid-cols-5 w-48 h-48 bg-red-700">


        </div>



      </div> 
    </div>

  );
}