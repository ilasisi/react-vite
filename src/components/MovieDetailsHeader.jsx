import { Link } from "react-router";
import { getImageLink } from "../utils";

export const MovieDetailsHeader = ({ movie }) => {
    return (
        <div
            className="bg-no-repeat sm:bg-cover bg-top"
            style={{
                backgroundImage: `url(${getImageLink(movie.backdrop_path)})`,
            }}
        >
            <div className="bg-neutral-900/90">
                <div className="p-5 max-w-7xl mx-auto">
                    <div className="mb-5">
                        <Link
                            to="/"
                            className="border text-white px-3 py-1 rounded-full border-neutral-200"
                        >
                            Go Back
                        </Link>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-8">
                        <img
                            src={getImageLink(movie.poster_path)}
                            className="w-32 sm:w-[300px] sm:h-[500px] rounded-2xl shadow-xl shadow-black"
                        />
                        <div className="font-bold mt-3 sm:mt-0 text-white space-y-5">
                            <p className="text-2xl">{movie.original_title}</p>
                            <div className="space-y-2">
                                <p className="text-sm text-neutral-300">
                                    Overview
                                </p>
                                <p className="md:text-lg text-neutral-100">
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
