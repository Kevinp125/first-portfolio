import Image from "next/image";

export default function IconCard({src, alt}: {src:string, alt:string}) {
  return (
    <div className = "flex flex-row justify-center items-center bg-navbarFill border-3 border-pink-300 rounded-xl w-36 h-36 object-contain">
      <Image className = "select-none p-3" src = {src} alt = {alt} width = {100} height = {100}/>
    </div>
    
  );

}