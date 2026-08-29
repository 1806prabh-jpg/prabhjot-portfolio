import { useScrollReveal } from '@/hooks/useScrollReveal';
import { InquiryProvider } from '@/components/InquiryContext';
import { InquiryModals } from '@/components/InquiryModals';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { EducationSection } from '@/components/sections/Education';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Certifications, Achievements } from '@/components/sections/Certifications';
import { Strengths, Goals, CareerGoal, ValueProposition } from '@/components/sections/Strengths';
import { Contact, Footer } from '@/components/sections/Contact';
import { ThankYou } from '@/components/sections/ThankYou';

export default function App() {
  useScrollReveal();

  return (
    <InquiryProvider>
      <div className="min-h-screen bg-ink-950 text-brand-text">
        <Navbar />
        <main>
          <Hero />
          <About />
          <EducationSection />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Achievements />
          <Strengths />
          <Goals />
          <CareerGoal />
          <ValueProposition />
          <Contact />
          <ThankYou />
        </main>
        <Footer />
        <InquiryModals />
      </div>
    </InquiryProvider>
  );
}
