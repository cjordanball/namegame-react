import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import EmployeeData from '../../testData/fullEmployeeData';
import styles from './container.less';
import ToolBar from '../Toolbar/toolbar';
import Heading from '../Heading/heading';
import ScoreKeeper from '../ScoreKeeper/ScoreKeeper';
import NamesGame from '../NamesGame/namesGame';
import Intro from '../Intro/intro';
import Farewell from '../Farewell/farewell';

class Container extends Component {
	employeeList = [];

	componentDidMount() {
		this.employeeList = EmployeeData.people;
		const { getEmployees } = this.props;
		getEmployees(this.employeeList);

		// axios.get('https://willowtreeapps.com/api/v1.0/profiles/')
		// 	.then((res) => {
		// 		console.log(res.data);
		// 	});
	}

	render() {
		const { employeeList, path, isStarted, isComplete } = this.props;
		return (
			employeeList.length ? (
				<div className={styles.container}>
					<BrowserRouter>
						<div>
							<ToolBar isHome={path === 'home'} isStarted={isStarted} isComplete={isComplete} />
							<Heading />
							<Route path="/" exact component={Intro} />
							<Route path="/names" component={NamesGame} />
							<Route path="/farewell" component={Farewell} />
						</div>
					</BrowserRouter>
					{(isStarted && !isComplete) ? <ScoreKeeper /> : null}
				</div>
			) : null
		);
	}
}

Container.propTypes = {
	getEmployees: PropTypes.func.isRequired,
	employeeList: PropTypes.arrayOf(PropTypes.any).isRequired,
	path: PropTypes.string.isRequired,
	isStarted: PropTypes.bool.isRequired,
	isComplete: PropTypes.bool.isRequired
};

const mapStateToProps = appState => (
	{
		employeeList: appState.employees,
		path: appState.path,
		isStarted: appState.isStarted,
		isComplete: appState.isComplete
	}
);

const mapDispatchToProps = dispatch => (
	{
		getEmployees: employeeList => dispatch({
			type: 'FETCH_EMPLOYEES',
			employeeList
		}),
		trackPath: path => dispatch({
			type: 'TRACK_PATH',
			path
		})
	}
);

export default connect(mapStateToProps, mapDispatchToProps)(Container);
