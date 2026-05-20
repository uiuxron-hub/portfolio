import type { ReactNode } from "react";
import { Footer } from "@/components/site/Footer";
import { Nav } from "@/components/site/Nav";

export function PageShell({
  children,
  mainClassName = "pt-16",
}: {
  children: ReactNode;
  mainClassName?: string;
}) {
  return (
    <div className="relative min-h-screen">
      <Nav />
      <main className={mainClassName}>{children}</main>
      <Footer />
    </div>
  );
}
