import { useParams } from "react-router";
import { useFetch } from "../hooks/useFetch";
import { getImageLink } from "../utils";

const MovieDetails = () => {
    const { id } = useParams();

    const {
        data: movie,
        isLoading,
        error,
    } = useFetch(`movie/${id}?append_to_response=casts,keywords`);

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
            <div
                style={{
                    backgroundImage: `url(${getImageLink(
                        movie.backdrop_path
                    )})`,
                }}
            >
                <div className="bg-black/80">
                    <div className="flex p-5 gap-8">
                        <img
                            src={getImageLink(movie.poster_path)}
                            className="w-60 border-4 border-white h-40"
                        />
                        <div className="font-bold text-white space-y-5">
                            <p className="text-2xl">{movie.original_title}</p>
                            <div className="space-y-2">
                                <p className="text-sm text-neutral-300">
                                    Overview
                                </p>
                                <p className="text-lg text-neutral-200">
                                    {movie.overview}
                                </p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-sm text-neutral-300">
                                    Genre(s)
                                </p>
                                <div className="inline-flex gap-3">
                                    {movie.genres?.map((genre, index) => (
                                        <span
                                            className="border rounded-2xl text-sm  px-3 py-1 border-neutral-300"
                                            key={index}
                                        >
                                            {genre.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
