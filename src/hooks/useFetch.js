import axios from "axios";
import { useEffect, useState } from "react";

const BASE_URL = "https://api.themoviedb.org/3";

export const useFetch = (path) => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    const fetchData = () => {
        setIsLoading(true);

        axios(`${BASE_URL}/${path}`, {
            headers: {
                Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`,
            },
        })
            .then((response) => {
                setData(response.data);

                setError(null);
            })
            .catch((error) =>
                setError(error.response.data.status_message ?? error.message)
            )
            .finally(() => setIsLoading(false));
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { isLoading, data, error, fetchData };
};
