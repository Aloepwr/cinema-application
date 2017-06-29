import { Component } from 'react'
import { CinemaMoviesList } from './components/CinemaMoviesList'
import { CinemaMoviesCount } from './components/CinemaMoviesCount'
import { AddEventForm } from './components/AddEventForm'
import { Menu } from './components/Menu'

export class App extends Component {
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
		return(
			<div className="app">
			<Menu />

			{
				
				<CinemaMoviesCount 	total={this.countMovies()}
							   		action={this.countMovies("action")}
							   		comedy={this.countMovies("comedy")} 
				/>

			}

			</div>
		)
	}
}