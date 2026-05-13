import { useEffect, useMemo, useState } from "react";
import type { FormEvent } from "react";
import type { Route } from "./+types/guestbook";
import { Shell } from "~/components/Shell";
import { profile, seoImage, siteUrl } from "~/data/profile";

type GuestbookEntry = {
  id: string;
  name: string;
  context: string;
  message: string;
  link?: string;
  dateLabel: string;
};

const title = "Guestbook | Teslim Sadiq";
const description =
  "Leave a short note for Teslim Sadiq, Software Engineer in Lagos, Nigeria.";
const storageKey = "teslim-guestbook-entries";

const defaultEntries: GuestbookEntry[] = [
  {
    id: "welcome",
    name: "Teslim",
    context: "Portfolio",
    message:
      "Thanks for visiting. Drop a short note, feedback, opportunity, or hello.",
    dateLabel: "Pinned",
  },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title },
    { name: "description", content: description },
    { name: "robots", content: "index, follow" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: `${siteUrl}/guestbook` },
    { property: "og:site_name", content: "Teslim Sadiq" },
    { property: "og:image", content: seoImage },
    { property: "og:image:alt", content: "Teslim Sadiq guestbook" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: seoImage },
  ];
}

export function links() {
  return [{ rel: "canonical", href: `${siteUrl}/guestbook` }];
}

const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;

function cleanLink(value: string) {
  const trimmed = value.trim();

  if (!trimmed) {
    return "";
  }

  if (/^https?:\/\//i.test(trimmed)) {
    return trimmed;
  }

  return `https://${trimmed}`;
}

function formatDateLabel() {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date());
}

export default function Guestbook() {
  const [entries, setEntries] = useState(defaultEntries);
  const [name, setName] = useState("");
  const [context, setContext] = useState("");
  const [link, setLink] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const mailSubject = encodeURIComponent("Guestbook note from your portfolio");
  const mailBody = useMemo(
    () =>
      encodeURIComponent(
        `Name: ${name || "[your name]"}\nContext: ${
          context || "[company / role / link]"
        }\n\n${message || "[your note]"}`,
      ),
    [context, message, name],
  );

  useEffect(() => {
    const savedEntries = window.localStorage.getItem(storageKey);

    if (!savedEntries) {
      return;
    }

    try {
      const parsedEntries = JSON.parse(savedEntries) as GuestbookEntry[];
      if (Array.isArray(parsedEntries)) {
        setEntries([...parsedEntries, ...defaultEntries]);
      }
    } catch {
      window.localStorage.removeItem(storageKey);
    }
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextName = name.trim();
    const nextMessage = message.trim();

    if (!nextName || !nextMessage) {
      setStatus("Please add your name and a short note.");
      return;
    }

    setIsSubmitting(true);

    const nextEntry: GuestbookEntry = {
      id: window.crypto.randomUUID(),
      name: nextName.slice(0, 64),
      context: context.trim().slice(0, 80) || "Guest",
      link: cleanLink(link),
      message: nextMessage.slice(0, 220),
      dateLabel: formatDateLabel(),
    };
    const savedEntries = [nextEntry, ...entries.filter((entry) => entry.id !== "welcome")].slice(0, 12);

    try {
      if (formspreeEndpoint) {
        const response = await fetch(formspreeEndpoint, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: nextEntry.name,
            context: nextEntry.context,
            link: nextEntry.link || "",
            message: nextEntry.message,
            _subject: `Portfolio guestbook note from ${nextEntry.name}`,
          }),
        });

        if (!response.ok) {
          throw new Error("Formspree rejected the submission.");
        }
      }

      window.localStorage.setItem(storageKey, JSON.stringify(savedEntries));
      setEntries([nextEntry, ...entries]);
      setName("");
      setContext("");
      setLink("");
      setMessage("");
      setStatus(
        formspreeEndpoint
          ? "Sent. Thanks for leaving a note."
          : "Saved here. Add a Formspree endpoint to send notes to my email.",
      );
    } catch {
      setStatus("I could not send that. Please try the email link instead.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Shell>
      <section className="guestbook-page">
        <div className="guestbook-intro">
          <span>Guestbook</span>
          <h1>Leave a note.</h1>
          <p>
            A small corner for recruiters, builders, friends, and curious people
            to say hello, leave feedback, or point me toward something worth
            building.
          </p>
        </div>

        <div className="guestbook-layout">
          <form className="guestbook-form" onSubmit={handleSubmit}>
            <label>
              <span>Name</span>
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Your name"
                maxLength={64}
              />
            </label>
            <label>
              <span>Context</span>
              <input
                value={context}
                onChange={(event) => setContext(event.target.value)}
                placeholder="Company, role, or where you found me"
                maxLength={80}
              />
            </label>
            <label>
              <span>Link</span>
              <input
                value={link}
                onChange={(event) => setLink(event.target.value)}
                placeholder="Website, LinkedIn, or X"
                maxLength={140}
              />
            </label>
            <label>
              <span>Note</span>
              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Keep it short and kind."
                maxLength={220}
                rows={5}
              />
            </label>

            <div className="guestbook-actions">
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Sign guestbook"}
              </button>
              <a href={`mailto:${profile.email}?subject=${mailSubject}&body=${mailBody}`}>
                Email instead
              </a>
            </div>

            {status ? <p className="guestbook-status">{status}</p> : null}
          </form>

          <div className="guestbook-entries" aria-live="polite">
            {entries.map((entry) => (
              <article className="guestbook-entry" key={entry.id}>
                <div>
                  <h2>{entry.name}</h2>
                  <span>{entry.dateLabel}</span>
                </div>
                <p>{entry.message}</p>
                <footer>
                  {entry.link ? (
                    <a href={entry.link} target="_blank" rel="noreferrer">
                      {entry.context}
                    </a>
                  ) : (
                    <span>{entry.context}</span>
                  )}
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Shell>
  );
}
