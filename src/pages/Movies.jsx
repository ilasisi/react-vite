import { Link } from "react-router";
import { useFetch } from "../hooks/useFetch";
import { Fragment } from "react";
import { MovieCard } from "../components/MovieCard";

export const Movies = () => {
    const { data, isLoading, error, fetchData } = useFetch("discover/movie");

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-dvh">
                <p>Loading ...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center h-dvh">
                <div className="flex flex-col items-center">
                    <p className="mb-6">{error}</p>
                    <div>
                        <button
                            onClick={fetchData}
                            className="bg-blue-600 px-3 text-white text-sm py-1 rounded-full"
                        >
                            Refetch
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto">
            <div className="space-y-6 p-5 sm:p-8">
                <p className="font-bold text-4xl">Trending Movies</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-3">
                    {data.results?.map((movie, index) => (
                        <div key={index}>
                            <MovieCard movie={movie} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
