const intl = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
});

export function formatDate(date: Date | string): string {
  return intl.format(typeof date === "string" ? new Date(date) : date);
}
