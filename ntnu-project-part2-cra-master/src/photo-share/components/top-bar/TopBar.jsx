import React from 'react';
import {
	AppBar, Toolbar, Typography, Grid
} from '@material-ui/core';
import './TopBar.css';
import fetchModel from '../../../lib/fetchModelData';

/**
 * Define TopBar, a React componment of PROG2053 part #2
 */
class TopBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: []
		};
		const promise = fetchModel(`/user/${window.location.pathname.split('/').pop()}`);
		promise.then((response) => {
			console.log('Sucessfully loaded into user photos');
			this.setState({user: response.data});
		},
		(reason) => {
			console.log(reason);
			console.log('Problem setting new user ID, userPhotos');
		});
	}

	displayLocation = (pathname) => {
		const userName = `${this.state.user.first_name} ${this.state.user.last_name}`;
		if (pathname.search('user') !== -1) {
			return `${userName}'s Details`;
		} return `${userName}'s Photos`;
	};


	render() {
		return (
			<AppBar className="prog2053-topbar-appBar" position="absolute">
				<Toolbar>
					<Grid container direction="row" justify="space-between" align="center">
						<Typography variant="h5" color="inherit">
							Group 25
						</Typography>
						<Typography variant="h5">
							{this.displayLocation(window.location.pathname)}
						</Typography>
					</Grid>
				</Toolbar>
			</AppBar>
		);
	}
}

export default TopBar;
