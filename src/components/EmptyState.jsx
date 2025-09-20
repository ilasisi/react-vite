const EmptyState = ({ title, description, icon }) => {
    return (
        <div className="bg-white p-5 rounded-2xl flex items-center flex-col space-y-2">
            <span>{icon}</span>
            <p className="font-bold text-2xl">{title}</p>
            <p className="text-neutral-500">{description}</p>
        </div>
    );
};

export default EmptyState;
