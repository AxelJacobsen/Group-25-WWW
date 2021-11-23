import React from 'react';
import {
	Typography
} from '@material-ui/core';
import {withRouter} from 'react-router-dom';
import './UserDetail.css';


/**
 * Define UserDetail, a React componment of PROG2053 part #2
 */
class UserDetail extends React.Component {
	render() {
		return (
			<Typography variant="body1">
        This should be the UserDetail view of the PhotoShare app. Since
        it is invoked from React Router the params from the route will be
        in property match. So this should show details of user:
				{this.props.match.params.userId}. You can fetch the model for the
        user from PROG2053Models.userModel(userId).
			</Typography>
		);
	}
}

export default withRouter(UserDetail);
