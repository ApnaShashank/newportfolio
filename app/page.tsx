import TopAppBar from '@/components/TopAppBar';
import HeroSection from '@/components/HeroSection';
import NarrativeSection from '@/components/NarrativeSection';
import SelectedWorks from '@/components/SelectedWorks';
import ExperimentsSection from '@/components/ExperimentsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <TopAppBar />
      <main>
        <HeroSection />
        <NarrativeSection />
        <SelectedWorks />
        <ExperimentsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
