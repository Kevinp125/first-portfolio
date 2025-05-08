import Image from "next/image";
import Header from "./(components)/Header";
import ScrollLock from "./(components)/ScrollLock";

export const metadata = {
  title: 'Kevin Pereda — Software Engineer & UCF Student',
  description:
    'Hi, I’m Kevin — a software engineer and undergraduate at UCF who loves full-stack projects, and turning ideas into code.',
  alternates: {
    canonical: 'https://kpereda.dev/',
  },
  openGraph: {
    title: 'Kevin Pereda — Portfolio',
    description:
      'Explore Kevin’s projects, experience, and skills as a software engineer and UCF student.',
    url: 'https://kpereda.dev/',
    siteName: 'Kevin Pereda Portfolio',
    images: [
      {
        url: 'https://kpereda.dev/og/cherryBlossom.webp',
        width: 1200,
        height: 630,
        alt: 'Stylized photo of Kevin with code and cherry-blossom motif',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kevin Pereda — Portfolio',
    description:
      'Software engineer & UCF student building cool stuff. Check out my projects!',
  },
};



const introductionText: string = "Hi, I'm Kevin Pereda — software engineer and undergraduate student at UCF."; //declaring a string variable that will hold the introduction text that will be displayed on the home page

export default function Home() {
  return (
    <>
      <ScrollLock/>
      <div className = "relative flex flex-col items-start justify-center h-screen overflow-hidden lg:items-center lg:justify-normal lg:pl-68"> {/*defining a flex box flex col so our text, header, and image all stack on each other vertically and also moving the container for all these things to the right rigth by 36 */}

        
        <div className = "flex flex-col items-start justify-center pl-12 md:pl-19 lg:pl-0 lg:pt-48"> {/*wrapping the header and text in their own flex box so I can use items start to center them left across their cross axis which in this case is the horizontal one */}
          <Header header = "Home" icon = "Home" />
          <p className = "text-white transform -mt-24 text-2xl max-w-60 sm:text-4xl sm:max-w-lg md:text-5xl md:max-w-xl lg:mt-0 lg:text-6xl lg:max-w-3xl animate-flip-down animate-duration-[2000ms] animate-ease-out animate-normal animate-fill-forwards z-10">{introductionText}</p>
        </div>
        
        <Image className = "select-none absolute bottom-12 md:bottom-7 lg:-bottom-20 pointer-events-none " src = "/images/mtFuji.png" alt = "Mount Fuji" width = {800} height = {800}/>

      </div>
    </>
  );
}
