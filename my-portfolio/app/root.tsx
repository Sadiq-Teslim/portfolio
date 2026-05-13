import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "react-router-dom";

import { profile, projects, seoImage, siteUrl, socials } from "~/data/profile";
import "./app.css";

export function links() {
  return [
    { rel: "icon", type: "image/png", href: "/favicon-96x96.png", sizes: "96x96" },
    { rel: "shortcut icon", href: "/favicon.ico" },
    { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
    { rel: "manifest", href: "/site.webmanifest" },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Geist:wght@400;450;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap",
    },
  ];
}

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Teslim Adetola Sadiq",
    alternateName: profile.name,
    url: siteUrl,
    image: seoImage,
    jobTitle: profile.role,
    email: `mailto:${profile.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
    knowsAbout: [
      "Software Engineering",
      "Backend Architecture",
      "API Design",
      "Distributed Systems",
      "TypeScript",
      "Node.js",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "MongoDB",
      "Redis",
    ],
    sameAs: socials.filter((social) => social.icon !== "mail").map((social) => social.href),
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Teslim Sadiq",
    url: siteUrl,
    description:
      "Portfolio of Teslim Sadiq, a Software Engineer building scalable systems, APIs, data platforms, and product interfaces.",
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Selected software engineering projects",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareSourceCode",
        name: project.title,
        description: project.description,
        url: project.href ?? `${siteUrl}/work`,
        programmingLanguage: project.stack,
      },
    })),
  },
];

export default function Root() {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#070707" />
        <meta name="application-name" content="Teslim Sadiq" />
        <meta name="apple-mobile-web-app-title" content="Teslim Sadiq" />
        <meta name="format-detection" content="telephone=no" />
        <Meta />
        <Links />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        {process.env.NODE_ENV === "production" && (
          <>
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-MMLPZY4KL2"
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-MMLPZY4KL2');
                `,
              }}
            />
          </>
        )}
        <Scripts />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);

  return (
    <html lang="en">
      <head>
        <title>Error | Teslim Sadiq</title>
        <Meta />
        <Links />
      </head>
      <body>
        <div className="px-4 text-center">
          <h1 className="mb-2 text-2xl font-medium">Something went wrong</h1>
          {isRouteErrorResponse(error) ? (
            <p className="muted">
              {error.status} - {error.statusText}
            </p>
          ) : (
            <p className="muted">
              {error instanceof Error ? error.message : "An unexpected error occurred"}
            </p>
          )}
          <a
            href="/"
            className="mt-6 inline-flex text-muted underline decoration-white/20 underline-offset-[5px] transition-colors hover:text-accent hover:decoration-accent/60"
          >
            Go back home
          </a>
        </div>
        <Scripts />
      </body>
    </html>
  );
}
