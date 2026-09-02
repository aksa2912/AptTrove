"use client";

import { AvailabilitySlot } from "@/lib/types";
import { AvailabilityGrid } from "@/components/shared/availability-grid";

export interface AvailabilitySectionProps {
  slots: AvailabilitySlot[];
  isEditing: boolean;
  onChange: (slots: AvailabilitySlot[]) => void;
  className?: string;
}

export function AvailabilitySection({
  slots,
  isEditing,
  onChange,
  className = "",
}: AvailabilitySectionProps) {
  return (
    <div
      className={`p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-[#16122a]/80 border border-[#BEB3FF]/40 backdrop-blur-md shadow-sm space-y-4 ${className}`}
    >
      <div>
        <h3 className="text-base font-bold text-[rgb(15_12_30)] dark:text-white">
          Weekly Availability Schedule
        </h3>
        <p className="text-xs text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)]">
          Used by the time-overlap matching algorithm
        </p>
      </div>

      <AvailabilityGrid
        slots={slots}
        onChange={onChange}
        readOnly={!isEditing}
        type="teaching"
      />
    </div>
  );
}

export default AvailabilitySection;
