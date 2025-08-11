import Header from "../(components)/Header";
import ExperienceCard from "../(components)/ExperienceCard";

export const metadata = {
  title: 'Experience — Kevin Pereda',
  description:
    'Discover Kevin Pereda’s journey in tech: from a Meta Software Engineering internship to building data‐accuracy tools at Mitsubishi Power Americas, hands‐on mechanical engineering, and social media marketing.',
  alternates: {
    canonical: 'https://kpereda.dev/experience',
  },
  openGraph: {
    title: 'Experience — Kevin Pereda',
    description:
      'Discover Kevin Pereda’s journey in tech: from a Meta Software Engineering internship to building data‐accuracy tools at Mitsubishi Power Americas, hands‐on mechanical engineering, and social media marketing.',
    url: 'https://kpereda.dev/experience',
    siteName: 'Kevin Pereda Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Experience — Kevin Pereda',
    description:
      'Discover Kevin Pereda’s journey in tech: from a Meta Software Engineering internship to building data‐accuracy tools at Mitsubishi Power Americas, hands‐on mechanical engineering, and social media marketing.',
  },
  keywords: [
    'Kevin Pereda',
    'software engineer experience',
    'Meta internship',
    'Mitsubishi Power',
    'mechanical engineering assistant',
    'social media marketing',
    'UCF student',
    'tech journey',
    'internship projects'
  ]
}


