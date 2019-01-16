import React from 'react';
import PropTypes from 'prop-types';
import styles from './employee.less';

const employee = (props) => {
	const { firstName, lastName, jobTitle, url, id, click } = props;
	return (
		<div onClick={click} className={styles.employeeBox}>
			<img src={url} alt={`${firstName} ${lastName}`} data-id={id} />
			<div className={styles.jobTitle}>{jobTitle}</div>
		</div>
	);
};

employee.propTypes = {
	firstName: PropTypes.string.isRequired,
	lastName: PropTypes.string.isRequired,
	jobTitle: PropTypes.string,
	url: PropTypes.string,
	id: PropTypes.string.isRequired,
	click: PropTypes.func.isRequired
};
employee.defaultProps = {
	jobTitle: 'Unknown',
	url: ''
};

export default employee;
