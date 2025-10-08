import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import { Movies } from "./pages/Movies";
import NotFound from "./pages/NotFound";
import MovieDetails from "./pages/MovieDetails";
import { TVSeries } from "./pages/TVSeries";
import TVSeriesDetails from "./pages/TVSeriesDetails";
import { Header } from "./components/Header";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route index element={<Movies />} />
                    <Route path="/series" element={<TVSeries />} />
                    <Route path="/movies/:id" element={<MovieDetails />} />
                    <Route path="/series/:id" element={<TVSeriesDetails />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
