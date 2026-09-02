import { BookOpen, Target, Sparkles, ArrowRight } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Tell us what you know.",
      subtitle: "SKILLS YOU CAN TEACH",
      description:
        "Declare the tools, languages, and frameworks you're confident in. These become your teaching currency on AptTrove.",
      icon: BookOpen,
      color: "from-[#3788FE]/15 to-[#3788FE]/5",
      border: "border-[#3788FE]/30",
      accent: "text-[#3788FE]",
      badge: "bg-[#3788FE]/10 text-[#3788FE]",
    },
    {
      number: "02",
      title: "Tell us what you need.",
      subtitle: "SKILLS YOU WANT OR PROJECT IDEA",
      description:
        "Specify what you want to master, or describe a hackathon/startup idea and the missing talent seats you need to fill.",
      icon: Target,
      color: "from-[#BEB3FF]/20 to-[#BEB3FF]/5",
      border: "border-[#BEB3FF]/40",
      accent: "text-[#5446a8] dark:text-[#BEB3FF]",
      badge: "bg-[#BEB3FF]/20 text-[#5446a8] dark:text-[#BEB3FF]",
    },
    {
      number: "03",
      title: "AptTrove finds the right people.",
      subtitle: "4-FACTOR SMART MATCHING",
      description:
        "Our engine computes skill complementarity, weekly schedule overlap, distance radius (10–50 km), and team fit balance.",
      icon: Sparkles,
      color: "from-[#FFD7E0]/30 to-[#FFD7E0]/5",
      border: "border-[#FFD7E0]",
      accent: "text-[#a03d58] dark:text-[#FFD7E0]",
      badge: "bg-[#FFD7E0]/40 text-[#a03d58] dark:text-[#FFD7E0]",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#BEB3FF]/20 border border-[#BEB3FF]/40 text-xs font-bold text-[#5446a8] dark:text-[#BEB3FF]">
            Simple 3-Step Process
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[rgb(15_12_30)] dark:text-white">
            Find the right connection in three steps.
          </h2>
          <p className="text-sm sm:text-base text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)]">
            No endless scrolling. No spammy feeds. Practical discovery designed around your potential.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className={`relative rounded-3xl p-8 bg-gradient-to-b ${step.color} border ${step.border} backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-200 group flex flex-col justify-between`}
              >
                {/* Large Background Step Number */}
                <div className="absolute top-4 right-6 text-6xl font-black text-black/5 dark:text-white/5 select-none pointer-events-none">
                  {step.number}
                </div>

                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/90 dark:bg-[#16122a] border border-[#BEB3FF]/30 flex items-center justify-center shadow-sm">
                    <Icon className={`w-6 h-6 ${step.accent}`} />
                  </div>

                  <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${step.badge}`}>
                    {step.subtitle}
                  </span>

                  <h3 className="text-xl font-bold text-[rgb(15_12_30)] dark:text-white">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#BEB3FF]/20 flex items-center text-xs font-semibold text-[rgb(15_12_30)] dark:text-white">
                  <span>Step {step.number} of 03</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;
