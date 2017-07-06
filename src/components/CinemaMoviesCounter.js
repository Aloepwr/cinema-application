import { Component } from 'react'

import { CinemaMoviesList } from './CinemaMoviesList'


export class CinemaMoviesCounter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			allMoviesList: [
				{
					cinema: "Silver Screen",
					date: new Date("1/2/2017"),
					action: true,
					comedy: false
				},
				{
					cinema: "Belarus",
					date: new Date("4/16/2017"),
					action: false,
					comedy: true
				},
				{
					cinema: "Salut",
					date: new Date("6/12/2017"),
					action: true,
					comedy: false
				}
			]
		}
	}
	countMovies(filter) {
		const {allMoviesList} = this.state;

		return allMoviesList.filter(
			(movie) => (filter) ? movie[filter] : movie
		).length;
	}
	render() {
		return (
			<div>
				<CinemaMoviesList movies={this.state.allMoviesList}
								  filter={this.props.match.params.filter}
				/>
			</div>
		)
	}
}