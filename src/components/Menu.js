import { Link } from 'react-router-dom'
import HomeIcon from 'react-icons/lib/fa/home'
import AddEventIcon from 'react-icons/lib/fa/calendar-plus-o'
import EventListIcon from 'react-icons/lib/fa/table'

export const Menu = () => (
	<nav className="menu">
		<Link to="/">
			<HomeIcon />
		</Link>
		<Link to="/add-event">
			<AddEventIcon />
		</Link>
		<Link to="/event-list">
			<EventListIcon />
		</Link>
	</nav>
)