export const formatDate = (options: Intl.DateTimeFormatOptions) => {
  const date = new Date();

  return date.toLocaleString("en-US", options);
};
