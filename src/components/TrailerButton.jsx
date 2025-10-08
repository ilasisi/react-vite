import { useState } from "react";
import { PlayIcon } from "./icons/PlayIcon";

export const TrailerButton = ({ youtubeId }) => {
    const [openTrailer, setOpenTrailer] = useState(false);

    if (!youtubeId) return;

    return (
        <div className="relative">
            <button
                onClick={() => setOpenTrailer(!openTrailer)}
                className="text-neutral-300 flex items-center gap-2"
            >
                <PlayIcon />
                <span className="text-sm text-neutral-200">Play Trailer</span>
            </button>

            {openTrailer && (
                <>
                    <div className="fixed inset-0 bg-black/70 z-40" />
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <div className="relative w-full max-w-7xl">
                            <button
                                type="button"
                                onClick={() => setOpenTrailer(false)}
                                className="absolute -top-12 right-0 sm:-right-12 sm:top-0 w-10 h-10 flex items-center justify-center rounded-full bg-white text-neutral-900 hover:bg-neutral-200 transition-colors z-10"
                            >
                                <svg
                                    className="w-4 h-4"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                            <div className="relative w-full bg-black rounded-lg overflow-hidden shadow-2xl pb-[50%]">
                                <iframe
                                    className="absolute top-0 left-0 w-full h-full"
                                    src={`https://www.youtube.com/embed/${youtubeId}`}
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};
