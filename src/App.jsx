import { useEffect, useRef, useState } from "react";
import "./App.css";
import { MessageBubble } from "./components/MessageBubble";
import { autoReplies } from "./utils";

//useRef
//useEffect

function App() {
    const endOfChatRef = useRef(null);
    const [message, setMessage] = useState("");
    const [conversations, setConversations] = useState([
        {
            sender: "bot",
            text: "Hello Champs! How may I help you today?",
            timestamp: new Date(),
        },
    ]);

    const sendMessage = () => {
        if (message.length === 0) return;

        const newMessage = {
            sender: "user",
            text: message,
            timestamp: new Date(),
        };

        setConversations((prev) => [...prev, newMessage]);
        setMessage("");

        setTimeout(() => {
            const botMessage = {
                sender: "bot",
                text: autoReplies[
                    Math.floor(Math.random() * autoReplies.length)
                ],
                timestamp: new Date(),
            };

            setConversations((prev) => [...prev, botMessage]);
        }, 2000);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            sendMessage();
        }
    };

    useEffect(() => {
        endOfChatRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [conversations]);

    return (
        <div className="bg-white w-full h-screen sm:w-[500px] sm:h-[500px] rounded-3xl overflow-hidden flex flex-col shadow-lg shadow-gray-200 border border-gray-300">
            <div className="bg-amber-600 px-5 py-4">
                <h1 className="text-3xl text-white text-center">
                    NotZero Chat Room
                </h1>
            </div>
            <div className="flex-1 space-y-3 p-5 overflow-y-auto">
                {conversations.map((conversation, index) => (
                    <MessageBubble
                        key={index}
                        message={conversation.text}
                        timestamp={conversation.timestamp}
                        sender={conversation.sender}
                    />
                ))}
                <div ref={endOfChatRef}></div>
            </div>
            <div className="p-5 flex justify-around border-t border-gray-200 gap-3">
                <input
                    placeholder="Start typing ..."
                    name="message"
                    className="flex-1 border border-gray-300 p-4 rounded-3xl"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <button
                    className="bg-blue-600 cursor-pointer text-white border-none rounded-3xl py-3 px-8"
                    onClick={sendMessage}
                >
                    Send
                </button>
            </div>
        </div>
    );
}

export default App;
