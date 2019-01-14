import React from 'react';
import PropTypes from 'prop-types';
import styles from './employee.less';

const employee = (props) => {
	const { firstName, lastName, jobTitle, url } = props;
	return (
		<div className={styles.employeeBox}>
			<img src={url} alt={`${firstName} ${lastName}`} />
			<div className={styles.jobTitle}>{jobTitle}</div>
		</div>
	);
};

employee.propTypes = {
	firstName: PropTypes.string.isRequired,
	lastName: PropTypes.string.isRequired,
	jobTitle: PropTypes.string,
	url: PropTypes.string
};
employee.defaultProps = {
	jobTitle: 'Unknown',
	url: ''
};

export default employee;
