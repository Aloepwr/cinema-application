import Smile from 'react-icons/lib/md/insert-emoticon'
import FighterJet from 'react-icons/lib/fa/fighter-jet'
import Movie from 'react-icons/lib/ti/film'

export const CinemaMoviesRow = ({cinema, date, action, comedy}) => (
	<tr>
		<td>
			{cinema}
		</td>
		<td>
			{date.getMonth()+1}/{date.getDate()}/{date.getFullYear()}
		</td>
		<td>
			{(action) ? <FighterJet /> : null}
		</td>
		<td>
			{(comedy) ? <Smile /> : null}
		</td>
	</tr>
)