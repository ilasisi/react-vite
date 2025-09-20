import { useEffect, useState } from "react";
import "./App.css";
import EmptyState from "./components/EmptyState";
import Profile from "./components/Profile";
import { ProfileCard } from "./components/ProfileCard";
const array = [
    {
        title: "Title 1",
        description: "This is first description",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-info-icon lucide-info"
            >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
            </svg>
        ),
    },
    {
        title: "Title 2",
        description: "This is second description",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-book-icon lucide-book"
            >
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
            </svg>
        ),
    },
    {
        title: "Title 3",
        description: "This is third description",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-scan-qr-code-icon lucide-scan-qr-code"
            >
                <path d="M17 12v4a1 1 0 0 1-1 1h-4" />
                <path d="M17 3h2a2 2 0 0 1 2 2v2" />
                <path d="M17 8V7" />
                <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
                <path d="M3 7V5a2 2 0 0 1 2-2h2" />
                <path d="M7 17h.01" />
                <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
                <rect x="7" y="7" width="5" height="5" rx="1" />
            </svg>
        ),
    },
];

function App() {
    const [count, setCount] = useState(0);
    const [age, setAge] = useState(20);

    const handleClick = () => {
        setCount((prev) => prev + 1);
    };

    useEffect(() => {
        console.log("Count updated!", count);
        console.log("Age updated!", age);
    }, [count, age]);

    return (
        <div className="space-y-3">
            <div className="flex gap-3">
                <ProfileCard
                    name="Musa"
                    age={100}
                    hobbies={["Swimming", "Sleeping"]}
                />
                <ProfileCard
                    name="James"
                    age={55}
                    hobbies={["Eating", "Drinking"]}
                />
            </div>
            <Profile />
            <div className="flex items-center gap-3">
                {array.map((item, index) => (
                    <EmptyState
                        key={index}
                        description={item.description}
                        title={item.title}
                        icon={item.icon}
                    />
                ))}
            </div>

            <div className="card">
                <p>{count}</p>
                <p>{age}</p>
                <button onClick={handleClick}>Increment</button>
                <button onClick={() => setAge(age + 1)}>Increment Age</button>
                <input
                    className="border"
                    onChange={(event) => console.log(event.target.value)}
                />
            </div>
        </div>
    );
}

export default App;
