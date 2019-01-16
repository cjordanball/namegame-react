import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './ScoreKeeper.less';
import ScoreSide from './ScoreSide/scoreside';

class ScoreKeeper extends Component {
	render() {
		return (
			<div className={styles.scoreBox}>
				<ScoreSide num={this.props.currentScore} heading="Current Score:" />
				<ScoreSide num={this.props.gameScore} heading="Game Score:" />
			</div>
		);
	}
}

const mapStateToProps = state => (
	{
		gameScore: state.scoreDataTotal,
		currentScore: state.scoreDataCurrent
	}
);
export default connect(mapStateToProps)(ScoreKeeper);
