import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Container from './components/Container/container';

const Store = createStore(reducers);

ReactDOM.render(
	<Provider store={Store}>
		<Container />
	</Provider>, document.querySelector('#root')
);
