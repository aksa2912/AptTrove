"use client";

import { useState } from "react";
import { ProfileHeader } from "@/components/profile/profile-header";
import { SkillSection } from "@/components/profile/skill-section";
import { AvailabilitySection } from "@/components/profile/availability-section";
import { ProjectSection } from "@/components/profile/project-section";
import { ProfileStats } from "@/components/profile/profile-stats";
import { StudentProfile } from "@/lib/types";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);

  // User Profile state (Ready for backend hydration)
  // BACKEND: fetch `/api/user/profile` and PUT `/api/user/profile`
  const [profile, setProfile] = useState<StudentProfile>({
    id: "current-user",
    name: "Alex Morgan",
    email: "alex.morgan@campus.edu",
    college: "St. Xavier's Engineering College",
    year: "3rd",
    branch: "Computer Science & Engineering",
    bio: "Passionate full-stack developer & UI designer looking to swap React/Figma expertise for Machine Learning and Python mentorship.",
    role: "student",
    canTeach: ["React", "Next.js", "Figma", "Tailwind CSS"],
    wantsToLearn: ["Python", "Machine Learning", "PyTorch"],
    location: {
      label: "Mumbai Campus District",
      radiusKm: 20,
      useCurrentLocation: true,
    },
    availability: [
      { id: "1", day: "Saturday", startTime: "12:00", endTime: "18:00", type: "teaching" },
      { id: "2", day: "Sunday", startTime: "12:00", endTime: "18:00", type: "learning" },
    ],
    interests: ["AI Agents", "Human-Computer Interaction", "Hackathons"],
    joinedAt: new Date().toISOString(),
    profileCompletion: 85,
    stats: {
      connections: 0,
      skillSwapsCompleted: 0,
      hoursTaught: 0,
      hoursLearned: 0,
      teamsJoined: 0,
      projectsContributed: 0,
    },
  });

  const handleUpdate = (updated: Partial<StudentProfile>) => {
    setProfile({ ...profile, ...updated });
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Profile Header */}
      <ProfileHeader
        profile={profile}
        isEditing={isEditing}
        onToggleEdit={() => setIsEditing(!isEditing)}
        onUpdateProfile={handleUpdate}
      />

      {/* Skills Section */}
      <SkillSection
        canTeach={profile.canTeach}
        wantsToLearn={profile.wantsToLearn}
        isEditing={isEditing}
        onAddTeach={(s) =>
          setProfile({ ...profile, canTeach: [...profile.canTeach, s] })
        }
        onAddLearn={(s) =>
          setProfile({ ...profile, wantsToLearn: [...profile.wantsToLearn, s] })
        }
        onRemoveTeach={(s) =>
          setProfile({ ...profile, canTeach: profile.canTeach.filter((x) => x !== s) })
        }
        onRemoveLearn={(s) =>
          setProfile({ ...profile, wantsToLearn: profile.wantsToLearn.filter((x) => x !== s) })
        }
      />

      {/* Availability Schedule */}
      <AvailabilitySection
        slots={profile.availability}
        isEditing={isEditing}
        onChange={(slots) => setProfile({ ...profile, availability: slots })}
      />

      {/* Profile Activity Stats */}
      <ProfileStats stats={profile.stats} />

      {/* Projects Section */}
      <ProjectSection />
    </div>
  );
}
