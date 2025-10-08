import { NavLink } from "react-router";

export const Header = () => {
    return (
        <nav className="mb-6 bg-black p-5 rounded-2xl">
            <ul className="flex text-white font-bold items-center justify-center space-x-3">
                <li>
                    <NavLink to="/">Movies</NavLink>
                </li>
                <li>
                    <NavLink to="/series">TV Series</NavLink>
                </li>
            </ul>
        </nav>
    );
};
