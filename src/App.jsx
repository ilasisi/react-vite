import { useState } from "react";
import "./App.css";

function App() {
    const [message, setMessage] = useState("");

    const sendMessage = () => {
        if (message.length === 0) return;

        console.log(message);
        setMessage("");
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            sendMessage();
        }
    };

    return (
        <div className="bg-white w-full h-screen sm:w-[500px] sm:h-[500px] rounded-3xl overflow-hidden flex flex-col shadow-lg shadow-gray-200 border border-gray-300">
            <div className="bg-amber-600 px-5 py-4">
                <h1 className="text-3xl text-white text-center">
                    NotZero Chat Room
                </h1>
            </div>
            <div className="flex-1"></div>
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
