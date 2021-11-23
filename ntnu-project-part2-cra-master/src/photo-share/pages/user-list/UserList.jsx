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

/**
 * Define UserList, a React componment of PROG2053 part #2
 */
class UserList extends React.Component {
	render() {
		return (
			<div>
				<Typography variant="body1">
					This is the user list, which takes up 3/12 of the window.
					You might choose to use <a href="https://material-ui.com/demos/lists/">Lists</a> and <a href="https://material-ui.com/demos/dividers">Dividers</a> to
					display your users like so:
				</Typography>
				<List component="nav">
					<ListItem>
						<ListItemText primary="Item #1" />
					</ListItem>
					<Divider />
					<ListItem>
						<ListItemText primary="Item #2" />
					</ListItem>
					<Divider />
					<ListItem>
						<ListItemText primary="Item #3" />
					</ListItem>
					<Divider />
				</List>
				<Typography variant="body1">
					The model comes in from PROG2053Models.userListModel()
				</Typography>
			</div>
		);
	}
}

export default UserList;
