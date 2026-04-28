import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 h-14 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 transition-smooth hover:opacity-80"
            data-ocid="nav.logo_link"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle
                cx="8"
                cy="20"
                r="5"
                stroke="oklch(var(--primary))"
                strokeWidth="2"
                fill="none"
              />
              <circle
                cx="20"
                cy="20"
                r="5"
                stroke="oklch(var(--primary))"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M8 20 L13 10 L18 14 L20 20"
                stroke="oklch(var(--primary))"
                strokeWidth="2"
                strokeLinejoin="round"
                fill="none"
              />
              <circle cx="13" cy="9" r="2" fill="oklch(var(--accent))" />
            </svg>
            <span className="font-display font-semibold text-lg text-foreground tracking-tight">
              Parts<span className="text-accent">Finder</span>
            </span>
          </Link>
          <nav className="flex items-center gap-1">
            <a
              href="#search"
              className="text-sm text-muted-foreground hover:text-foreground transition-smooth px-3 py-1.5 rounded-md hover:bg-muted"
              data-ocid="nav.search_link"
            >
              Search
            </a>
            <a
              href="#products"
              className="text-sm text-muted-foreground hover:text-foreground transition-smooth px-3 py-1.5 rounded-md hover:bg-muted"
              data-ocid="nav.products_link"
            >
              Parts
            </a>
            <a
              href="#map"
              className="text-sm text-muted-foreground hover:text-foreground transition-smooth px-3 py-1.5 rounded-md hover:bg-muted"
              data-ocid="nav.map_link"
            >
              Map
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1" id="main-content">
        {children}
      </main>

      <footer className="bg-muted/40 border-t border-border py-6 mt-12">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-muted-foreground">
          <span>
            &copy; {new Date().getFullYear()} PartsFinder. Find the right part,
            fast.
          </span>
          <span>
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                typeof window !== "undefined" ? window.location.hostname : "",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground transition-smooth"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
