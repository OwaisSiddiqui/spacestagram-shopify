import { APOD, GetAPODParameters } from "spacestagram-types";

const NASA_APOD_API_BASE_URL = "https://api.nasa.gov/planetary/apod";

// According to NASA APOD API: Any dates must be between Jun 16, 1995 and today's date.
export const LAST_DATE_FOR_NASA_APOD_API = new Date("06/16/1995");

const getAPODParametersToAPODQueryParameters = {
  apiKey: "api_key",
  date: "date",
  startDate: "start_date",
  endDate: "end_date",
  thumbs: "thumbs",
};

export const getAPOD = async ({
  apiKey,
  date,
  startDate,
  endDate,
  thumbs,
}: GetAPODParameters): Promise<APOD | APOD[]> => {
  const apodURL = new URL(NASA_APOD_API_BASE_URL);
  apodURL.searchParams.append(
    getAPODParametersToAPODQueryParameters.apiKey,
    apiKey
  );

  if (!date && startDate && endDate) {
    apodURL.searchParams.append(
      getAPODParametersToAPODQueryParameters.startDate,
      startDate.toLocaleDateString("en-CA")
    );
    apodURL.searchParams.append(
      getAPODParametersToAPODQueryParameters.endDate,
      endDate.toLocaleDateString("en-CA")
    );
  } else if (date) {
    apodURL.searchParams.append(
      getAPODParametersToAPODQueryParameters.date,
      date.toLocaleDateString("en-CA")
    );
  } else {
    throw new Error(
      `Need to provide either date or both startDate and endDate.`
    );
  }

  apodURL.searchParams.append(
    getAPODParametersToAPODQueryParameters.thumbs,
    thumbs ? "True" : "False"
  );

  let responseStatus = 200;

  return fetch(apodURL.toString())
    .then((response) => {
      responseStatus = response.status;
      return response.json();
    })
    .then((data) => {
      if (responseStatus == 200) {
        return data;
      } else {
        throw new Error(
          `Error: ${
            data.msg ?? "Could not load data from NASA APOD API"
          }. Code: ${responseStatus}`
        );
      }
    });
};
