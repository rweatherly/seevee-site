import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import FitAssessment from '@/components/FitAssessment';
import AIChat from '@/components/AIChat';
import Footer from '@/components/Footer';

export default function Index() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header onOpenChat={() => setChatOpen(true)} />

      <main>
        <Hero onOpenChat={() => setChatOpen(true)} />
        <Experience />
        <Skills />
        <FitAssessment />
      </main>

      <Footer />

      <AIChat open={chatOpen} onOpenChange={setChatOpen} />
    </div>
  );
}
