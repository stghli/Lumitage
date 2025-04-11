
import { HeroBackground } from './HeroBackground';
import { HeroHeading } from './HeroHeading';
import { HeroFeatureCards } from './HeroFeatureCards';
import { HeroCallToAction } from './HeroCallToAction';
import { HeroScrollIndicator } from './HeroScrollIndicator';

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-secondary via-black to-secondary/80 overflow-hidden">
      <HeroBackground />
      
      <div className="container mx-auto px-4 py-24 md:py-32 lg:py-40 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Center content */}
          <HeroHeading />
          
          {/* Feature cards */}
          <HeroFeatureCards />
          
          {/* CTA buttons */}
          <HeroCallToAction />
          
          <HeroScrollIndicator />
        </div>
      </div>
    </section>
  );
};
