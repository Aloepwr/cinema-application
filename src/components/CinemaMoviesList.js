import Smile from 'react-icons/lib/md/insert-emoticon'
import FighterJet from 'react-icons/lib/fa/fighter-jet'
import Movie from 'react-icons/lib/ti/film'

import { Link } from 'react-router-dom'

import { CinemaMoviesRow } from './CinemaMoviesRow'


export const CinemaMoviesList = ({movies, filter}) => {
	//const filteredMovies = (!filter || !filter.match(/action|comedy/)) ? movies : movies.filter(movie => movie[filter])

	return (
		<div className="cinema-movies-list">
			<table>
				<thead>
					<tr>
						<th>Cinema</th>
						<th>Date</th>
						<th>Action</th>
						<th>Comedy</th>
					</tr>
					<tr>
						<td colSpan={4}>
							<Link to="/total-movies">
								All movies
							</Link>
							<Link to="/total-movies/action-movies">
								Action movies
							</Link>
							<Link to="/total-movies/comedy-movies">
								Comedy movies
							</Link>
						</td>
					</tr>
				</thead>
				<tbody>
					{movies.map((movie, i) => 
						<CinemaMoviesRow key={i} {...movie} />
					)}
				</tbody>
			</table>
		</div>
	)
}