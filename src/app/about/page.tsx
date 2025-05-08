import Header from "../(components)/Header";

export const metadata = {
  title: 'About — Kevin Pereda',
  description:
    'As a Computer Science student at UCF, Kevin combines a passion for full-stack development, teamwork, and a “strong body, strong mind” lifestyle to fuel creativity and productivity.',
  alternates: {
    canonical: 'https://kpereda.dev/about',
  },
  openGraph: {
    title: 'About — Kevin Pereda',
    description:
      'Meet Kevin Pereda: UCF CS student, software engineer, and advocate for a balanced, active lifestyle that drives innovation and teamwork.',
    url: 'https://kpereda.dev/about',
    siteName: 'Kevin Pereda Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'About — Kevin Pereda',
    description:
      'Meet Kevin Pereda: UCF CS student, software engineer, and advocate for a balanced, active lifestyle that drives innovation and teamwork.',
  },
  keywords: [
    'Kevin Pereda',
    'About Kevin Pereda',
    'UCF student',
    'Computer Science',
    'software engineer',
    'strong body strong mind',
    'teamwork',
    'technology passion',
    'active lifestyle',
    'full-stack development'
  ]
}

export default function app() {
  return (
    <div className = "flex flex-col items-center justify-center overflow-hidden p-12 lg:pl-56">
      
      <div className = "flex justify-start pt-48 md:pt-80 lg:pt-48">
        <Header header = "About" icon = "About"/>
        <p className = "wrap mb-7 text-xl md:text-2xl max-w-2xl animate-fade-up animate-duration-[2000ms] animate-ease-out animate-normal animate-fill-forwards">
          As a Computer Science student at the University of Central Florida, I bring a passion for technology and a collaborative spirit to every project. 
          I thrive in environments where clear communication and teamwork are essential. 
          Programming isn&apos;t just my profession; it&apos;s also my hobby. 
          I love diving into new technologies and coding challenges in my spare time.
          <br /><br />Beyond the screen, I embrace the philosophy of &quot;strong body, strong mind.&quot; 
          Staying active through exercise helps me maintain a balanced and healthy lifestyle, which in turn fuels my productivity and creativity. 
          I&apos;m always eager to connect with like-minded professionals and explore new opportunities in the tech world. 
        </p>

      </div>
    
    </div>
  );
}