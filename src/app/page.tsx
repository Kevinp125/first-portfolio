import Image from "next/image";
import Header from "./(components)/Header";

const introductionText: string = "Hi, I'm Kevin Pereda — software engineer and undergraduate student at UCF."; //declaring a string variable that will hold the introduction text that will be displayed on the home page

export default function Home() {
  return (
    <div className = "relative  min-h-screen flex flex-col items-center overflow-hidden pl-64"> {/*defining a flex box flex col so our text, header, and image all stack on each other vertically and also moving the container for all these things to the right rigth by 36 */}
      
      <div className = "flex flex-col items-start min-h-screen justify-center"> {/*wrapping the header and text in their own flex box so I can use items start to center them left across their cross axis which in this case is the horizontal one */}
        <Header header = "Home" icon = "Home" />
        <p className = "text-white transform text-6xl max-w-3xl -translate-y-1/2">{introductionText}</p>
      </div>
      
      <Image className = "absolute -bottom-20 " src = "/images/mtFuji.png" alt = "Mount Fuji" width = {800} height = {800}/>

    </div>
  );
}
