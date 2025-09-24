import { useState } from "react";
import "./App.css";
import { ArrowIcon } from "./ArrowIcon";

const faqs = [
    {
        question: "What is UX design?",
        answer: "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.",
    },
    {
        question: "What are the key principles of UX design?",
        answer: "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.",
    },
    {
        question: "What is the difference between UX and UI design?",
        answer: "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.",
    },
    {
        question: "What is a wireframe?",
        answer: "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.",
    },
    {
        question: "What is user testing?",
        answer: "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.",
    },
];

function App() {
    const [selectedItem, setSelectedItem] = useState(0);

    const toggleItem = (index) => {
        setSelectedItem(selectedItem === index ? null : index);
    };

    return (
        <div className="min-w-4xl bg-white p-5 space-y-6">
            <p className="font-extrabold text-[40px]">
                Frequently Asked Questions
            </p>
            <div className="max-w-3/4 mx-auto space-y-6">
                {faqs.map((faq, index) => (
                    <div key={index} className="bg-[#F9F5F2] space-y-3 p-5">
                        <button
                            className="w-full flex justify-between items-center gap-3"
                            onClick={() => toggleItem(index)}
                        >
                            <span className="font-extrabold text-[30px]">
                                {faq.question}
                            </span>
                            <span className="w-[40px] h-[40px] flex items-center justify-center border rounded-full">
                                <ArrowIcon
                                    className={`transform transition-transform duration-200
                                        ${
                                            selectedItem === index
                                                ? "rotate-180"
                                                : ""
                                        }
                                    `}
                                />
                            </span>
                        </button>
                        <div
                            className={`transition-all duration-200 ease-in-out
                                ${
                                    selectedItem === index
                                        ? "max-h-96 opacity-100"
                                        : "max-h-0 opacity-0"
                                }
                            `}
                        >
                            <p className="text-left">{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
