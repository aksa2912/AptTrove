"use client";

import { AvailabilitySlot, DayOfWeek } from "@/lib/types";
import { DAYS_OF_WEEK } from "@/lib/constants/routes";
import { Clock } from "lucide-react";

export interface AvailabilityGridProps {
  slots: AvailabilitySlot[];
  onChange?: (slots: AvailabilitySlot[]) => void;
  readOnly?: boolean;
  type?: "teaching" | "learning" | "project";
  className?: string;
}

const TIME_BLOCKS = [
  { id: "morning", label: "Morning", sublabel: "6 AM – 12 PM", startTime: "06:00", endTime: "12:00" },
  { id: "afternoon", label: "Afternoon", sublabel: "12 PM – 6 PM", startTime: "12:00", endTime: "18:00" },
  { id: "evening", label: "Evening", sublabel: "6 PM – 10 PM", startTime: "18:00", endTime: "22:00" },
  { id: "night", label: "Night", sublabel: "10 PM – 12 AM", startTime: "22:00", endTime: "24:00" },
];

export function AvailabilityGrid({
  slots,
  onChange,
  readOnly = false,
  type = "teaching",
  className = "",
}: AvailabilityGridProps) {
  const isSlotSelected = (day: DayOfWeek, startTime: string) => {
    return slots.some(
      (s) => s.day === day && s.startTime === startTime && (readOnly || s.type === type)
    );
  };

  const handleCellClick = (day: DayOfWeek, block: (typeof TIME_BLOCKS)[number]) => {
    if (readOnly || !onChange) return;

    const exists = isSlotSelected(day, block.startTime);
    if (exists) {
      onChange(
        slots.filter(
          (s) => !(s.day === day && s.startTime === block.startTime && s.type === type)
        )
      );
    } else {
      const newSlot: AvailabilitySlot = {
        id: `${day}-${block.id}-${type}`,
        day,
        startTime: block.startTime,
        endTime: block.endTime,
        type,
      };
      onChange([...slots, newSlot]);
    }
  };

  const getActiveStyle = () => {
    if (type === "teaching") return "bg-[#3788FE] text-white border-[#3788FE] shadow-sm";
    if (type === "learning") return "bg-[#BEB3FF] text-[#1f1545] font-bold border-[#BEB3FF]";
    return "bg-[#FFD7E0] text-[#781832] font-bold border-[#FFD7E0]";
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {/* Legend & Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)]">
        <div className="flex items-center gap-1.5 font-semibold">
          <Clock className="w-4 h-4 text-[#3788FE]" />
          <span>Weekly Time Commitment</span>
        </div>
        {!readOnly && (
          <span className="text-[11px] bg-[#BEB3FF]/20 px-2 py-0.5 rounded-md">
            Click cells to toggle
          </span>
        )}
      </div>

      {/* Grid */}
      <div className="overflow-x-auto pb-2">
        <table className="w-full text-center border-collapse min-w-[500px]">
          <thead>
            <tr>
              <th className="p-2 text-[11px] font-bold uppercase text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] text-left w-28">
                Time
              </th>
              {DAYS_OF_WEEK.map((day) => (
                <th
                  key={day}
                  className="p-2 text-xs font-semibold text-[rgb(15_12_30)] dark:text-white"
                >
                  {day.slice(0, 3)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TIME_BLOCKS.map((block) => (
              <tr key={block.id} className="border-t border-[#BEB3FF]/20">
                <td className="p-2 text-left">
                  <p className="text-xs font-semibold text-[rgb(15_12_30)] dark:text-white">
                    {block.label}
                  </p>
                  <p className="text-[10px] text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)]">
                    {block.sublabel}
                  </p>
                </td>
                {DAYS_OF_WEEK.map((day) => {
                  const active = isSlotSelected(day, block.startTime);
                  return (
                    <td key={day} className="p-1.5">
                      <button
                        type="button"
                        disabled={readOnly}
                        onClick={() => handleCellClick(day, block)}
                        aria-label={`${day} ${block.label}`}
                        className={`w-full h-8 rounded-lg border transition-all duration-150 flex items-center justify-center text-[10px] ${
                          active
                            ? getActiveStyle()
                            : readOnly
                            ? "bg-transparent border-dashed border-[#BEB3FF]/20 text-transparent"
                            : "bg-white/40 dark:bg-white/5 border-[#BEB3FF]/30 hover:border-[#3788FE]/60 hover:bg-[#3788FE]/5 text-transparent"
                        } ${readOnly ? "cursor-default" : "cursor-pointer"}`}
                      >
                        {active ? "✓" : ""}
                      </button>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AvailabilityGrid;
