import React from 'react';
import styles from './container.less';
import ToolBar from '../Toolbar/toolbar';
import Heading from '../Heading/heading';
import ScoreKeeper from '../ScoreKeeper/ScoreKeeper';
import NamesGame from '../NamesGame/namesGame';

const container = () => (
	<div className={styles.container}>
		<ToolBar />
		<Heading />
		<NamesGame />
		<ScoreKeeper />
	</div>
);

export default container;
