export const getPostLink = (date: Date) => {
  return `${window.location.origin.toString()}/post/${date.toLocaleDateString(
    "en-CA"
  )}`;
};
