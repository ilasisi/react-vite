import { useState } from "react";
import "./App.css";
import ProfileCard from "./components/ProfileCard";

const faqs = [
    {
        id: "1",
        question: "Question 1",
        answer: "Answer 1",
    },
    {
        id: "2",
        question: "Question 2",
        answer: "Answer 2",
    },
    {
        id: "3",
        question: "Question 3",
        answer: "Answer 3",
    },
];

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="space-y-3">
            <ProfileCard
                name="Musa"
                age={90}
                hobbies="Playing games, hanging out etc"
            />
            <ProfileCard name="James" age="50" hobbies="No hobbies" />
            <p className="text-3xl font-bold">{count}</p>
            <div className="space-x-6">
                <button onClick={() => setCount(count + 1)}>
                    Increase count
                </button>
                <button onClick={() => setCount(count - 1)}>
                    Decrease count
                </button>
            </div>
            <div className="space-y-3">
                {faqs.map((faq) => (
                    <div key={faq.id} className="bg-white p-3 rounded-lg">
                        <p className="font-bold">{faq.question}</p>
                        <p className="hidden">{faq.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
