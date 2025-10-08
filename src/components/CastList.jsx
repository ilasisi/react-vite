import { getImageLink } from "../utils";

export const CastList = ({ casts }) => {
    return (
        <div className="space-y-3">
            <p className="font-bold text-3xl">Casts</p>
            <div className="flex overflow-x-auto gap-4">
                {casts?.map((cast, index) => (
                    <CastCard key={index} cast={cast} />
                ))}
            </div>
        </div>
    );
};

const CastCard = ({ cast }) => {
    return (
        <div className="mb-3 flex flex-col bg-white border border-neutral-300 min-w-56 max-w-56 rounded-xl overflow-hidden">
            <img
                src={
                    cast.profile_path
                        ? getImageLink(cast.profile_path)
                        : "/avatar.jpg"
                }
                className="w-full flex-1"
            />
            <div className="p-3 text-center">
                <p className="font-bold line-clamp-1">{cast.original_name}</p>
                <p className="text-sm text-neutral-500 line-clamp-1">
                    {cast.character}
                </p>
            </div>
        </div>
    );
};
