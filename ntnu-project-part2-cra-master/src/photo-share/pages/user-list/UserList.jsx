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
import PROG2053Models from '../../../model-data/PhotoApp';

/**
 * Define UserList, a React componment of PROG2053 part #2
 */
class UserList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			users: PROG2053Models.userListModel()
		};
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
