import React from 'react';
import PropTypes from 'prop-types';
import styles from './namesGame.less';
import Employee from './Employee/employee';

const namesGame = (props) => {
	const hotNum = Math.floor(Math.random() * 5);
	const { employees } = props;
	const employeeDivs = employees
		.map(employee => (
			<Employee key={employee.id} lastName={employee.lastName} firstName={employee.firstName} jobTitle={employee.jobTitle} url={employee.headshot.url} />
		));
	return (
		<div className={styles.namesGame}>
			<div className={styles.employeeBoard}>
				{ employeeDivs }
			</div>
			<p className={styles.textSpan}>{`Who is ${employees[hotNum].firstName} ${employees[hotNum].lastName}?`}</p>
		</div>
	);
};

namesGame.propTypes = {
	employees: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default namesGame;
