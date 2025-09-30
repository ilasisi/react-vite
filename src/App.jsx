import { useState } from "react";
import "./App.css";

function App() {
    const [data, setData] = useState({
        name: "",
        accept: false,
        gender: "",
        category: "",
        bio: "",
    });

    const handleChange = (e) => {
        const { type, name, value, checked } = e.target;

        setData({ ...data, [name]: type === "checkbox" ? checked : value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={data.name}
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="Enter your name"
                required
            />
            <br />
            <input
                checked={data.accept}
                type="checkbox"
                name="accept"
                id="accept"
                onChange={handleChange}
            />
            <label htmlFor="accept">Accept?</label>
            <br />
            <label>
                <input
                    value={"Male"}
                    type="radio"
                    name="gender"
                    onChange={handleChange}
                />
                Male
            </label>
            <label>
                <input
                    defaultChecked
                    value={"Female"}
                    type="radio"
                    name="gender"
                    onChange={handleChange}
                />
                Female
            </label>
            <br />
            <select
                value={data.category}
                name="category"
                onChange={handleChange}
            >
                <option>Residential</option>
                <option>Hospital</option>
                <option>Factory</option>
            </select>
            <br />
            <textarea name="bio" value={data.bio} onChange={handleChange} />
            <button className="block">Submit</button>
        </form>
    );
}

export default App;
