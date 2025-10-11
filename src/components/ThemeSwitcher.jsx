import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeProvider";

export const ThemeSwitcher = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const handleToggle = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };
    return <button onClick={handleToggle}>Toggle</button>;
};
