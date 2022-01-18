import { LAST_DATE_FOR_NASA_APOD_API } from "../api/getAPOD";

export const isValidAPODDate = (input: string) => {
  const date = new Date(input.replace(/-/g, "/"));
  return date >= LAST_DATE_FOR_NASA_APOD_API && date <= new Date();
};
