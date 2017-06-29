import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import { App } from './App'
import { CinemaMoviesList } from './components/CinemaMoviesList'
import { AddEventForm } from './components/AddEventForm'


window.React = React;

render(
	<BrowserRouter>
		<App path="/"> 
			<AddEventForm path="/add-event"  />
			<CinemaMoviesList path="/event-list" component={CinemaMoviesList} />
		</App>
	</BrowserRouter>,
	document.getElementById('react-container')
)