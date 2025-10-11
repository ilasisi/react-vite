import { MoonIcon, MoonStar, SunIcon } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeProvider";

export const ThemeSwitcher = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        if (theme === "dark") {
            setTheme("system");
        } else if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    return (
        <button onClick={toggleTheme}>
            {theme === "dark" ? (
                <MoonIcon />
            ) : theme === "light" ? (
                <SunIcon />
            ) : (
                <MoonStar />
            )}
        </button>
    );
};
