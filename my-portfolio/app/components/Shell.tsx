import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Briefcase,
  FileText,
  Github,
  Home,
  Linkedin,
  Mail,
  Moon,
  Sun,
  UserRound,
} from "lucide-react";
import { profile, resumeUrl, socials } from "~/data/profile";

const navItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "/about", icon: UserRound },
  { label: "Work", href: "/work", icon: Briefcase },
  { label: "Resume", href: resumeUrl, icon: FileText, external: true },
];

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  x: XIcon,
  mail: Mail,
};

function XIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const saved = window.localStorage.getItem("theme");
    const next = saved === "dark" ? "dark" : "light";
    setTheme(next);
    document.documentElement.dataset.theme = next;
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem("theme", next);
  };

  return (
    <button
      className="nav-button"
      type="button"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggle}
    >
      {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
    </button>
  );
}

function AnimatedBackground() {
  useEffect(() => {
    const canTrackPointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!canTrackPointer) {
      return;
    }

    const root = document.documentElement;
    let frame = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight * 0.2;

    const writePointer = () => {
      root.style.setProperty("--pointer-x", `${x}px`);
      root.style.setProperty("--pointer-y", `${y}px`);
      frame = 0;
    };

    const updatePointer = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;

      if (!frame) {
        frame = window.requestAnimationFrame(writePointer);
      }
    };

    window.addEventListener("pointermove", updatePointer, { passive: true });

    return () => {
      window.removeEventListener("pointermove", updatePointer);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  return (
    <div className="animated-background" aria-hidden="true">
      <div className="background-grid" />
      <div className="background-spotlight" />
      <div className="background-sweep sweep-one" />
      <div className="background-sweep sweep-two" />
    </div>
  );
}

function Clock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-GB", {
      timeZone: profile.timezone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });

    const update = () => setTime(formatter.format(new Date()));
    update();
    const id = window.setInterval(update, 1000);
    return () => window.clearInterval(id);
  }, []);

  return <span>{time}</span>;
}

function Header() {
  const location = useLocation();

  return (
    <header className="site-header">
      <div className="header-side header-left">{profile.timezone}</div>

      <nav className="floating-nav" aria-label="Main navigation">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive =
            !item.external && (location.pathname === item.href || (item.href !== "/" && location.pathname.startsWith(item.href)));
          const content = (
            <>
              <Icon size={15} />
              <span>{item.label}</span>
            </>
          );

          return (
            <div className="nav-cluster" key={item.label}>
              {index === 1 ? <span className="nav-divider" /> : null}
              {item.external ? (
                <a className="nav-button" href={item.href}>
                  {content}
                </a>
              ) : (
                <Link className={`nav-button ${isActive ? "active" : ""}`} to={item.href}>
                  {content}
                </Link>
              )}
            </div>
          );
        })}
        <span className="nav-divider" />
        <ThemeToggle />
      </nav>

      <div className="header-side header-right">
        <Clock />
      </div>
    </header>
  );
}

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div>
        <span className="muted">Copyright {year} / </span>
        <span>{profile.name}</span>
      </div>
      <div className="footer-socials">
        {socials.map((social) => {
          const Icon = socialIcons[social.icon];
          return (
            <a
              key={social.label}
              className="icon-button"
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              title={social.label}
            >
              <Icon size={17} />
            </a>
          );
        })}
      </div>
    </footer>
  );
}

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="site-shell">
      <AnimatedBackground />
      <Header />
      <main className="page-main page-reveal">{children}</main>
      <Footer />
    </div>
  );
}
