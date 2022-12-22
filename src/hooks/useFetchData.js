import { useState, useEffect } from "react";

const useFetchData = (dataSource) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetch(dataSource);
        const result = await data.json();
        if (result) {
          setLoading(false);
          setData(result);
        }
      } catch (error) {
        setLoading(false);
        setError(error.message);
        console.log(error.message);
      }
    }
    fetchData();
  }, [dataSource]);
  return [loading, error, data];
};

export default useFetchData;
