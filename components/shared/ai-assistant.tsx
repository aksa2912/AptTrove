"use client";

import { useState } from "react";
import { Sparkles, Send, Bot, User as UserIcon } from "lucide-react";
import { AIMessage, AIAssistantContext } from "@/lib/types";

export interface AIAssistantProps {
  context: AIAssistantContext;
  placeholder?: string;
  onSendMessage?: (message: string) => void;
  messages?: AIMessage[];
  isLoading?: boolean;
  className?: string;
}

export function AIAssistant({
  context,
  placeholder = "Ask AptTrove AI about matches or team fit...",
  onSendMessage,
  messages = [],
  isLoading = false,
  className = "",
}: AIAssistantProps) {
  const [input, setInput] = useState("");

  const contextPrompts: Record<AIAssistantContext, string[]> = {
    skillswap: [
      "Why is this person a good match for me?",
      "Find students who can teach React within 20 km",
      "Who is available Saturday afternoon for Python?",
    ],
    "team-builder": [
      "Who can help complete my project team?",
      "Which skill is currently missing from my project?",
      "Find a UI/UX designer within 30 km with weekend availability",
    ],
    discover: [
      "Discover frontend builders near Mumbai",
      "Which hackathon teams have open seats?",
    ],
    recommendations: [
      "Why were these recommendations selected?",
      "How can I improve my match score?",
    ],
    general: [
      "How does AptTrove's 4-factor matching work?",
      "What skills are trending in the market right now?",
    ],
  };

  const handleSend = (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim()) return;
    onSendMessage?.(text);
    setInput("");
  };

  return (
    <div
      className={`flex flex-col h-full rounded-3xl border border-[#BEB3FF]/40 bg-gradient-to-b from-white/90 via-[#FFF5F3]/70 to-[#BEB3FF]/10 dark:from-[#16122a]/90 dark:via-[#120f23]/80 dark:to-transparent backdrop-blur-xl shadow-lg overflow-hidden ${className}`}
    >
      {/* Header */}
      <div className="p-4 border-b border-[#BEB3FF]/30 flex items-center justify-between bg-white/50 dark:bg-white/[0.02]">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#3788FE] via-[#BEB3FF] to-[#FFD7E0] p-0.5 shadow-sm">
            <div className="w-full h-full bg-[#FFF5F3] dark:bg-[#120f23] rounded-[10px] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-[#3788FE]" />
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold text-[rgb(15_12_30)] dark:text-white flex items-center gap-1.5">
              <span>AptTrove AI</span>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#3788FE]/10 text-[#3788FE] border border-[#3788FE]/30">
                {context}
              </span>
            </h3>
            <p className="text-[10px] text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)]">
              Focused matching assistant · Connect backend
            </p>
          </div>
        </div>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3.5 scrollbar-thin text-xs">
        {/* Intro Message */}
        <div className="flex items-start gap-2.5">
          <div className="w-7 h-7 rounded-xl bg-[#BEB3FF]/30 flex items-center justify-center text-[#3788FE] shrink-0 mt-0.5">
            <Bot className="w-4 h-4" />
          </div>
          <div className="p-3 rounded-2xl bg-white/80 dark:bg-[#1f1938] border border-[#BEB3FF]/30 text-[rgb(15_12_30)] dark:text-white max-w-[85%] leading-relaxed shadow-sm">
            Hello! I can help you analyze match compatibilities, evaluate missing skills in your team, and suggest candidates based on location and schedule overlap.
          </div>
        </div>

        {/* Message history */}
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start gap-2.5 ${
              msg.role === "user" ? "flex-row-reverse" : ""
            }`}
          >
            <div
              className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                msg.role === "user"
                  ? "bg-[#3788FE] text-white"
                  : "bg-[#BEB3FF]/30 text-[#3788FE]"
              }`}
            >
              {msg.role === "user" ? (
                <UserIcon className="w-3.5 h-3.5" />
              ) : (
                <Bot className="w-4 h-4" />
              )}
            </div>

            <div
              className={`p-3 rounded-2xl max-w-[85%] leading-relaxed shadow-sm ${
                msg.role === "user"
                  ? "bg-[#3788FE] text-white font-medium"
                  : "bg-white/80 dark:bg-[#1f1938] border border-[#BEB3FF]/30 text-[rgb(15_12_30)] dark:text-white"
              }`}
            >
              <p>{msg.content}</p>

              {/* Structured reasoning tags if present */}
              {msg.reasoning && msg.reasoning.length > 0 && (
                <div className="mt-2.5 pt-2 border-t border-[#BEB3FF]/30 space-y-1">
                  <p className="text-[10px] font-bold uppercase text-[#3788FE]">
                    Match Analysis:
                  </p>
                  {msg.reasoning.map((r, i) => (
                    <div key={i} className="flex items-center gap-1 text-[11px]">
                      <span className="text-emerald-500">✓</span>
                      <span>{r}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex items-center gap-2 text-[11px] text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] p-2">
            <Sparkles className="w-3.5 h-3.5 text-[#3788FE] animate-spin" />
            <span>Analyzing match graph...</span>
          </div>
        )}
      </div>

      {/* Suggested Prompts */}
      <div className="p-3 border-t border-[#BEB3FF]/20 bg-white/40 dark:bg-white/[0.01] space-y-2">
        <p className="text-[10px] font-bold uppercase text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)]">
          Suggested Queries:
        </p>
        <div className="flex flex-wrap gap-1.5">
          {contextPrompts[context].map((prompt, i) => (
            <button
              key={i}
              onClick={() => handleSend(prompt)}
              className="text-[11px] px-2.5 py-1 rounded-full bg-white dark:bg-[#1f1938] border border-[#BEB3FF]/40 hover:border-[#3788FE] text-[rgb(100_90_130)] dark:text-[rgb(180_170_210)] hover:text-[#3788FE] transition-all text-left truncate max-w-full"
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>

      {/* Input Box */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="p-3 border-t border-[#BEB3FF]/30 flex items-center gap-2 bg-white/70 dark:bg-[#16122a]/70"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={placeholder}
          className="flex-1 px-3.5 py-2 rounded-xl text-xs bg-white dark:bg-[#120f23] border border-[#BEB3FF]/40 focus:border-[#3788FE] text-[rgb(15_12_30)] dark:text-white outline-none transition-colors"
        />
        <button
          type="submit"
          disabled={!input.trim() || isLoading}
          className="p-2 rounded-xl bg-[#3788FE] disabled:opacity-40 hover:bg-[#2573e8] text-white shadow-md shadow-[#3788FE]/25 transition-all cursor-pointer"
          aria-label="Send message"
        >
          <Send className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
}

export default AIAssistant;
