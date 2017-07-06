import { Switch, Route } from 'react-router-dom'

import { AddEventForm } from './AddEventForm'
import { CinemaMoviesAmount } from './CinemaMoviesAmount'
import { CinemaMoviesCounter } from './CinemaMoviesCounter'


export const Main = () => (
	<main>
		<Switch>
			<Route exact path="/" component={CinemaMoviesAmount} />
			<Route path="/add-event" component={AddEventForm} />
			<Route path="/event-list" component={CinemaMoviesCounter} />
			<Route path="/event-list/:filter" component={CinemaMoviesCounter} />
		</Switch>
	</main>
)