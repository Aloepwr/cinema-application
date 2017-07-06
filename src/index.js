import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { App } from './App'


window.React = React;

render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('react-container')
)