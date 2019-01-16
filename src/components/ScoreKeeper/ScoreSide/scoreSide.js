import React from 'react';
import PropTypes from 'prop-types';
import styles from './scoreSide.less';

const scoreSide = (props) => {
	const { num, heading } = props;
	return (
		<div className={styles.container}>
			<h1>{heading}</h1>
			<h1>{num}</h1>
		</div>
	);
};

scoreSide.propTypes = {
	num: PropTypes.number.isRequired,
	heading: PropTypes.string.isRequired
};

export default scoreSide;
