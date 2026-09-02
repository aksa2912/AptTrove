import { ShieldCheck, Lock, CheckCircle2, GraduationCap } from "lucide-react";

export function TrustSection() {
  const trustPoints = [
    {
      title: "Privacy-First Contact Reveal",
      description:
        "Your email and contact info remain strictly hidden until you explicitly accept a connection request.",
      icon: Lock,
      accent: "text-[#3788FE]",
    },
    {
      title: "Academic & Campus Grounded",
      description:
        "Designed around real college workflows, coursework projects, hackathons, and research teams.",
      icon: GraduationCap,
      accent: "text-[#5446a8] dark:text-[#BEB3FF]",
    },
    {
      title: "Transparent Match Engine",
      description:
        "No black box algorithms. You see exact percentages and granular explanations for every match recommendation.",
      icon: CheckCircle2,
      accent: "text-emerald-500",
    },
    {
      title: "Zero Social Clutter",
      description:
        "No feeds, no vanity follower counts, no infinite scrolling. Pure high-signal talent discovery.",
      icon: ShieldCheck,
      accent: "text-[#a03d58] dark:text-[#FFD7E0]",
    },
  ];

  return (
    <section id="why" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold text-emerald-600 dark:text-emerald-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Why AptTrove</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[rgb(15_12_30)] dark:text-white">
            Built on trust, transparency, and practical utility.
          </h2>
          <p className="text-sm sm:text-base text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)]">
            AptTrove is engineered to respect your privacy and connect you with high-intent collaborators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((point) => {
            const Icon = point.icon;
            return (
              <div
                key={point.title}
                className="p-6 rounded-3xl bg-white/70 dark:bg-[#16122a]/70 border border-[#BEB3FF]/30 backdrop-blur-md shadow-sm space-y-3 hover:border-[#3788FE]/50 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-2xl bg-black/5 dark:bg-white/5 flex items-center justify-center">
                  <Icon className={`w-5 h-5 ${point.accent}`} />
                </div>
                <h3 className="text-base font-bold text-[rgb(15_12_30)] dark:text-white">
                  {point.title}
                </h3>
                <p className="text-xs text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default TrustSection;
