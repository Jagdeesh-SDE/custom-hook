import { useEffect, useState } from "react";

export default function useOurOwnCustom(api) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [totalData, setTotalData] = useState([]);

  async function fetchingData() {
    try {
      const response = await fetch(api);
      const data = await response.json();
      // setIsError(true);
      setTotalData(data);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
      console.log(`error message:`, error);
    }
  }

  useEffect(() => {
    fetchingData();
  }, []);

  return { isLoading, isError, totalData };
}
