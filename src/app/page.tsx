import { AmbientColor } from '@/components/decorations/ambient-color';
import { AboutMe } from '@/components/about-me';
import { Hero } from '@/components/hero';
import { Experience } from '@/components/experience';
import { ThreeDSection } from '@/components/three-d-section';

export default function Home() {
  return (
    <div className="relative overflow-hidden w-full">
      <AmbientColor />
      <Hero />
      <ThreeDSection />
      <AboutMe
        heading={'About Me'}
        sub_heading={
          'A Senior Software Engineer with 10+ years of experience spanning Web3, DeFi, fintech, and enterprise systems. I specialize in frontend architecture and full-stack development, leading projects from startup prototypes to protocols with over $1.4B TVL. I’m passionate about building scalable products, and driving impact at both the technical and team level.'
        }
        globe_card={{
          title: 'Global Availability',
          description:
            'Eligible to work in both Canada and Hong Kong, currently based in North America (EST/EDT). I primarily collaborate with Canadian and US companies, but remain open to global opportunities.',
          span: 'three',
        }}
        ray_card={{
          title: 'Analytics & Insights',
          description:
            'Implemented end-to-end frontend observability, including user interaction tracking, production monitoring, and real-time bug reporting, ensuring smoother user experiences and faster issue resolution.',
          span: 'one',
        }}
        graph_card={{ title: 'Hi', description: 'Hello World', span: 'one' }}
        social_media_card={{
          title: 'Frontend Leadership & Collaboration',
          description:
            'With experience spanning startups to large enterprises, I excel at balancing hands-on execution with autonomous leadership. A strong team player, mentor, and connector, driving both people and products forward.',
          span: 'two',
        }}
      />
      <Experience
        heading={'Experience'}
        sub_heading={'My journey over the past decade'}
        steps={undefined}
      />
    </div>
  );
}
