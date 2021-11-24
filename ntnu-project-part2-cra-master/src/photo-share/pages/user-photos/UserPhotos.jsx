/* eslint-disable no-unused-vars */
import React from 'react';
import {
	Typography
} from '@material-ui/core';
import './UserPhotos.css';
import PROG2053Models from '../../../model-data/PhotoApp';
import {withRouter} from 'react-router';
import fetchModel from '../../../lib/fetchModelData.js';


/**
 * Define UserPhotos, a React componment of PROG2053 part #2
 */
class UserPhotos extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			photos: [],
			testValue: -1
		};

		// Get userid from url
		this.userId = this.props.match.params.userId;

		// Fetch the fetchModel function
		const promise = fetchModel(`/photosOfUser/${this.userId}`);

		// If the request was successful (resolved), fill photos with the response data
		promise.then((response) => {
			this.testValue = 10;
		}, (reason) => {
			this.testValue = -2;
		});
	}

	render() {
		return (
			<Typography variant="body1">
				This should be the UserPhotos view of the PhotoShare app. Since
				it is invoked from React Router the params from the route will be
				in property match. So this should show details of user:
				{this.testValue}. You can fetch the model for the user from
				PROG2053Models.photoOfUserModel(userId) through the url /photosOfUser/:id
			</Typography>
		);
	}
}

export default withRouter(UserPhotos);
