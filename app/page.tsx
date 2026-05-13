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
    <main className="space-page min-h-screen overflow-x-hidden text-white">
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
