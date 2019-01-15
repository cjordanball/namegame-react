import React from 'react';
import { Link } from 'react-router-dom';
import styles from './toolbar.less';
import Button from '../SharedUI/Button/button';

const toolbar = () => (
	<div className={styles.toolbar}>
		<Button />
		<Button />
		<Link to='/names'>Names</Link>
		<Link to='/'>Home</Link>
	</div>
);

export default toolbar;
