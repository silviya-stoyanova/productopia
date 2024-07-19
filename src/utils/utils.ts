export const camelCaseToReadable = (str: string): string => {
  return str
    .replace(/([A-Z])/g, " $1")
    .toLowerCase()
    .replace(/^./, (char) => char.toUpperCase());
};
