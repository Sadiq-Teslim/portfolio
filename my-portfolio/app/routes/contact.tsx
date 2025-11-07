import React, { useState } from "react";
import { useRevealAnimation } from "../hooks/useRevealAnimation";

const FORM_ENDPOINT = "https://formspree.io/f/xjkpngdk";

const ContactSection = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState<{ title: string; message: string; tone: "success" | "error" } | null>(null);
  const introReveal = useRevealAnimation<HTMLDivElement>({ delay: 60 });
  const formReveal = useRevealAnimation<HTMLFormElement>({ delay: 200 });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");
    setFeedback(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (response.ok) {
        setStatus("success");
        setFeedback({
          title: "Message delivered",
          message: "Thanks for reaching out. I'll reply within 24 hours.",
          tone: "success",
        });
        form.reset();
        return;
      }

      const data = await response.json().catch(() => undefined);
      const fallback = typeof data?.error === "string" ? data.error : "Something went wrong while sending your message. Please try again.";
      setStatus("error");
      setFeedback({
        title: "Message not sent",
        message: fallback,
        tone: "error",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
      setFeedback({
        title: "Network error",
        message: "I couldn't reach Formspree. Check your connection and try again.",
        tone: "error",
      });
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950 py-20 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.25),_transparent_55%)]" aria-hidden />
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.05fr_0.95fr] items-start">
          <div
            ref={introReveal.ref}
            style={introReveal.style}
            className={`space-y-6 transition-all duration-700 ${
              introReveal.isVisible ? "motion-safe:animate-reveal-up" : "opacity-0 translate-y-8"
            } motion-reduce:opacity-100 motion-reduce:translate-y-0`}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-violet-300/80">Let's collaborate</p>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-white">
              Ready to ship your next AI or payments experience?
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              I partner with fast-moving teams to launch fullstack products that stay resilient in production. Tell me about the challenge you're solving and I'll respond within a day.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-slate-300/80">
              <span className="rounded-full border border-slate-700/60 px-4 py-2">Lagos, Nigeria</span>
              <a
                href="mailto:sadiqadetola08@gmail.com"
                className="rounded-full border border-violet-400/60 px-4 py-2 text-violet-200 transition-all duration-300 hover:border-violet-300 hover:bg-violet-500/10 hover:text-violet-100"
              >
                sadiqadetola08@gmail.com
              </a>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-slate-300/80">
              <a
                href="https://wa.me/+2347063569494"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-violet-400/60 px-4 py-2 transition-colors duration-300 hover:border-violet-300 hover:bg-violet-500/10 hover:text-violet-100"
              >
                <span>WhatsApp</span>
              </a>
              <a
                href="https://linkedin.com/in/sadiq-ta"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-violet-400/60 px-4 py-2 transition-colors duration-300 hover:border-violet-300 hover:bg-violet-500/10 hover:text-violet-100"
              >
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <form
            ref={formReveal.ref}
            style={formReveal.style}
            onSubmit={handleSubmit}
            noValidate
            className={`relative rounded-3xl border border-slate-700/40 bg-slate-900/70 p-8 shadow-[0_25px_80px_rgba(15,23,42,0.35)] backdrop-blur-xl transition-all duration-700 ${
              formReveal.isVisible ? "motion-safe:animate-reveal-up" : "opacity-0 translate-y-8"
            } motion-reduce:opacity-100 motion-reduce:translate-y-0`}
          >
            <div className="absolute -top-8 right-8 hidden sm:flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-purple-500 text-white shadow-lg shadow-violet-500/40">
              ✉️
            </div>
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-300">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="How should I address you?"
                  className="h-12 w-full rounded-2xl border border-slate-700/40 bg-slate-900/60 px-4 text-sm text-white placeholder:text-slate-500 transition focus:border-violet-400/70 focus:outline-none focus:ring-2 focus:ring-violet-400/30"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-300">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="How do I reach back?"
                  className="h-12 w-full rounded-2xl border border-slate-700/40 bg-slate-900/60 px-4 text-sm text-white placeholder:text-slate-500 transition focus:border-violet-400/70 focus:outline-none focus:ring-2 focus:ring-violet-400/30"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-300">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Briefly describe the problem you're solving."
                  className="min-h-[140px] w-full rounded-2xl border border-slate-700/40 bg-slate-900/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 transition focus:border-violet-400/70 focus:outline-none focus:ring-2 focus:ring-violet-400/30"
                />
              </div>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-400 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-violet-500/30 transition hover:shadow-violet-500/45 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-violet-400 disabled:cursor-not-allowed disabled:opacity-80 motion-safe:animate-border-glow"
                style={{ animationDelay: "120ms" }}
              >
                {status === "submitting" ? "Sending..." : "Send Message"}
              </button>
              <div aria-live="polite" className="min-h-[48px] text-sm">
                {feedback && (
                  <div
                    className={`rounded-2xl border px-4 py-3 ${
                      feedback.tone === "success"
                        ? "border-emerald-400/60 bg-emerald-400/10 text-emerald-200"
                        : "border-red-400/60 bg-red-500/10 text-red-200"
                    }`}
                  >
                    <p className="font-semibold">{feedback.title}</p>
                    <p className="text-xs mt-1 text-slate-200/80">{feedback.message}</p>
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
