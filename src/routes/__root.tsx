import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useLocation,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useRef } from "react";

import { CustomCursor } from "@/components/site/CustomCursor";
import logo from "@/assets/logo.png";
import heroBanner from "@/assets/hero-banner.png";
import { absoluteUrl } from "@/lib/seo";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Page not found
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back
          home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    head: () => ({
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { title: "Roland L. Guerra — Product Designer & UI/UX Engineer" },
        {
          name: "description",
          content:
            "Product designer focused on intuitive systems, scalable workflows, and human-centered digital experiences.",
        },
        { name: "author", content: "Roland L. Guerra" },
        { property: "og:site_name", content: "Roland L. Guerra" },
        { property: "og:type", content: "website" },
        { property: "og:image", content: absoluteUrl(heroBanner) },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "Roland L. Guerra — Product Designer & UI/UX Engineer",
        },
        {
          name: "twitter:description",
          content:
            "Product designer focused on intuitive systems, scalable workflows, and human-centered digital experiences.",
        },
        { name: "twitter:image", content: absoluteUrl(heroBanner) },
        { name: "theme-color", content: "#f6f1eb" },
      ],
      links: [
        {
          rel: "stylesheet",
          href: appCss,
        },
        { rel: "icon", type: "image/png", href: logo },
        { rel: "apple-touch-icon", href: logo },
      ],
    }),
    shellComponent: RootShell,
    component: RootComponent,
    notFoundComponent: NotFoundComponent,
    errorComponent: ErrorComponent,
  },
);

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "if('scrollRestoration' in history){history.scrollRestoration='auto';}",
          }}
        />
      </head>
      <body>
        {children}
        <CustomCursor />
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <ScrollManager />
      <Outlet />
    </QueryClientProvider>
  );
}

function ScrollManager() {
  const location = useLocation();
  const isInitialLoad = useRef(true);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "auto";
    }

    if (location.hash) {
      requestAnimationFrame(() => {
        const prefersReducedMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;

        document
          .getElementById(location.hash.replace(/^#/, ""))
          ?.scrollIntoView({
            behavior: prefersReducedMotion ? "auto" : "smooth",
            block: "start",
          });
      });
      isInitialLoad.current = false;
      return;
    }

    if (isInitialLoad.current) {
      isInitialLoad.current = false;
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname, location.hash]);

  return null;
}
