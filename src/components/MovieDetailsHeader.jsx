import { Link } from "react-router";
import { formatMinutes, getImageLink } from "../utils";
import { BookMarkIcon } from "./icons/BookMarkIcon";
import { HeartIcon } from "./icons/HeartIcon";
import { TrailerButton } from "./TrailerButton";

export const MovieDetailsHeader = ({ movie }) => {
    const releaseDate = new Date(movie.release_date);
    const originalCountry = movie.origin_country?.[0] ?? "N/A";
    const videos = movie.videos?.results;
    const youtubeVideos = videos?.filter((x) => x.site === "YouTube");
    const trailer = youtubeVideos?.filter((x) => x.type === "Trailer")?.[0];

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
                            <div className="space-y-3">
                                <p className="text-4xl">{`${
                                    movie.original_title
                                } (${releaseDate.getFullYear()})`}</p>
                                <div className="flex text-sm text-neutral-300 items-center gap-3">
                                    <p>{releaseDate.toLocaleDateString()}</p>
                                    <span className="w-1.5 h-1.5 bg-neutral-300 rounded-full"></span>
                                    <p>{originalCountry}</p>
                                    <span className="w-1.5 h-1.5 bg-neutral-300 rounded-full"></span>
                                    <p>{formatMinutes(movie.runtime)}</p>
                                </div>
                            </div>
                            <p className="italic text-neutral-300 text-sm">
                                {movie.tagline}
                            </p>
                            <div className="space-y-2">
                                <p className="text-sm text-neutral-300">
                                    Overview
                                </p>
                                <p className="md:text-lg text-neutral-100">
                                    {movie.overview}
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="flex justify-center text-green-600 text-xs items-center rounded-full w-10 h-10 border border-green-500">
                                    {Math.round(movie.vote_average * 10)}%
                                </div>
                                <button className="flex justify-center text-xs items-center rounded-full w-10 h-10 border text-neutral-300 border-neutral-300">
                                    <BookMarkIcon />
                                </button>
                                <button className="flex justify-center text-xs items-center rounded-full w-10 h-10 border text-neutral-300 border-neutral-300">
                                    <HeartIcon />
                                </button>
                                <TrailerButton youtubeId={trailer?.key} />
                            </div>
                            <div className="space-y-2">
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
                            <TopCrew crews={movie.credits?.crew} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const TopCrew = ({ crews }) => {
    const groupedCrew = crews?.reduce((acc, current) => {
        const existing = acc.find((item) => item.id === current.id);
        if (existing) {
            if (!existing.jobs.includes(current.job)) {
                existing.jobs.push(current.job);
            }
        } else {
            acc.push({
                ...current,
                jobs: [current.job],
            });
        }
        return acc;
    }, []);

    const sortedCrew = groupedCrew
        ?.sort((a, b) => b.popularity - a.popularity)
        .slice(0, 6);

    return (
        <div className="flex flex-wrap items-center gap-8">
            {sortedCrew?.map((crew, index) => (
                <div key={index}>
                    <p className="text-neutral-200">{crew.original_name}</p>
                    <p className="text-xs text-neutral-300">
                        {crew.jobs.slice(0, 2).join(", ")}
                    </p>
                </div>
            ))}
        </div>
    );
};
