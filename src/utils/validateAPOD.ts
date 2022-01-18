import { APOD } from "spacestagram-types";

export const isAPOD = (object: unknown): object is APOD => {
  return (
    typeof (object as Record<string, unknown>)["date"] === "string" &&
    typeof (object as Record<string, unknown>)["explanation"] === "string" &&
    ((object as Record<string, unknown>)["media_type"] === "image" ||
      (object as Record<string, unknown>)["media_type"] === "video") &&
    typeof (object as Record<string, unknown>)["title"] === "string" &&
    typeof (object as Record<string, unknown>)["date"] === "string" &&
    typeof (object as Record<string, unknown>)["url"] === "string" &&
    ((object as Record<string, unknown>)["media_type"] === "video"
      ? typeof (object as Record<string, unknown>)["thumbnail_url"] === "string"
      : true)
  );
};

export const isAPODArray = (array: unknown): array is APOD[] => {
  if (!Array.isArray(array)) {
    return false;
  }
  for (let i = 0; i < array.length; i++) {
    const object = array[i];
    if (!isAPOD(object)) {
      return false;
    }
  }
  return true;
};
