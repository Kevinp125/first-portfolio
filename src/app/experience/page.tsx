import Header from "../(components)/Header";

export default function app() {
  return (
    <div className= "min-h-screen flex flex-col items-center ml-44">

      <div className= "flex flex-col items-start mt-44">

        <Header header = "Experience" icon = "Experience"/>

        <div className = "mt-5">
          <h2 className = "text-lg max-w-2xl wrap">My journey in tech has been shaped by amazing opportunities and experiences. Here’s a quick glimpse at the path I’ve taken so far.</h2>
        </div>

        <div className = "flex ">
          
          <div className="w-28 min-h-screen bg-contain scroll -ml-12 mt-6" style ={{backgroundImage: "url('/images/bamboo.png')"}}></div>
          
        </div>
        
      </div>

    </div>
  );
}