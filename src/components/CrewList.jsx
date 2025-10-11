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
        <div className="mb-3 flex flex-col bg-white border border-neutral-300 min-w-56 max-w-56 rounded-xl overflow-hidden dark:bg-slate-800 dark:border-slate-700">
            <img
                src={
                    crew.profile_path
                        ? getImageLink(crew.profile_path)
                        : "/avatar.jpg"
                }
                className="w-full flex-1"
            />
            <div className="p-3 text-center">
                <p className="font-bold line-clamp-1">{crew.original_name}</p>
                <p className="text-sm text-neutral-500 line-clamp-1 dark:text-neutral-300">
                    {crew.job}
                </p>
            </div>
        </div>
    );
};
