import React from 'react';
import styles from './container.less';
import ToolBar from '../Toolbar/toolbar';
import Heading from '../Heading/heading';
import ScoreKeeper from '../ScoreKeeper/ScoreKeeper';

const container = (props) => {
	const foo = (props) => {

	}
	return (
		<div className="container">
			<ToolBar/>
			<Heading/>
			<ScoreKeeper/>
		</div>
	)
}

export default container;
