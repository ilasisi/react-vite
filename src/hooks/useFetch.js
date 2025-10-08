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
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZGE0NzBjOTM1Y2Y0NTk1NWNmMmI0YjBhZTRhOTg1OCIsIm5iZiI6MTY4NDA0NzMzOC4yMDIsInN1YiI6IjY0NjA4NWVhOGM0NGI5MDE3MDZlZjM5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SxmR0Mkfsokur-UFwfxibgEjB5J-Yw-VdS1AtqVJV1E",
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
