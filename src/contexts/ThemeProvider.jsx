import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ?? "system"
    );

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else if (theme === "system") {
            const isDark = window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches;

            if (isDark) {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
        } else {
            document.documentElement.classList.remove("dark");
        }

        localStorage.setItem("theme", theme);
    }, [theme]);

    useEffect(() => {
        const mq = window.matchMedia("(prefers-color-scheme: dark)");

        const handleChange = (event) => {
            if (event.matches) {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
        };

        if (theme === "system") {
            mq.addEventListener("change", handleChange);
        }

        return () => {
            mq.removeEventListener("change", handleChange);
        };
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
