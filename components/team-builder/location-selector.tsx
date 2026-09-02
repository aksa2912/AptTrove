"use client";

import { useState } from "react";
import { MapPin, Navigation, CheckCircle2, AlertCircle } from "lucide-react";
import { LocationPreference } from "@/lib/types";
import { RadiusSelector } from "./radius-selector";
import { RadiusOption } from "@/lib/constants/routes";

export interface LocationSelectorProps {
  value: LocationPreference;
  onChange: (loc: LocationPreference) => void;
  className?: string;
}

export function LocationSelector({
  value,
  onChange,
  className = "",
}: LocationSelectorProps) {
  const [geoStatus, setGeoStatus] = useState<"idle" | "loading" | "granted" | "denied">("idle");

  const requestBrowserLocation = () => {
    if (!navigator.geolocation) {
      setGeoStatus("denied");
      return;
    }
    setGeoStatus("loading");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setGeoStatus("granted");
        onChange({
          ...value,
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          label: "Current Device Location",
          useCurrentLocation: true,
        });
      },
      (error) => {
        setGeoStatus("denied");
      }
    );
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex items-center justify-between">
        <label className="text-xs font-bold uppercase tracking-wider text-[rgb(15_12_30)] dark:text-white flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-[#3788FE]" />
          <span>Location & Search Range</span>
        </label>
      </div>

      {/* Geolocation Trigger / Manual Input */}
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row gap-2.5">
          <button
            type="button"
            onClick={requestBrowserLocation}
            className={`flex-1 py-2.5 px-3.5 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
              value.useCurrentLocation
                ? "bg-[#3788FE]/15 border-[#3788FE] text-[#3788FE]"
                : "bg-white/70 dark:bg-white/5 border-[#BEB3FF]/40 text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] hover:border-[#3788FE]"
            }`}
          >
            <Navigation className={`w-3.5 h-3.5 ${geoStatus === "loading" ? "animate-spin" : ""}`} />
            <span>
              {value.useCurrentLocation
                ? "Using Device Location ✓"
                : geoStatus === "loading"
                ? "Acquiring GPS..."
                : "Use Current Location"}
            </span>
          </button>

          <input
            type="text"
            value={value.useCurrentLocation ? "Current Device Location" : value.label}
            onChange={(e) =>
              onChange({
                ...value,
                label: e.target.value,
                useCurrentLocation: false,
              })
            }
            disabled={value.useCurrentLocation}
            placeholder="Or enter city / campus name..."
            className="flex-1 px-3.5 py-2 text-xs rounded-xl bg-white dark:bg-[#120f23] border border-[#BEB3FF]/40 text-[rgb(15_12_30)] dark:text-white outline-none focus:border-[#3788FE] disabled:opacity-60"
          />
        </div>

        {geoStatus === "denied" && (
          <p className="text-[11px] text-amber-600 dark:text-amber-400 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            Location permission not granted. You can type your location manually above.
          </p>
        )}
      </div>

      {/* Radius Selector */}
      <RadiusSelector
        value={value.radiusKm}
        onChange={(r: RadiusOption) => onChange({ ...value, radiusKm: r })}
      />
    </div>
  );
}

export default LocationSelector;
