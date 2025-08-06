import React from 'react';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError, // This hook is used to get error details
  isRouteErrorResponse,
} from 'react-router-dom'; // CORRECT: Import from react-router-dom

import './app.css'; // Your global stylesheet

// You can keep your links function for fonts
export function links() {
  return [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap",
    },
  ];
}

// This is the main layout for your entire application
export default function Root() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet /> {/* This is where your routes (like home.tsx) will be rendered */}
        
        <ScrollRestoration />

        {/* This is the correct way to add Google Analytics */}
        {process.env.NODE_ENV === 'production' && (
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

// This is the correct ErrorBoundary for your project setup
export function ErrorBoundary() {
  const error = useRouteError();
  console.error(error); // Log the error to the console for debugging

  return (
    <html lang="en">
      <head>
        <title>Oops!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <div>
          <h1>An Error Occurred!</h1>
          {isRouteErrorResponse(error) ? (
            <p>
              {error.status} {error.statusText}
            </p>
          ) : (
            <p>{error instanceof Error ? error.message : 'Unknown Error'}</p>
          )}
        </div>
        <Scripts />
      </body>
    </html>
  );
}