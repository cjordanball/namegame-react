import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './namesGame.less';
import Employee from './Employee/employee';

class NamesGame extends Component {
	selected = [];

	employeeViews = undefined;

	constructor() {
		super();
		this.state = {
			hotEmployees: [],
			hotNum: undefined
		};
	}

	componentWillMount() {
		this.setState({
			hotNum: Math.floor(Math.random() * 5),
			hotEmployees: this.createEmployeeDivs()
		});
	}

	componentDidMount() {
		const { setPath, begin } = this.props;
		setPath('names');
		begin();
	}

	handleChoice = (e) => {
		const { setNewScore, onDecrement } = this.props;
		const { hotEmployees, hotNum } = this.state;
		const chosen = e.target.dataset.id;
		if (this.selected.includes(chosen)) {
			return;
		}
		this.selected.push(chosen);
		if (chosen === hotEmployees[hotNum].props.id) {
			setNewScore();
			this.setState({
				hotEmployees: this.createEmployeeDivs(),
				hotNum: Math.floor(Math.random() * 5)
			});
			this.selected = [];
		} else {
			this.removeChoice(chosen);
			onDecrement();
		}
	};

	removeChoice(id) {
		const { hotEmployees } = this.state;
		const hotIndex = hotEmployees.findIndex(employee => (employee && id === employee.props.id));
		const newArray = Array.from(hotEmployees);
		newArray.splice(hotIndex, 1, null);
		this.setState({
			hotEmployees: newArray
		});
	}

	createEmployeeDivs() {
		const employees = this.chooseEmployeeList();
		return employees
			.map(employee => (
				<Employee
					key={employee.id}
					id={employee.id}
					lastName={employee.lastName}
					firstName={employee.firstName}
					jobTitle={employee.jobTitle}
					url={employee.headshot.url}
					click={this.handleChoice}
				/>
			));
	}

	chooseEmployeeList() {
		const { employeeList } = this.props;
		const arrLength = employeeList.length;
		const resArray = [];
		while (resArray.length < 5) {
			const newEntry = Math.floor(Math.random() * arrLength);
			if (!resArray.includes(newEntry)
				&& employeeList[newEntry].firstName
				&& employeeList[newEntry].lastName
				&& employeeList[newEntry].slug
				&& employeeList[newEntry].headshot.alt !== 'Logo'
				&& employeeList[newEntry].headshot.url
				&& employeeList[newEntry].headshot.alt.slice(0, 6) !== 'Willow'
			) {
				resArray.push(newEntry);
			}
		}
		return resArray.map(entry => employeeList[entry]);
	}

	render() {
		const { hotEmployees, hotNum } = this.state;
		return (
			<div className={styles.namesGame}>
				<div className={styles.employeeBoard}>
					{ hotEmployees }
				</div>
				<p className={styles.textSpan}>{`Who is ${hotEmployees[hotNum].props.firstName} ${hotEmployees[hotNum].props.lastName}?`}</p>
			</div>
		);
	}
}

NamesGame.propTypes = {
	onDecrement: PropTypes.func.isRequired,
	setNewScore: PropTypes.func.isRequired,
	employeeList: PropTypes.arrayOf(PropTypes.object).isRequired,
	setPath: PropTypes.func.isRequired,
	begin: PropTypes.func.isRequired
};

const mapStateToProps = appState => (
	{
		employeeList: appState.employees
	}
);

const mapDispatchToProps = dispatch => (
	{
		onDecrement: () => dispatch({
			type: 'DECREMENT_CURRENT_SCORE'
		}),
		setNewScore: () => dispatch({
			type: 'SET_NEW_SCORE'
		}),
		setPath: path => dispatch({
			type: 'TRACK_PATH',
			path
		}),
		begin: () => dispatch({
			type: 'SIGNAL_START'
		})
	}
);

export default connect(mapStateToProps, mapDispatchToProps)(NamesGame);
