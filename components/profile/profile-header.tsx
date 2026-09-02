"use client";

import { StudentProfile } from "@/lib/types";
import { getInitials } from "@/lib/utils/cn";
import { MapPin, GraduationCap, Edit3, Check, Link as LinkIcon, Globe, Sparkles } from "lucide-react";

export interface ProfileHeaderProps {
  profile: StudentProfile;
  isEditing: boolean;
  onToggleEdit: () => void;
  onUpdateProfile: (updated: Partial<StudentProfile>) => void;
  className?: string;
}

export function ProfileHeader({
  profile,
  isEditing,
  onToggleEdit,
  onUpdateProfile,
  className = "",
}: ProfileHeaderProps) {
  return (
    <div
      className={`p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-[#16122a]/80 border border-[#BEB3FF]/40 backdrop-blur-md shadow-sm space-y-6 ${className}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        {/* Avatar + Main Identity Info */}
        <div className="flex items-center gap-5">
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-[#3788FE] via-[#BEB3FF] to-[#FFD7E0] p-1 shadow-md shrink-0">
            <div className="w-full h-full bg-[#FFF5F3] dark:bg-[#120f23] rounded-[20px] flex items-center justify-center font-black text-2xl text-[#3788FE]">
              {getInitials(profile.name)}
            </div>
          </div>

          <div className="space-y-1">
            {isEditing ? (
              <input
                type="text"
                value={profile.name}
                onChange={(e) => onUpdateProfile({ name: e.target.value })}
                className="text-xl font-bold px-3 py-1 rounded-xl bg-[#FFF5F3] dark:bg-[#120f23] border border-[#BEB3FF]/40 text-[rgb(15_12_30)] dark:text-white"
              />
            ) : (
              <h2 className="text-2xl font-black text-[rgb(15_12_30)] dark:text-white tracking-tight">
                {profile.name}
              </h2>
            )}

            <div className="flex flex-wrap items-center gap-2 text-xs text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)]">
              <span className="flex items-center gap-1 font-semibold text-[rgb(15_12_30)] dark:text-white">
                <GraduationCap className="w-3.5 h-3.5 text-[#3788FE]" />
                {profile.year} Year · {profile.branch}
              </span>
              <span>•</span>
              <span>{profile.college}</span>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-[#3788FE] font-medium pt-0.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>{profile.location.label}</span>
            </div>
          </div>
        </div>

        {/* Edit Profile Toggle Button */}
        <button
          type="button"
          onClick={onToggleEdit}
          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-bold transition-all shadow-sm self-start sm:self-auto cursor-pointer ${
            isEditing
              ? "bg-emerald-600 text-white shadow-emerald-600/25"
              : "bg-[#3788FE] text-white hover:bg-[#2573e8] shadow-[#3788FE]/25"
          }`}
        >
          {isEditing ? (
            <>
              <Check className="w-4 h-4" />
              <span>Save Changes</span>
            </>
          ) : (
            <>
              <Edit3 className="w-4 h-4" />
              <span>Edit Identity</span>
            </>
          )}
        </button>
      </div>

      {/* Bio */}
      <div className="pt-2 border-t border-[#BEB3FF]/20">
        <label className="text-[10px] font-bold uppercase tracking-wider text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] block mb-1">
          Aptitude Bio
        </label>
        {isEditing ? (
          <textarea
            value={profile.bio}
            onChange={(e) => onUpdateProfile({ bio: e.target.value })}
            rows={2}
            className="w-full p-3 text-xs rounded-xl bg-[#FFF5F3] dark:bg-[#120f23] border border-[#BEB3FF]/40 text-[rgb(15_12_30)] dark:text-white resize-none"
          />
        ) : (
          <p className="text-xs text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] leading-relaxed">
            {profile.bio || "No bio added yet. Add a short summary of your technical aptitudes and interests."}
          </p>
        )}
      </div>
    </div>
  );
}

export default ProfileHeader;
