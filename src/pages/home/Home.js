import React, { useState, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import MovieList from "../../components/movieList/movieList";

const Home = () => {
	const [popularMovies, setPopularMovies] = useState([]);

	// const completeApiUrl = "https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1";

	const apiUrl = "https://api.themoviedb.org/3/movie/popular?api_key=";
	const ApiKey = "16182d869e257de9d64ba218d107e57c";

	useEffect(() => {
		fetch(
			// "https://api.themoviedb.org/3/movie/popular?api_key=16182d869e257de9d64ba218d107e57c&language=en-US"

			`${apiUrl}${ApiKey}&language=en-US`
		)
			.then((res) => res.json())
			.then((data) => setPopularMovies(data.results));
	}, []);

	// // PAGINATION

	// const ACTIONS = {
	// 	/* ACTIONS is global no-changing variable, that's why it's written in capital. So, that it can be used anywhere, without having to create multiple local variable */
	// 	INCREMENT: "increment",
	// 	DECREMENT: "decrement",
	// 	RESET: "reset",
	// };

	// function reducer(state, action) {
	// 	switch (action.type) {
	// 		case ACTIONS.INCREMENT:
	// 			return { count: state.count + 1 };
	// 		case ACTIONS.DECREMENT:
	// 			return { count: state.count - 1 };
	// 		case ACTIONS.RESET:
	// 			return { count: 1 };
	// 		default:
	// 			return state;
	// 	}
	// }

	// const [state, dispatch] = useReducer(reducer, { count: 1 });
	// // const [count, setCount] = useState(0)

	// function increment() {
	// 	dispatch({ type: ACTIONS.INCREMENT });
	// 	// setCount(prevCount => prevCount + 1)
	// }

	// function decrement() {
	// 	dispatch({ type: ACTIONS.DECREMENT });
	// 	// setCount(prevCount => prevCount - 1)
	// }

	// function reset() {
	// 	dispatch({ type: ACTIONS.RESET });
	// }

	return (
		<>
			<div className="poster">
				<Carousel
					showThumbs={false}
					autoPlay={true}
					transitiontime={3}
					infiniteloop={true}
					showStatus={false}
				>
					{popularMovies.map((movie) => (
						<>
							<Link
								style={{ textDecoration: "none", color: "white" }}
								to={`/movie/${movie.id}`}
							>
								<div className="posterImage">
									<img
										src={`https://image.tmdb.org/t/p/original${
											movie && movie.backdrop_path
										}`}
										alt="movie_poster"
									/>
								</div>
								<div className="posterImage__overlay">
									<div className="posterImage__title">
										{movie ? movie.original_title : ""}
									</div>
									<div className="posterImage__runtime">
										{movie ? movie.release_date : ""}
										<span className="posterImage__rating">
											{movie ? movie.vote_average : ""}
											<i className="fas fa-star" />{" "}
										</span>
									</div>
									<div className="posterImage__description">
										{movie ? movie.overview : ""}
									</div>
								</div>
							</Link>
						</>
					))}
				</Carousel>
				<MovieList />

				{/* Pagination */}
				{/* <div className="paginationDiv">
					<div className="PagInterDiv">
						<button className="pagButton" onClick={decrement}>
							Prev
						</button>
						<span>{state.count}</span>
						<button className="pagButton" onClick={increment}>
							Next
						</button>
					</div>
				</div> */}
			</div>
		</>
	);
};

export default Home;
