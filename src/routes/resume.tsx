import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Download, ExternalLink, FileText } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { PageShell } from "@/components/layout/PageShell";

const resumeUrl = "/resume/uiuxron_resume.pdf";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Roland L. Guerra" },
      {
        name: "description",
        content:
          "View the resume of Roland L. Guerra, Product Designer and UI/UX Engineer.",
      },
      { property: "og:title", content: "Resume — Roland L. Guerra" },
      {
        property: "og:description",
        content:
          "Product Designer and UI/UX Engineer focused on practical, human-centered digital product work.",
      },
      { property: "og:url", content: "/resume" },
    ],
    links: [{ rel: "canonical", href: "/resume" }],
  }),
  component: ResumePage,
});

function ResumePage() {
  return (
    <PageShell>
      <section className="border-b hairline bg-background">
        <Container className="pt-16 pb-8 lg:pt-20 lg:pb-10">
          <Link
            to="/"
            className="motion-button inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <ArrowLeft className="size-4" />
            <span>Back home</span>
          </Link>

          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div>
              <div className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                <span className="h-px w-8 bg-foreground/40" />
                Resume
              </div>
              <h1 className="font-serif text-[clamp(2.4rem,5vw,4.75rem)] leading-[1.02] text-balance">
                Roland L. Guerra
              </h1>
              <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground text-pretty">
                Product Designer and UI/UX Engineer building clear, usable
                product systems for complex operational workflows.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="motion-button inline-flex items-center gap-2 rounded-full border hairline px-5 py-2.5 text-sm font-medium text-foreground hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span>Open PDF</span>
                <ExternalLink className="size-4" />
              </a>
              <a
                href={resumeUrl}
                download
                className="motion-button inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span>Download</span>
                <Download className="size-4" />
              </a>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-8 lg:py-10">
        <div className="overflow-hidden rounded-lg border hairline bg-secondary shadow-[0_24px_80px_-64px_var(--color-primary)]">
          <div className="flex items-center justify-between gap-4 border-b hairline bg-background/75 px-4 py-3 sm:px-5">
            <div className="flex min-w-0 items-center gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
                <FileText className="size-4" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-foreground">
                  uiuxron_resume.pdf
                </p>
                <p className="text-xs text-muted-foreground">
                  Embedded PDF preview
                </p>
              </div>
            </div>
          </div>

          <object
            data={`${resumeUrl}#view=FitH`}
            type="application/pdf"
            className="block h-[72svh] min-h-[560px] w-full bg-white"
            aria-label="Roland L. Guerra resume PDF"
          >
            <div className="flex min-h-[520px] flex-col items-center justify-center gap-4 bg-background px-6 text-center">
              <p className="max-w-md text-sm text-muted-foreground">
                This browser cannot display the embedded PDF preview.
              </p>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="motion-button inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span>Open PDF</span>
                <ExternalLink className="size-4" />
              </a>
            </div>
          </object>
        </div>
      </Container>
    </PageShell>
  );
}
