import { NavLink } from "react-router";

export const Header = () => {
    return (
        <div className="mb-6 sm:p-8 max-w-7xl mx-auto">
            <nav className="bg-neutral-300 px-8 py-3 sm:rounded-full w-fit mx-auto">
                <ul className="flex items-center justify-center space-x-3">
                    <li>
                        <NavLink to="/">Movies</NavLink>
                    </li>
                    <li>
                        <NavLink to="/series">TV Series</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
