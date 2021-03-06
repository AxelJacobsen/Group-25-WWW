import React from 'react';
import {
	Grid,
	Typography
} from '@material-ui/core';
import {withRouter} from 'react-router-dom';
import './UserDetail.css';
import fetchModel from '../../../lib/fetchModelData';

/**
 * Define UserDetail, a React componment of PROG2053 part #2
 */
class UserDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: undefined
		};
		const promise = fetchModel(`/user/${this.props.match.params.userId}`);
		promise.then((response) => {
			console.log('Sucessfully loaded into user');
			this.setState({user: response.data});
		},
		(reason) => {
			console.log(reason);
			console.log('Problem setting new user ID, userDetail');
		});
	}

	render() {
		return this.state.user ? (
			<Grid xs={5} item>
				<Typography variant="h3">
					{`${this.state.user.first_name} ${this.state.user.last_name}`}
				</Typography>
				<Typography variant="h5">
					{this.state.user.occupation} from {this.state.user.location}
				</Typography>
				<Typography variant="body2">
					{this.state.user.description}<br /><br />
					<a href = {`/photo-share/photos/${this.state.user._id}`} key={this.state.user._id}>Click here to view users photos</a>
				</Typography>
			</Grid>
		) : (
			<div/>
		);
	}
}

export default withRouter(UserDetail);
