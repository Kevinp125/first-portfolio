import Image from "next/image";

export default function Home() {
  return (
    <div>
      <p className = "text-pink-300"> Inside of home page</p>
      <Image 
        src = "/images/mtFuji.png" alt = "Mount Fuji" width = {500} height = {500} 
      />
    </div>
  );
}
