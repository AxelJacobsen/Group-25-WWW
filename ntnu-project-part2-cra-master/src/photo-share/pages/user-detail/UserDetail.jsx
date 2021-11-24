import React from 'react';
import {
	Divider,
	Grid,
	styled,
	Typography
} from '@material-ui/core';
import {withRouter} from 'react-router-dom';
import './UserDetail.css';
import PROG2053Models from '../../../model-data/PhotoApp';
import fetchModel from '../../../lib/fetchModelData';
import userList from '../user-list/UserList';

/**
 * Define UserDetail, a React componment of PROG2053 part #2
 */
class UserDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: PROG2053Models.userModel(fetchModel(`/user/${this.props.match.params.userId}`))
		}
	}

	componentDidUpdate = () => {
		const newUserID = this.props.match.params.userid;
		if (this.state.user._Id !== newUserID) {
			this.setState({user: PROG2053Models.userModel(newUserID)})
			this.props.changeView('TESTEST', `${this.state.user.first_name} ${this.state.user.last_name}`)
		}
	}

	render() {
		return this.state.user ? (
			<Grid xs={6} item>
				<Typography variant="h3">
					{`${this.state.user.first_name} ${this.state.user.last_name}`}
					</Typography>
						<Typography variant="h5">
							{this.state.user.occupation} <br />
							from {this.state.user.location}
						</Typography>
					<Typography variant="body1">
						{this.state.user.description}
				</Typography>
				<br /> <Divider /> <br />
			</Grid>
		) : (
			<div />
		)
	}
}

export default withRouter(UserDetail);
