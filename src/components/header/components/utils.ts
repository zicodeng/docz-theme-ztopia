export const highlightQuery = (
  query: string,
  text: string,
  color: string,
): string => {
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx < 0) {
    if (query.length == 1) {
      return text;
    }
    // Try using the first query character to search and highlight
    const firstChar = query[0];
    return highlightQuery(firstChar, text, color);
  }
  return idx < 0
    ? text
    : text.substring(0, idx) +
        `<span style="color: ${color}">${text.substring(
          idx,
          idx + query.length,
        )}</span>` +
        text.substring(idx + query.length);
};
