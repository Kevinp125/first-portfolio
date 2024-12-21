import Header from "../(components)/Header";

export default function app() {
  
  //this array of objects stores all my expericence data( internships jobs etc if you ever wish to add / update any experiece just come to this array and edit here code below will use .map so it updates regardless)
  const experience = [
    {

      //META

      title: "Meta University Software Engineering Intern",
      company: "Meta",
      fromDate: "Incoming Summer 2025",

      //description nested object because it has a paragraph and an array of bullet points that describe what i did at the job
      description: {
        paragraph: "need to fill this in talk about ur time there yada yada",
        
        bullets: [
          //havent interned so nothing yet
        ]
      },
      
      iconImage: "/images/companyLogos/meta.webp",
    },


    {

      //MITSUBISHI POWER OF AMERICAS

      title: "Software Development Associate",
      company: "Mitsubishi Power Americas",
      fromDate: "May 2024 - August 2024",

      //description nested object because it has a paragraph and an array of bullet points that describe what i did at the job
      description: {
        paragraph: "need to fill this in talk about ur time there yada yada",
        
        bullets: [
          "Utilized PI Asset Framework (PI AF) software to backfill specific attributes in the PI AF database, improving data accuracy by 25% and ensuring reliable data for ongoing operations.",
          "Navigated a codebase consisting of Angular and Django to build accurate data maps, enabling 3 developers to quickly locate the source of data when issues arise.",
          "Created user manuals for applications on the development team’s website, which were used by 2,800 employees to navigate the site with ease, enhancing their ability to use the applications effectively.",
          "Referred to the codebase to understand and document how these applications were produced.",
          "Engaged an executive board with a presentation of my internship projects, showcasing their benefits to the company and discussing the major insights I gained from the experience.",
          "Participated in a variety of professional development workshops, including sessions on personality assessment and self-discovery, which provided valuable insights into my working style and strengths as an employee.",
        ]
      },
      
      iconImage: "/images/companyLogos/mitsubishiPower.png",
    },

    //ALL MECHANIC CORP

    {
      title: "Mechanical Engineer Assistant",
      company: "All Mechanic Corp",
      fromDate: "July 2022 - August 2022",

      //description nested object because it has a paragraph and an array of bullet points that describe what i did at the job
      description: {
        paragraph: "need to fill this in talk about ur time there yada yada",
        
        bullets: [
          "• Accelerated diagnosis and repair of several automobiles, performed oil changes, tire rotations, and battery replacements, increasing daily output of serviced cars by 15%.",
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
        paragraph: "need to fill this in talk about ur time there yada yada",
        
        bullets: [
          "Assisted in data sourcing and constructed a competitor analysis spreadsheet, analyzing data from 20 competitors to provide strategic insights for business growth.",
          " Worked with 3 internet platforms to help the company transition to virtual services, ensuring a smooth shift during the COVID-19 pandemic.",
        ]
      },
      
      iconImage: "/images/companyLogos/blackhistorytours.png",

    },
  ];

  //below is actual code that is going to get rendered on the page
  
  return (
    <div className= "min-h-screen flex flex-col items-center pl-44">


      <div className= "flex flex-col items-start pt-48">

        <Header header = "Experience" icon = "Experience"/>
        <h2 className = "text-lg max-w-2xl wrap">My journey in tech has been shaped by amazing opportunities and experiences. Here&apos;s a quick glimpse at the path I&apos;ve taken so far.</h2>

        <div className = "flex ">
          
          <div className="w-28 min-h-screen bg-contain scroll -ml-12 mt-6" style ={{backgroundImage: "url('/images/bamboo.png')"}}></div>

        </div>
        
      </div>

    </div>
  );
}