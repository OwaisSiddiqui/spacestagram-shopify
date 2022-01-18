import { useState, useEffect } from "react";
import { APOD } from "spacestagram-types";
import { isAPOD } from "../utils/validateAPOD";
import { getAPOD } from "../api/getAPOD";

const NASA_API_KEY = process.env.REACT_APP_NASA_API_KEY;
if (!NASA_API_KEY) {
  throw new Error("Could not find REACT_APP_NASA_API_KEY in .env");
}

const DEFAULT_APOD_QUERY_PARAMETERS = {
  thumbs: true,
};

interface useAPODProps {
  date: Date;
}

export const useAPOD = ({ date }: useAPODProps) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<APOD>();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    getAPOD({
      apiKey: NASA_API_KEY,
      date: date,
      thumbs: DEFAULT_APOD_QUERY_PARAMETERS.thumbs,
    })
      .then((data) => {
        if (!isAPOD(data)) {
          throw new Error("Invalid data received from NASA APOD API.");
        }
        setData(data);
      })
      .catch((error: Error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { loading, data, error };
};
