import React from 'react';
import {
	Divider,
	List,
	ListItem,
	ListItemText,
	Typography
}
from '@material-ui/core';
import './UserList.css';
import fetchModel from '../../../lib/fetchModelData';

/**
 * Define UserList, a React componment of PROG2053 part #2
 */
class UserList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			users: []
		};
		fetchModel('/user/list').then((response) => {
			this.setState({
				users: response.data
			});
		},
		(reason) => {
			console.log(reason);
			console.log('Problem getting userList, UserList');
		});
	}

	render() {
		return (
			<div>
				<Typography variant="h5">
					Userlist:
				</Typography>
				<Divider />
				<List component="nav">
					{this.state.users.map((username) => {
						return (
							<a href = {`/photo-share/users/${username._id}`} key={username._id}>
								<ListItem>
									<ListItemText
										primary= {`${username.first_name} ${username.last_name}`}
									/>
								</ListItem>
								<Divider />
							</a>
						);
					})}
				</List>
			</div>
		);
	}
}

export default UserList;