export default function app() {
  
  //this array of objects stores all my expericence data( internships jobs etc if you ever wish to add / update any experiece just come to this array and edit here code below will use .map so it updates regardless)
  const experience = [

    //Knighthacks

    {
      title: "Projects / Mentor Director",
      company: "Knighthacks",
      fromDate: "Feburary 2025 - Present",
    
      //description nested object because it has a paragraph and an array of bullet points that describe what i did at the job
      description: {
        paragraph: "***This is where description of work at this compnay goes need to fill this in after website is done",
            
        bullets: [
          "Guided over 100 mentors/mentees in professional development, hackathon success, and software development.",        
          "Improved the proportion of mentees with professional resumes by 48%, ensuring preparation for job applications.",
          "Organized LinkedIn optimization and headshot sessions, supporting 60+ mentees in building professional presence.",
          "Increased program participation by 53%, improving engagement and organization outreach.",
        ]
      },
          
      iconImage: "/images/companyLogos/Knighthackslogo.png",
    },

    //META

    {
      title: "Software Engineering Intern",
      company: "Meta",
      fromDate: "June 2025 - August 2025",

      //description nested object because it has a paragraph and an array of bullet points that describe what i did at the job
      description: {
        paragraph: "***This is where description of work at this compnay goes need to fill this in after website is done",
        
        bullets: [
          "Completed 3-week intensive web development training program alongside Meta engineers, mastering React, full-stack development, HTML, CSS, and JavaScript through 50+ hours of instruction.",        
          "Partnered with experienced Meta engineers on capstone project, conducting regular 1-on-1 sessions discussing code architecture and implementation strategies.",
          "Applied Git workflows and technical documentation, learning to scope challenges and structure 5-week timeline from project inception to deployment.",
          "Engaged in daily code reviews across 73 pull requests, resolving 30+ feedback points while receiving mentorship on industry-standard development workflows.",
          "Presented capstone project to 10+ Meta engineers, demonstrating technical implementation and problem-solving approach for real-world web development challenges.",
          "Launched a production experiment in Facebook Ads Manager to roll out a new ad preview to targeted user groups."
        ]
      },
      
      iconImage: "/images/companyLogos/meta.jpg",
    },

     //MITSUBISHI POWER OF AMERICAS
  
    {
      title: "Software Development Associate",
      company: "Mitsubishi Power Americas",
      fromDate: "May 2024 - August 2024",

      //description nested object because it has a paragraph and an array of bullet points that describe what i did at the job
      description: {
        paragraph: "***This is where description of work at this compnay goes need to fill this in after website is done",
        
        bullets: [
          "Utilized PI Asset Framework (PI AF) software to backfill specific attributes in the PI AF database, improving data accuracy by 25% and ensuring reliable data for ongoing operations.",
          "Navigated a codebase consisting of Angular and Django to build accurate data maps, enabling 3 developers to quickly locate the source of data when issues arise.",
          "Created user manuals for applications on the development team’s website, which were used by 2,800 employees to navigate the site with ease, enhancing their ability to use the applications effectively.",
          "Referred to the codebase to understand and document how these applications were produced.",
          "Engaged an executive board with a presentation of my internship projects, showcasing their benefits to the company and discussing the major insights I gained from the experience.",
          "Participated in a variety of professional development workshops, including sessions on personality assessment and self-discovery, which provided valuable insights into my working style and strengths as an employee.",
        ]
      },
      
      iconImage: "/images/companyLogos/mitsubishi.jpg",
    },

    //ALL MECHANIC CORP

    {
      title: "Mechanical Engineer Assistant",
      company: "All Mechanic Corp",
      fromDate: "July 2022 - August 2022",

      //description nested object because it has a paragraph and an array of bullet points that describe what i did at the job
      description: {
        paragraph: "***This is where description of work at this compnay goes need to fill this in after website is done",
        
        bullets: [
          "Accelerated diagnosis and repair of several automobiles, performed oil changes, tire rotations, and battery replacements, increasing daily output of serviced cars by 15%.",
          "Furthered growth of the company by gathering data and promoting them online.",
        ]
      },
      
      iconImage: "/images/companyLogos/allmechanic.webp",

    },
    
    //BLACK HISTORY TOURS

    {
      title: "Social Media Marketing Assistant",
      company: "Black History Tours",
      fromDate: "June 2020 - August 2020",

      //description nested object because it has a paragraph and an array of bullet points that describe what i did at the job
      description: {
        paragraph: "***This is where description of work at this compnay goes need to fill this in after website is done",
        
        bullets: [
          "Assisted in data sourcing and constructed a competitor analysis spreadsheet, analyzing data from 20 competitors to provide strategic insights for business growth.",
          " Worked with 3 internet platforms to help the company transition to virtual services, ensuring a smooth shift during the COVID-19 pandemic.",
        ]
      },
      
      iconImage: "/images/companyLogos/blackhistorytours.png",

    },
  ];

  //below is actual code that is going to get rendered on the page
  
  /*in order to generate our experience cards I mapped over the experience array of objects
    so that on each iteration we pass to our Experience Card component the exp object at that
    index. The Experience card component will render all the infomraiton using what is in the exp
    object field. Just keeps our code in this page more clean. */
  return (
    <div className= "min-h-screen flex flex-col items-center lg:pl-44">{/*div so that items contained are shifted left by 44 and are centered horizontally*/}


      <div className= "flex flex-col items-start pt-56 md:pt-96 lg:pt-48"> {/*Another div this time so all elements inside stay in middle of page but also align with each other left. Kind of like a left-align */}

        {/*Header for the page experience as well as a little paragrpah describing my journey */}
        <div className = "pl-12 md:pl-0">
          <Header header = "Experience" icon = "Experience"/>
          <h2 className = "animate-fade animate-once animate-duration-[2000ms] animate-normal animate-fill-forwards text-lg max-w-2xl wrap md:pl-0">My journey in tech has been shaped by amazing opportunities and experiences. Here&apos;s a quick glimpse at the path I&apos;ve taken so far.</h2>
        </div>

        <div className = "relative w-full flex flex-row"> {/*This div is so that the bamboo and the sword and card all line up side by side */}
          
          <div className="hidden md:block md:-left-14 absolute top-6 lg:-left-12 w-1/6 bg-contain h-full z-10" style ={{backgroundImage: "url('/images/bamboo.png')"}}></div>
          
          <div className="ml-14 mb-16 md:translate-x-4 md:ml-0 lg:translate-x-8 lg:ml-0 lg:mb-0 w-full py-8 flex flex-col gap-10 z-20">

            {/*below we map over the experience array of objects everytime it iterates it grabs the object and passes it trhough the argument "exp" to the callback function that defines what we are going to retrun and display which is the experience card component */}
            {/*This experience card component also has some extra props like style and className these are being used so that in the component we can animate the experience cards without messing up the flex box. 
               The style is used when defining vanilla css hence the weird looking syntax. className gets used in the parent div in the experience card component and it contains all animations */}
            {experience.map((exp, i) => (
              <ExperienceCard style = {{animationDelay: `${i*0.2}s`}} className = "animate-fade-up animate-once animate-duration-[1500ms] animate-normal animate-fill-forwards" key = {i} experience = {exp}/>

            ))}
          </div>


        </div>
        
      </div>

    </div>
  );
}