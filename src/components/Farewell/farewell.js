import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './farewell.less';
import Text from '../../Text/text';

class Farewell extends Component {
	componentDidMount() {
		const { close } = this.props;
		close();
	}

	render() {
		const { totalScore } = this.props;
		const farewellText = `${Text.farewell.content1} ${totalScore} ${Text.farewell.content2}`;

		return (
			<div className={styles.farewell}>
				<h1>{Text.farewell.heading}</h1>
				<p className={styles.textBody}>{farewellText}</p>
			</div>
		);
	}
}

Farewell.propTypes = {
	close: PropTypes.func.isRequired,
	totalScore: PropTypes.number.isRequired
};

const setStateToProps = appState => (
	{
		totalScore: appState.scoreDataTotal
	}
);

const setDispatchToProps = dispatch => (
	{
		close: () => dispatch({
			type: 'EXIT'
		})
	}
);

export default connect(setStateToProps, setDispatchToProps)(Farewell);
