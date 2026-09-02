import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/landing/hero-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { LocationSection } from "@/components/landing/location-section";
import { SkillSwapPreview } from "@/components/landing/skillswap-preview";
import { TeamBuilderPreview } from "@/components/landing/team-builder-preview";
import { TrustSection } from "@/components/landing/trust-section";
import { FinalCtaSection } from "@/components/landing/final-cta-section";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF5F3] dark:bg-[#0a0814] text-[rgb(15_12_30)] dark:text-white transition-colors duration-200">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-1">
        <HeroSection />
        <HowItWorksSection />
        <SkillSwapPreview />
        <TeamBuilderPreview />
        <FeaturesSection />
        <LocationSection />
        <TrustSection />
        <FinalCtaSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
