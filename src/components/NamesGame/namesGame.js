import React from 'react';
import PropTypes from 'prop-types';
import classes from './namesGame.less';
import Employee from './Employee/employee';

const namesGame = (props) => {
	const { employees } = props;
	const employeeDivs = employees
		.map(employee => (
			<Employee key={employee.id} lastName={employee.lastName} firstName={employee.firstName} jobTitle={employee.jobTitle} url={employee.headshot.url} />
		));
	return (
		<div className={classes.namesGame}>
			{ employeeDivs }
		</div>
	);
};

namesGame.propTypes = {
	employees: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default namesGame;
