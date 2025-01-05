import Image from "next/image";

//we need to define an interface in TS an interface is a way to define the shape or structure of an object. It is just type safety. It ensures the expereicne object we are getting as a prop matches the structure we define. Its a contract essentially
interface Experience {
  key: number;
  title: string;
  company: string;
  fromDate: string;
  description: {
    paragraph: string;
    bullets: string[];
  };
  iconImage: string;
}

export default function ExperienceCard({ experience }: { experience: Experience }) {

  return(
    <div className = "flex flex-row items-start"> {/*flex row so that the sword image and the text are side by side only reason for this div*/}

      <Image className = "select-none absolute rotate-45 -translate-x-6" src = "/images/sword.png" alt = "sword" width = {30} height = {50}/>

      <div className = "wrap max-w-2xl flex flex-col bg-navbarFill rounded-xl w-full px-5 py-3 gap-2">{/*This next flex keeps everything wrapped inside it "text" stacked on each other */}

        <div className = "flex flex-row gap-2"> {/*Made another flex row so that the icon and company / company positon show up next to each other*/}

          <Image className = "select-none rounded-xl" src = {experience.iconImage} alt = "company logo" width = {60} height = {50}/>

          <div className= "flex flex-col gap-1"> {/*Due to wanting to only stack the company and title i held at company /start date vertically alongside company logo had to delcare another flex-col */}
            <p className = "text-2xl text-subtlePink font-extrabold"> {experience.company} </p>
            <p className = "text-subtlePink font-extrabold"> {experience.title} | {experience.fromDate} </p>
  
          </div>

        </div>
          
          {/*Finally we display the descirption for the job and map through the bullet points and have them returned as a list */}

          {/* {experience.description.paragraph}   have this commented out it is like a job desciription not the bullet points umcomment it once you figure out what you want to put here*/}

          {experience.description.bullets.map((bullet, i) => (
            <li key = {i} className = "text-sm py-1">{bullet}</li>
          ))}
      

      </div>

    </div>



  )


}
