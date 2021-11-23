import React from 'react';
import {
	Typography
} from '@material-ui/core';
import './UserPhotos.css';
import PROG2053Models from '../../../model-data/PhotoApp';
import {withRouter} from 'react-router';


/**
 * Define UserPhotos, a React componment of PROG2053 part #2
 */
class UserPhotos extends React.Component {
	render() {
		return (
			<Typography variant="body1">
				This should be the UserPhotos view of the PhotoShare app. Since
				it is invoked from React Router the params from the route will be
				in property match. So this should show details of user:
				{this.props.match.params.userId}. You can fetch the model for the user from
				PROG2053Models.photoOfUserModel(userId):
				<Typography variant="caption">
					{JSON.stringify(PROG2053Models.photoOfUserModel(this.props.match.params.userId))}
				</Typography>
			</Typography>
		);
	}
}

export default withRouter(UserPhotos);
