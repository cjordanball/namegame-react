import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducer from './stores/reducer';
import Container from './components/Container/container';

const dataStore = createStore(Reducer);

ReactDOM.render(
	<Provider store={dataStore}>
		<Container />
	</Provider>, document.querySelector('#root')
);
