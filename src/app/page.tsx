import Image from "next/image";

const introductionText: string = "Hi, I'm Kevin Pereda — software engineer and undergraduate student at UCF."; //declaring a string variable that will hold the introduction text that will be displayed on the home page

export default function Home() {
  return (
    <div className = "relative  min-h-screen flex flex-col items-center overflow-hidden">
      
      <p className = "text-white transform translate-x-24 mt-44 text-6xl max-w-3xl">{introductionText}</p>

      <Image className = "absolute -bottom-20 transform translate-x-16 " src = "/images/mtFuji.png" alt = "Mount Fuji" width = {750} height = {750}/>

    </div>
  );
}
