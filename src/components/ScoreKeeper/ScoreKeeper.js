import React, { Component } from 'react';
import styles from './ScoreKeeper.less';

class ScoreKeeper extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentScore: 0,
			totalScore: 0
		};
	}

	render() {
		return (
			<div currentScore={this.state} totalScore={this.state} className={styles.scoreBox}>
				<h1>Here is where the score goes!</h1>
			</div>
		);
	}
}

export default ScoreKeeper;
