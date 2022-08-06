import React, { useState, useEffect } from "react";
import "./movieList.css";
import Card from "../card/Card.js";
import { useParams } from "react-router-dom";

const MovieList = () => {
	const [movieList, setMovieList] = useState([]);
	const { type } = useParams();

	useEffect(() => {
		getData();
	}, []);

	useEffect(() => {
		getData();
	}, [type]);

	// const completeApiUrl = "https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1";
	const apiUrl = `https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=`;
	const ApiKey = "16182d869e257de9d64ba218d107e57c";

	const getData = () => {
		fetch(
			// "https://api.themoviedb.org/3/movie/popular?api_key=16182d869e257de9d64ba218d107e57c&language=en-US"

			`${apiUrl}${ApiKey}&language=en-US&page=1`
		)
			.then((res) => res.json())
			.then((data) => setMovieList(data.results));
	};

	return (
		<>
			<div className="movie__list">
				<h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
				<div className="list__cards">
					{movieList.map((movie, i) => (
						<Card key={i} movie={movie} />
					))}
				</div>
			</div>
		</>
	);
};

export default MovieList;
