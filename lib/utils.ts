export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export const generateReceipt = () =>
  "ECO-" + Math.random().toString().slice(2, 10).toUpperCase();
