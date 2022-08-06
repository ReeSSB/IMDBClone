import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import MovieList from "./components/movieList/movieList";
import MovieDetail from "./pages/movieDetail/movieDetail";

function App() {
	return (
		<div className="App">
			{/* <h2> IMDB CLONE.</h2> */}
			<Router>
				<Header />
				<Routes>
					<Route index element={<Home />} />
					<Route path="movie/:id" element={<MovieDetail />} />
					<Route path="movies/:type" element={<MovieList />} />
					<Route path="/*" element={<h2>Error Page</h2>} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
