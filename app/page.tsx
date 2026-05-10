import { AudienceSection } from "./components/AudienceSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { LearnSection } from "./components/LearnSection";
import { MentorSection } from "./components/MentorSection";
import { RegistrationForm } from "./components/RegistrationForm";
import { WhyAttendSection } from "./components/WhyAttendSection";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7f9ff] text-slate-950">
      <Header />
      <HeroSection />
      <LearnSection />
      <AudienceSection />
      <WhyAttendSection />
      <MentorSection />
      <RegistrationForm />
      <Footer />
    </main>
  );
}
