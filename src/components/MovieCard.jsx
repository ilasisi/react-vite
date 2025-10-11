import { Link } from "react-router";
import { getImageLink } from "../utils";

export const MovieCard = ({ movie }) => {
    return (
        <Link to={`/movies/${movie.id}`}>
            <div className="bg-white rounded-2xl group overflow-hidden border border-neutral-300 hover:shadow dark:bg-slate-800 dark:border-slate-700">
                <img
                    src={getImageLink(movie.poster_path)}
                    className="h-96 w-full"
                />
                <div className="p-5">
                    <p className="font-bold group-hover:underline group-hover:text-green-600 text-lg line-clamp-1">
                        {movie.original_title}
                    </p>
                    <div className="flex justify-between gap-3 items-center">
                        <p className="text-neutral-600 dark:text-neutral-300">
                            {new Date(movie.release_date).toLocaleDateString(
                                "en-US",
                                {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                }
                            )}
                        </p>
                        <span className="w-8 h-8 bg-green-600 text-white font-bold rounded-full flex justify-center items-center">
                            {Math.round(movie.vote_average * 10)}
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
};
