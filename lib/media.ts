import fs from "node:fs";
import path from "node:path";

const IMAGES_DIR = path.join(process.cwd(), "public", "images");

/**
 * Resolves the Vision 2030 logo: prefers the trimmed canonical copy, but
 * falls back to scanning public/images for any "vision 2030" file so a
 * fresh drop-in still upgrades itself without a code change.
 */
export function findVisionLogo(): string | null {
  const canonical = path.join(IMAGES_DIR, "vision-2030-logo.png");
  if (fs.existsSync(canonical)) return "/images/vision-2030-logo.png";

  let files: string[] = [];
  try {
    files = fs.readdirSync(IMAGES_DIR);
  } catch {
    return null;
  }
  const match = files.find((file) => /vision.?2030|2030.?vision/i.test(file));
  return match ? `/images/${encodeURIComponent(match)}` : null;
}
