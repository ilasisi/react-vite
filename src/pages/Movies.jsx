import { Link } from "react-router";
import { useFetch } from "../hooks/useFetch";
import { Fragment } from "react";
import { MovieCard } from "../components/MovieCard";

export const Movies = () => {
    const { data, isLoading, error } = useFetch("discover/movie");

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
        <div className="space-y-6">
            <p className="font-bold text-4xl">Trending Movies</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-3">
                {data.results?.map((movie, index) => (
                    <div key={index}>
                        <MovieCard movie={movie} />
                    </div>
                ))}
            </div>
        </div>
    );
};
