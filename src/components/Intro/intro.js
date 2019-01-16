import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './intro.less';
import Text from '../../Text/text';

class Introduction extends Component {
	componentDidMount() {
		const { updatePath } = this.props;
		updatePath('home');
	}

	render() {
		return (
			<div className={styles.container}>
				<h1>{Text.intro.heading}</h1>
				<p>
					{Text.intro.gameIntro1}
				</p>
				<p>
					{Text.intro.gameIntro2}
				</p>
			</div>
		);
	}
}

Introduction.propTypes = {
	updatePath: PropTypes.func.isRequired
};


const mapDispatchToProps = dispatch => (
	{
		updatePath: path => dispatch({
			type: 'TRACK_PATH',
			path
		})
	}
);


export default connect(null, mapDispatchToProps)(Introduction);
