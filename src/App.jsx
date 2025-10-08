import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router";
import "./App.css";
import { Home } from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PostDetails from "./pages/PostDetails";
import CompanyHeader from "./pages/CompanyHeader";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <div>
            <BrowserRouter>
                <nav className="mb-6">
                    <ul className="flex items-center justify-center space-x-3">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/company/about">About Us</NavLink>
                        </li>
                        <li>
                            <NavLink to="/company/contact">Contact Us</NavLink>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="company" element={<CompanyHeader />}>
                        <Route path="about" element={<About />} />
                        <Route path="contact" element={<Contact />} />
                    </Route>
                    <Route path="/posts/:id" element={<PostDetails />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
