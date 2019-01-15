import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EmployeeData from '../../testData/fullEmployeeData';
import styles from './container.less';
import ToolBar from '../Toolbar/toolbar';
import Heading from '../Heading/heading';
import ScoreKeeper from '../ScoreKeeper/ScoreKeeper';
import NamesGame from '../NamesGame/namesGame';

class Container extends Component {
	constructor(props) {
		super(props);
		this.state = {
			employees: [],
			selectedEmployee: null
		};
	}

	componentDidMount() {
		console.log('ed: ', EmployeeData);
		this.setState({
			employees: EmployeeData.people,
			author: 'CJB'
		});
		// axios.get('https://willowtreeapps.com/api/v1.0/profiles/')
		// 	.then((res) => {
		// 		console.log(res.data);
		// 	});
	}

	chooseEmployeeList() {
		const { employees } = this.state;
		const arrLength = employees.length;
		const resArray = [];
		while (resArray.length < 5) {
			const newEntry = Math.floor(Math.random() * arrLength);
			if (!resArray.includes(newEntry)
				&& employees[newEntry].firstName
				&& employees[newEntry].lastName
				&& employees[newEntry].slug
				&& employees[newEntry].headshot.alt !== 'Logo'
				&& employees[newEntry].headshot.url
				&& employees[newEntry].headshot.alt.slice(0, 6) !== 'Willow'
			) {
				resArray.push(employees[newEntry]);
			}
		}
		return resArray;
	}

	Howdy() {
		return () => (
			<h1>Hello!</h1>
		);
	}

	render() {
		console.log('render!', this.state);
		return (
			this.state.employees.length ? (
				<div className={styles.container}>
					<BrowserRouter>
						<div>
							<ToolBar />
							<Heading />
							<Route path="/" exact component={this.Howdy()} />
							<Route path="/names" render={() => <NamesGame employees={this.chooseEmployeeList()} />} />
						</div>
					</BrowserRouter>
					<ScoreKeeper />
				</div>
			) : null
		);
	}
}

export default Container;
