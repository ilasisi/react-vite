import { Link } from "react-router";
import { useFetch } from "../hooks/useFetch";

export const TVSeries = () => {
    const { data, isLoading, error } = useFetch("discover/tv");

    if (isLoading) {
        return (
            <div>
                <p>Loading ...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div>
                <p>{error}</p>
            </div>
        );
    }

    return (
        <div>
            <p className="font-bold text-4xl">Trending TV Series</p>
            {data.results?.map((movie, index) => (
                <div key={index}>
                    <Link to={`/series/${movie.id}`}>
                        {movie.original_name}
                    </Link>
                </div>
            ))}
        </div>
    );
};
