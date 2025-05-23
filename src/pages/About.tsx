
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AboutHero } from '@/components/about/AboutHero';
import { AboutMission } from '@/components/about/AboutMission';
import { AboutHistory } from '@/components/about/AboutHistory';
import { AboutArtisans } from '@/components/about/AboutArtisans';
import { AboutValues } from '@/components/about/AboutValues';
import { AboutCTA } from '@/components/about/AboutCTA';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <AboutHero />
        <AboutMission />
        <AboutHistory />
        <AboutArtisans />
        <AboutValues />
        <AboutCTA />
      </main>
      <Footer />
    </div>
  );
};

export default About;
