export const SITE_URL = "https://roiser-team.vercel.app";

export const absoluteUrl = (path) => new URL(path, `${SITE_URL}/`).href;

export const DEFAULT_OG_IMAGE = absoluteUrl("/og-cover.svg");
