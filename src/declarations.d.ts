declare module "spacestagram-types" {
  export interface APOD {
    date: string;
    explanation: string;
    media_type: "image" | "video";
    title: string;
    url: string;
    thumbnail_url?: string;
  }

  export interface GetAPODParameters {
    apiKey: string;
    startDate?: Date;
    endDate?: Date;
    thumbs: boolean;
    date?: Date;
  }

  export type PostI = APOD;
}
