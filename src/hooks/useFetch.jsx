import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = (request) => {
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const response = await axios.get(request.url, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.data[0].Status === "Success") {
      console.log(
        "City-->",
        response.data[0].PostOffice[0].District,
        ", State--->",
        response.data[0].PostOffice[0].State
      );
      // console.log(response.data[0].Status);
      setData([
        response.data[0].PostOffice[0].District,
        response.data[0].PostOffice[0].State,
      ]);
    } else {
      setError(true);
    }
  };

  return { error, data };
};
