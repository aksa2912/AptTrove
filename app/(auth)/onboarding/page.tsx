"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Sparkles, ArrowRight, ArrowLeft, CheckCircle2, BookOpen, Target, Clock, MapPin } from "lucide-react";
import { SkillChip } from "@/components/shared/skill-chip";
import { AvailabilityGrid } from "@/components/shared/availability-grid";
import { LocationSelector } from "@/components/team-builder/location-selector";
import { SKILLS } from "@/lib/constants/skills";
import { AvailabilitySlot, LocationPreference, YearOfStudy } from "@/lib/types";
import { ROUTES } from "@/lib/constants/routes";

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);

  // Step 1: Academic Identity
  const [branch, setBranch] = useState("Computer Science & Engineering");
  const [year, setYear] = useState<YearOfStudy>("3rd");
  const [bio, setBio] = useState("");

  // Step 2: Skills
  const [canTeach, setCanTeach] = useState<string[]>(["React", "Figma"]);
  const [wantsToLearn, setWantsToLearn] = useState<string[]>(["Python", "Machine Learning"]);

  // Step 3: Availability
  const [slots, setSlots] = useState<AvailabilitySlot[]>([
    { id: "1", day: "Saturday", startTime: "12:00", endTime: "18:00", type: "teaching" },
    { id: "2", day: "Sunday", startTime: "12:00", endTime: "18:00", type: "learning" },
  ]);

  // Step 4: Location
  const [location, setLocation] = useState<LocationPreference>({
    label: "Local Campus Area",
    radiusKm: 20,
    useCurrentLocation: true,
  });

  const toggleTeachSkill = (skill: string) => {
    if (canTeach.includes(skill)) setCanTeach(canTeach.filter((s) => s !== skill));
    else setCanTeach([...canTeach, skill]);
  };

  const toggleLearnSkill = (skill: string) => {
    if (wantsToLearn.includes(skill)) setWantsToLearn(wantsToLearn.filter((s) => s !== skill));
    else setWantsToLearn([...wantsToLearn, skill]);
  };

  const handleFinish = () => {
    // BACKEND: POST `/api/onboarding/complete`
    router.push(ROUTES.DASHBOARD);
  };

  return (
    <div className="w-full max-w-2xl p-6 sm:p-10 rounded-[36px] bg-white/90 dark:bg-[#16122a]/90 border border-[#BEB3FF]/40 backdrop-blur-xl shadow-2xl space-y-8">
      
      {/* Progress Bar & Step Numbers */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs font-bold text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)]">
          <span className="flex items-center gap-1.5 text-[#3788FE]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Profile Configuration</span>
          </span>
          <span>Step {step} of 5</span>
        </div>

        <div className="w-full h-2 rounded-full bg-[#BEB3FF]/20 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#3788FE] to-[#BEB3FF] rounded-full transition-all duration-300"
            style={{ width: `${(step / 5) * 100}%` }}
          />
        </div>
      </div>

      {/* Step 1: Academic Identity */}
      {step === 1 && (
        <div className="space-y-5 animate-fade-in">
          <div>
            <h2 className="text-xl font-black text-[rgb(15_12_30)] dark:text-white tracking-tight">
              Tell us about your academic background
            </h2>
            <p className="text-xs text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] mt-1">
              Help peers on your campus discover your department and focus area.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-[rgb(15_12_30)] dark:text-white mb-1">
                Branch / Major
              </label>
              <input
                type="text"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                placeholder="e.g. Computer Science, AI, Design, Electrical..."
                className="w-full px-4 py-2.5 text-xs rounded-xl bg-[#FFF5F3] dark:bg-[#120f23] border border-[#BEB3FF]/40 text-[rgb(15_12_30)] dark:text-white outline-none focus:border-[#3788FE]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[rgb(15_12_30)] dark:text-white mb-1">
                Year of Study
              </label>
              <div className="flex flex-wrap gap-2">
                {(["1st", "2nd", "3rd", "4th", "Alumni"] as YearOfStudy[]).map((y) => (
                  <button
                    key={y}
                    type="button"
                    onClick={() => setYear(y)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      year === y
                        ? "bg-[#3788FE] text-white border-[#3788FE]"
                        : "bg-white dark:bg-white/5 border-[#BEB3FF]/30 text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)]"
                    }`}
                  >
                    {y} Year
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[rgb(15_12_30)] dark:text-white mb-1">
                Short Aptitude Summary
              </label>
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                placeholder="What are your favorite technologies? What are you passionate about building?"
                rows={2}
                className="w-full p-3 text-xs rounded-xl bg-[#FFF5F3] dark:bg-[#120f23] border border-[#BEB3FF]/40 text-[rgb(15_12_30)] dark:text-white resize-none"
              />
            </div>
          </div>
        </div>
      )}

      {/* Step 2: Skills I Can Teach & Learn */}
      {step === 2 && (
        <div className="space-y-5 animate-fade-in">
          <div>
            <h2 className="text-xl font-black text-[rgb(15_12_30)] dark:text-white tracking-tight">
              Select your skill exchange inventory
            </h2>
            <p className="text-xs text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] mt-1">
              Select what you can mentor peers on, and what you are looking to learn.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <span className="text-xs font-bold uppercase text-[#3788FE] block mb-2">
                Skills I Can Teach ({canTeach.length})
              </span>
              <div className="flex flex-wrap gap-1.5 max-h-32 overflow-y-auto p-1">
                {SKILLS.slice(0, 16).map((s) => {
                  const sel = canTeach.includes(s.name);
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => toggleTeachSkill(s.name)}
                      className={`text-xs px-2.5 py-1 rounded-lg border transition-all ${
                        sel
                          ? "bg-[#3788FE] text-white border-[#3788FE]"
                          : "bg-white dark:bg-white/5 border-[#BEB3FF]/30 text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)]"
                      }`}
                    >
                      {sel ? "✓ " : ""}{s.name}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <span className="text-xs font-bold uppercase text-[#5446a8] dark:text-[#BEB3FF] block mb-2">
                Skills I Want to Learn ({wantsToLearn.length})
              </span>
              <div className="flex flex-wrap gap-1.5 max-h-32 overflow-y-auto p-1">
                {SKILLS.slice(0, 16).map((s) => {
                  const sel = wantsToLearn.includes(s.name);
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => toggleLearnSkill(s.name)}
                      className={`text-xs px-2.5 py-1 rounded-lg border transition-all ${
                        sel
                          ? "bg-[#BEB3FF] text-[#1f1545] font-bold border-[#BEB3FF]"
                          : "bg-white dark:bg-white/5 border-[#BEB3FF]/30 text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)]"
                      }`}
                    >
                      {sel ? "✓ " : ""}{s.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Step 3: Availability */}
      {step === 3 && (
        <div className="space-y-5 animate-fade-in">
          <div>
            <h2 className="text-xl font-black text-[rgb(15_12_30)] dark:text-white tracking-tight">
              Indicate your general weekly availability
            </h2>
            <p className="text-xs text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] mt-1">
              Used by our schedule-overlap engine so you match with people free at the same times.
            </p>
          </div>

          <AvailabilityGrid
            slots={slots}
            onChange={setSlots}
            type="teaching"
          />
        </div>
      )}

      {/* Step 4: Location Radius */}
      {step === 4 && (
        <div className="space-y-5 animate-fade-in">
          <div>
            <h2 className="text-xl font-black text-[rgb(15_12_30)] dark:text-white tracking-tight">
              Set your geographic discovery preferences
            </h2>
            <p className="text-xs text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] mt-1">
              Choose your search radius (10–50 km) to discover nearby study partners and hackathon teams.
            </p>
          </div>

          <LocationSelector
            value={location}
            onChange={setLocation}
          />
        </div>
      )}

      {/* Step 5: Complete */}
      {step === 5 && (
        <div className="text-center py-6 space-y-4 animate-fade-in">
          <div className="w-16 h-16 mx-auto rounded-3xl bg-gradient-to-tr from-[#3788FE] to-[#BEB3FF] flex items-center justify-center text-white shadow-xl shadow-[#3788FE]/30 animate-float">
            <Sparkles className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-black text-[rgb(15_12_30)] dark:text-white tracking-tight">
            Your AptTrove Profile is Ready!
          </h2>
          <p className="text-xs sm:text-sm text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] max-w-md mx-auto leading-relaxed">
            You're all set to discover peer SkillSwap partners and form balanced project teams.
          </p>
        </div>
      )}

      {/* Bottom Navigation Buttons */}
      <div className="flex items-center justify-between pt-4 border-t border-[#BEB3FF]/20">
        {step > 1 ? (
          <button
            type="button"
            onClick={() => setStep((step - 1) as any)}
            className="px-4 py-2 rounded-xl border border-[#BEB3FF]/40 text-xs font-semibold text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] hover:bg-black/5 flex items-center gap-1 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back</span>
          </button>
        ) : (
          <div />
        )}

        {step < 5 ? (
          <button
            type="button"
            onClick={() => setStep((step + 1) as any)}
            className="px-6 py-2.5 rounded-xl bg-[#3788FE] hover:bg-[#2573e8] text-white text-xs font-bold shadow-md shadow-[#3788FE]/25 hover:shadow-lg flex items-center gap-1.5 cursor-pointer"
          >
            <span>Continue</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        ) : (
          <button
            type="button"
            onClick={handleFinish}
            className="px-8 py-3 rounded-2xl bg-[#3788FE] hover:bg-[#2573e8] text-white text-sm font-extrabold shadow-xl shadow-[#3788FE]/30 flex items-center gap-2 cursor-pointer"
          >
            <span>Go to Dashboard</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>

    </div>
  );
}
