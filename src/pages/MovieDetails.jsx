import { Link, useParams } from "react-router";
import { useFetch } from "../hooks/useFetch";
import { getImageLink } from "../utils";
import { MovieDetailsHeader } from "../components/MovieDetailsHeader";
import { CrewList } from "../components/CrewList";
import { CastList } from "../components/CastList";

const MovieDetails = () => {
    const { id } = useParams();

    const {
        data: movie,
        isLoading,
        error,
        fetchData,
    } = useFetch(`movie/${id}?append_to_response=credits,keywords,videos`);

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
        <div>
            <MovieDetailsHeader movie={movie} />
            <div className="p-5 mx-auto max-w-7xl space-y-6">
                <CrewList crews={movie?.credits?.crew ?? []} />
                <CastList casts={movie?.credits?.cast ?? []} />
            </div>
        </div>
    );
};

export default MovieDetails;
