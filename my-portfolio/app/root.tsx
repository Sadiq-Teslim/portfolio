import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "react-router-dom";

import "./app.css";

export function links() {
  return [
    { rel: "canonical", href: "https://teslimcodes.tech" },
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

export default function Root() {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <Meta />
        <Links />
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
