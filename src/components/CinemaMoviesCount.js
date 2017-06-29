import Smile from 'react-icons/lib/md/insert-emoticon'
import FighterJet from 'react-icons/lib/fa/fighter-jet'
import Movie from 'react-icons/lib/ti/film'

import PropTypes from 'prop-types'
import '../stylesheets/ui.scss'


const percentToDecimal = (decimal) => {
	return `${decimal.toPrecision(3) * 100}%`;
};

const calcGoalProgress = (total, goal) => {
	return percentToDecimal(total/goal);
};

export const CinemaMoviesCount = ({total=20, action=10, comedy=5, goal=30}) => (
	<div className="cinema-movies-count">
		<div className="total-movies">
			<span>{total}</span>
			<Movie />
			<span>movies</span>
		</div>
		<div className="action-movies">
			<span>{action}</span>
			<FighterJet />
			<span>movies</span>
		</div>
		<div className="comedy-movies">
			<span>{comedy}</span>
			<Smile />
			<span>movies</span>
		</div>
		<div>
			<span>
				{calcGoalProgress(total, goal)}
			</span>
		</div>
	</div>
);

CinemaMoviesCount.propTypes = {
	total: PropTypes.number,
	action: PropTypes.number,
	comedy: PropTypes.number,
	goal: PropTypes.number
};