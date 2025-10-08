import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    const fetchData = () => {
        setIsLoading(true);

        axios(url)
            .then((response) => {
                setData(response.data);

                setError(null);
            })
            .catch((error) => setError(error.message))
            .finally(() => setIsLoading(false));
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { isLoading, data, error, fetchData };
};
