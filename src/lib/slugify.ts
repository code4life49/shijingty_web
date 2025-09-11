export function slugify(text: string, fallback: string): string {
  const raw = (text || "").toString().trim();
  if (!raw) return fallback;
  // Keep CJK characters, letters, numbers; replace spaces with dashes
  const cleaned = raw
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\p{Letter}\p{Number}\u4e00-\u9fa5\-]+/gu, "");
  return cleaned || fallback;
}
