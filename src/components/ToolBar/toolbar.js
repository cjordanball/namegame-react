import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './toolbar.less';

const toolbar = (props) => {
	const { isHome, isStarted, isComplete } = props;
	return (
		<div className={styles.toolbar}>
			<ul>
				<li>
					<Link className={((!isStarted || isComplete) && !isHome) ? styles.link : styles.linkFade} to="/">Home</Link>
				</li>
				<li>
					<Link className={(!isStarted || isComplete) ? styles.link : styles.linkFade} to="/names">Start</Link>
				</li>
				<li>
					<Link className={(!isHome && isStarted && !isComplete) ? styles.link : styles.linkFade} to="/farewell">Exit</Link>
				</li>
			</ul>
		</div>
	);
};

toolbar.propTypes = {
	isHome: PropTypes.bool.isRequired,
	isStarted: PropTypes.bool.isRequired,
	isComplete: PropTypes.bool.isRequired
};

export default toolbar;
