import Image from "next/image";
import Header from "./(components)/Header";
import ScrollLock from "./(components)/ScrollLock";

const introductionText: string = "Hi, I'm Kevin Pereda — software engineer and undergraduate student at UCF."; //declaring a string variable that will hold the introduction text that will be displayed on the home page

export default function Home() {
  return (
    <>
      <ScrollLock/>
      <div className = "relative flex flex-col items-center justify-center h-screen overflow-hidden lg:justify-normal lg:pl-64"> {/*defining a flex box flex col so our text, header, and image all stack on each other vertically and also moving the container for all these things to the right rigth by 36 */}

        
        <div className = "flex flex-col items-start justify-center lg:pt-48"> {/*wrapping the header and text in their own flex box so I can use items start to center them left across their cross axis which in this case is the horizontal one */}
          <Header header = "Home" icon = "Home" />
          <p className = "text-white transform -mt-20 text-2xl max-w-60 sm:text-4xl sm:max-w-lg md:text-5xl md:max-w-xl lg:mt-0 lg:text-6xl lg:max-w-3xl animate-flip-down animate-duration-[2000ms] animate-ease-out animate-normal animate-fill-forwards z-10">{introductionText}</p>
        </div>
        
        <Image className = "select-none absolute bottom-11 sm:-bottom-20 " src = "/images/mtFuji.png" alt = "Mount Fuji" width = {800} height = {800}/>

      </div>
    </>
  );
}
