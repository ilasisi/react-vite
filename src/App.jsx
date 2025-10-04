import { useState } from "react";
import "./App.css";
import { ContactFormSchema } from "./schemas";

// Using HTML5 validation
// Custom validation
// Using external library (recommended)

function App() {
    const [data, setData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const validationErrors = {};

        if (data.name.length === 0) {
            validationErrors.name = "Name is required";
        } else if (data.name.length < 3) {
            validationErrors.name = "Name should not be less than 3 chars";
        }

        if (data.email.length === 0) {
            validationErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
            validationErrors.email = "Please enter a valid email";
        }

        if (data.message.length === 0) {
            validationErrors.message = "Message is required";
        } else if (data.message.length < 10) {
            validationErrors.message =
                "Message should not be less than 10 chars";
        }

        setErrors(validationErrors);

        return validationErrors;
    };

    const zodValidateForm = () => {
        const validationErrors = {};

        const result = ContactFormSchema.safeParse(data);

        if (!result.success) {
            result.error.issues.forEach((error) => {
                const key = error.path[0];

                validationErrors[key] = error.message;
            });
        }

        setErrors(validationErrors);

        return validationErrors;
    };

    const handleChange = (e) => {
        const { type, name, value, checked } = e.target;

        setData({ ...data, [name]: type === "checkbox" ? checked : value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const validated = zodValidateForm();

        if (Object.keys(validated).length > 0) {
            return;
        }

        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-3" noValidate>
            <div>
                <input
                    value={data.name}
                    type="text"
                    name="name"
                    onChange={handleChange}
                    placeholder="Enter your name"
                />
                {errors.name && (
                    <span className="text-red-500 text-sm">{errors.name}</span>
                )}
            </div>
            <div>
                <input
                    value={data.email}
                    type="email"
                    name="email"
                    onChange={handleChange}
                    placeholder="Enter your email"
                />
                {errors.email && (
                    <span className="text-red-500 text-sm">{errors.email}</span>
                )}
            </div>
            <div>
                <textarea
                    name="message"
                    value={data.message}
                    onChange={handleChange}
                    placeholder="Enter your message"
                />
                {errors.message && (
                    <span className="text-red-500 text-sm">
                        {errors.message}
                    </span>
                )}
            </div>
            <button className="w-full">Submit</button>
        </form>
    );
}

export default App;
