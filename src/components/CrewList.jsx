import { getImageLink } from "../utils";

export const CrewList = ({ crews }) => {
    return (
        <div className="space-y-3">
            <p className="font-bold text-3xl">Crew Member</p>
            <div className="flex overflow-x-auto gap-4">
                {crews?.map((crew, index) => (
                    <CrewMemberCard key={index} crew={crew} />
                ))}
            </div>
        </div>
    );
};

const CrewMemberCard = ({ crew }) => {
    return (
        <div className="bg-white border border-neutral-300 min-w-56 max-w-56 rounded-xl overflow-hidden">
            <img
                src={
                    crew.profile_path
                        ? getImageLink(crew.profile_path)
                        : "https://picsum.photos/200/300"
                }
                className="w-full"
            />
            <div className="p-3 text-center">
                <p className="font-bold line-clamp-1">{crew.original_name}</p>
                <p className="text-sm text-neutral-500 line-clamp-1">
                    {crew.job}
                </p>
            </div>
        </div>
    );
};
