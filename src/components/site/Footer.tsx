import { Link } from "@tanstack/react-router";
import { Container } from "@/components/layout/Container";

export function Footer() {
  return (
    <footer className="border-t hairline mt-32">
      <Container className="py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1">
          <p className="text-sm font-medium">Roland L. Guerra</p>
          <p className="text-xs text-muted-foreground">
            Product Designer · UI/UX Engineer · Remote
          </p>
        </div>
        <div className="flex items-center gap-6 text-xs text-muted-foreground">
          <a
            href="mailto:uiuxron@gmail.com"
            className="hover:text-primary transition-colors"
          >
            uiuxron@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/rlguerra/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <Link
            to="/resume"
            className="hover:text-primary transition-colors"
          >
            Resume
          </Link>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </Container>
    </footer>
  );
}
