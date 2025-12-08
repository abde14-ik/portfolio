import { HeroSection } from "@/components/hero";
import { TheInkwell } from "@/components/code-challenge";
import { AboutSection } from "@/components/about";
import { CommunityLibrary } from "@/components/projects";
import { TheLexicon } from "@/components/skills";
import { ContactSection } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="space-y-12 sm:space-y-16">
      <HeroSection />
      <TheInkwell />
      <AboutSection />
      <CommunityLibrary />
      <TheLexicon />
      <ContactSection />
      <Footer />
    </div>
  );
}
