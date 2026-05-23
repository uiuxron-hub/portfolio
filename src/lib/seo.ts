const configuredSiteUrl = import.meta.env.VITE_SITE_URL?.replace(/\/$/, "");

export const siteUrl = configuredSiteUrl || "";

export function absoluteUrl(path: string) {
  if (!siteUrl) {
    return path;
  }

  return new URL(path, `${siteUrl}/`).toString();
}
