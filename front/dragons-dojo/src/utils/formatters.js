export function formatDate(isoDate) {
  if (!isoDate) return "-";

  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return "-";

  return date.toLocaleDateString("pt-BR"); // 06/01/2026
}

export function formatModalities(modalities) {
  if (!Array.isArray(modalities) || modalities.length === 0) return "-";

  return modalities.join(", "); // "Muay Thai, Karate, Crossfit"
}

export function normalizeText(text) {
  return String(text ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}