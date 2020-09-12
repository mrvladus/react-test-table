import { useState, useEffect } from "react";

// Fetch data from API and set data state
const useFetch = (setData, url) => {
  // Loading and errors state
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Making request
  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch(() => {
        setHasError(true);
        setLoading(false);
      });
  }, [setData, url]);

  return [loading, hasError];
};

export default useFetch;
