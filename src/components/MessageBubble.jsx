import { formatTime } from "../utils";

export const MessageBubble = ({ message, timestamp, sender }) => {
    return (
        <div
            className={`flex ${
                sender === "user" ? "justify-end" : "justify-start"
            }`}
        >
            <div
                className={`max-w-2/3 px-4 py-1.5 rounded-lg ${
                    sender === "user"
                        ? "bg-blue-600 text-white"
                        : "bg-neutral-200 text-neutral-900"
                }`}
            >
                <p className="text-sm">{message}</p>
                <p className="text-xs">{formatTime(timestamp)}</p>
            </div>
        </div>
    );
};
