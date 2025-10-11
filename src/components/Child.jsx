import { useContext } from "react";
import { NameContext } from "../contexts/nameContext";
import { ThemeContext } from "../contexts/ThemeProvider";

export const Child = () => {
    const { name } = useContext(NameContext);
    const { theme } = useContext(ThemeContext);

    return (
        <div className="border p-3">
            Child
            <p>this is the name {name}</p>
            <p>Theme: {theme}</p>
        </div>
    );
};
