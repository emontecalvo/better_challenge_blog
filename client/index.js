import React from 'react';
import ReactDOM from 'react-dom';
// import Home from './components/home';
import Home from './components/home';
import store from './store';
import {Provider} from 'react-redux';

document.addEventListener('DOMContentLoaded', () =>
	ReactDOM.render(<Provider store={store}>
		<Home />
	</Provider>, document.getElementById('app'))
);
