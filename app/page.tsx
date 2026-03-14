import { Metadata } from 'next';
import { Hero } from '@/sections/home/Hero';
import { IntroStory } from '@/sections/home/IntroStory';
import { TechniquesPreview } from '@/sections/home/TechniquesPreview';
import { ResultsPreview } from '@/sections/home/ResultsPreview';
import { CoursesPreview } from '@/sections/home/CoursesPreview';
import { Differentials } from '@/sections/home/Differentials';
import { FinalCTA } from '@/sections/home/FinalCTA';
import { metadata as siteMetadata } from '@/lib/site';

export const metadata: Metadata = {
  title: siteMetadata.home.title,
  description: siteMetadata.home.description,
};

export default function Home() {
  return (
    <main>
      <Hero />
      <IntroStory />
      <TechniquesPreview />
      <ResultsPreview />
      <CoursesPreview />
      <Differentials />
      <FinalCTA />
    </main>
  );
}
