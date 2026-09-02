import { Lock, Mail, Phone, CheckCircle2 } from "lucide-react";

export interface ContactRevealProps {
  isRevealed: boolean;
  email?: string;
  phone?: string;
  preferredContact?: string;
  className?: string;
}

export function ContactReveal({
  isRevealed,
  email,
  phone,
  preferredContact = "Email",
  className = "",
}: ContactRevealProps) {
  if (!isRevealed) {
    return (
      <div
        className={`p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-dashed border-[#BEB3FF]/40 flex items-center gap-3 text-xs text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] ${className}`}
      >
        <div className="w-8 h-8 rounded-xl bg-white/80 dark:bg-[#16122a] flex items-center justify-center text-[#3788FE] shrink-0 shadow-sm">
          <Lock className="w-4 h-4" />
        </div>
        <div>
          <p className="font-bold text-[rgb(15_12_30)] dark:text-white">
            Contact Information Hidden
          </p>
          <p className="text-[11px] text-[rgb(160_155_180)] dark:text-[rgb(110_100_140)]">
            Email and contact details unlock automatically once both peers accept.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`p-3.5 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/40 space-y-1.5 text-xs ${className}`}
    >
      <div className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-bold">
        <CheckCircle2 className="w-4 h-4" />
        <span>Contact Details Revealed</span>
      </div>
      <div className="flex flex-wrap items-center gap-4 text-[rgb(15_12_30)] dark:text-white font-medium">
        {email && (
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-1.5 text-[#3788FE] hover:underline"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>{email}</span>
          </a>
        )}
        {phone && (
          <span className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5" />
            <span>{phone}</span>
          </span>
        )}
      </div>
    </div>
  );
}

export default ContactReveal;
