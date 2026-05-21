import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import { Container } from "@/components/layout/Container";
import { CursorTooltip } from "@/components/ui/tooltip";

const timeFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: "Asia/Manila",
  weekday: "short",
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
});

export function Footer() {
  const [philippineTime, setPhilippineTime] = useState("");

  useEffect(() => {
    const updatePhilippineTime = () =>
      setPhilippineTime(timeFormatter.format(new Date()));

    updatePhilippineTime();
    const intervalId = window.setInterval(updatePhilippineTime, 60_000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <footer className="border-t hairline mt-32">
      <Container className="py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-3">
          <Link
            to="/"
            aria-label="Roland L. Guerra home"
            className="inline-flex w-fit"
          >
            <img
              src={logo}
              alt=""
              width={1465}
              height={308}
              className="h-7 w-auto max-w-[150px]"
            />
          </Link>
          <div className="flex flex-wrap items-center gap-x-1.5 text-xs leading-relaxed text-muted-foreground md:whitespace-nowrap">
            <CursorTooltip
              content={
                philippineTime
                  ? `Current Philippine time: ${philippineTime}`
                  : "Current Philippine time"
              }
              contentClassName="text-xs"
              className="inline-flex cursor-help text-muted-foreground transition-colors hover:text-foreground"
            >
              <span>(PHT) UTC+08:00</span>
            </CursorTooltip>
            <span>· Open to Full Remote & International Opportunities</span>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-muted-foreground md:justify-end">
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
          <a
            href="https://www.behance.net/rlguerra"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors"
          >
            Behance
          </a>
          <Link to="/resume" className="hover:text-primary transition-colors">
            Resume
          </Link>
          <span>© 2026</span>
        </div>
      </Container>
    </footer>
  );
}
