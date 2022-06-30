export const formatDate = (
  options: Intl.DateTimeFormatOptions,
  unformattedDate?: Date
) => {
  const date = unformattedDate ?? new Date();

  return date.toLocaleString("en-US", options);
};
