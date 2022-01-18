import { useState, useEffect } from "react";
import { APOD } from "spacestagram-types";
import { isAPODArray } from "../utils/validateAPOD";
import { getAPOD } from "../api/getAPOD";
import { LAST_DATE_FOR_NASA_APOD_API } from "../api/getAPOD";

const NASA_API_KEY = process.env.REACT_APP_NASA_API_KEY;
if (!NASA_API_KEY) {
  throw new Error("Could not find REACT_APP_NASA_API_KEY in .env");
}

const INCREMENT_NUMBER_OF_POSTS = 5;

const DEFAULT_APOD_QUERY_PARAMETERS = {
  thumbs: true,
};

interface useAPODProps {
  fetchMore: boolean;
}

export const useAPODArray = ({ fetchMore }: useAPODProps) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<APOD[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [lastDate, setLastDate] = useState(new Date()); // has to be a date after LAST_DATE_FOR_NASA_APOD_API
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setLoading(true);
    setError(null);
    const lastDateTemp = new Date(lastDate);
    let startDate = new Date(
      lastDateTemp.setDate(
        lastDateTemp.getDate() - INCREMENT_NUMBER_OF_POSTS + 1
      )
    );
    if (startDate <= LAST_DATE_FOR_NASA_APOD_API) {
      startDate = LAST_DATE_FOR_NASA_APOD_API;
      setHasMore(false);
      setLoading(false);
    }
    getAPOD({
      apiKey: NASA_API_KEY,
      startDate: startDate,
      endDate: lastDate,
      thumbs: DEFAULT_APOD_QUERY_PARAMETERS.thumbs,
    })
      .then((data) => {
        if (!isAPODArray(data)) {
          throw new Error("Invalid data received from NASA APOD API.");
        }
        data.reverse();
        setData((prevData) => [...prevData, ...data]);
        let newLastDate = new Date(startDate.setDate(startDate.getDate() - 1)); // since start_date is inclusive, therefore lastDate should start from one less day from the previous
        if (newLastDate < LAST_DATE_FOR_NASA_APOD_API) {
          newLastDate = LAST_DATE_FOR_NASA_APOD_API;
        }
        setLastDate(newLastDate);
      })
      .catch((error: Error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [fetchMore]);

  return { loading, data, error, hasMore };
};
