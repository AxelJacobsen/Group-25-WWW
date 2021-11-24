/* eslint-disable no-unused-vars */
import React from 'react';
import {
	Typography,
	Divider,
	List,
	ListItem,
	ListItemText,
	ListItemSecondaryAction,
	ListItemAvatar
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
			photos: []
		};

		// Set userId
		this.userId = this.props.match.params.userId;

		// Fetch user data
		fetchModel(`/user/${this.userId}`).then((response) => {
			this.user = response.data;
		});
	}

	/**
     * Insert photo data if the component mounted
     */
	componentDidMount() {
		// Fetch user photos
		fetchModel(`/photosOfUser/${this.userId}`).then((response) => {
			this.setState({
				photos: response.data
			});
		});
	}

	/**
     * Render function
     * @returns
     */
	render() {
		return this.user ? (
			<div>
				<Typography variant="h5">
					{this.user.first_name}s photos:
				</Typography>
				<Divider />

				{/* Iterate photos */}
				<List component="nav">
					{this.state.photos.map((photo) => {
						return (
							<List component="nav2" key = {photo.file_name}>
								{/* Add image */}
								<ListItem key = {photo.date_time}>
									{/* Display the date of picture post */}
									<ListItemText
										secondary = {`Creation date: ${photo.date_time}`}
									/>
								</ListItem>
								<img src={`/images/${photo.file_name}`}></img>

								{/* Iterate photo comments (if they exist) */}
								{photo.comments ? (
									photo.comments.map((comment) => {
										return (
											<><ListItem key={comment.comment}>
												{/*... and create a link to the commenter's profile */}
												<a href={`/photo-share/users/${comment.user._id}`}>
													<ListItemText
														secondary={`${comment.user.first_name} ${comment.date_time}`} />
												</a>
											</ListItem><ListItem key={comment.comment}>
													{/* Display the comment */}
													<ListItemText
														primary={`${comment.comment}`} />
												</ListItem></>
										);
									})
								) : (
									<div></div>
								)}
								<br /><br />
								<Divider />
								<br /><br />
							</List>
						);
					})}
				</List>
			</div>
		) : (
			<div/>
		);
	}
}

export default withRouter(UserPhotos);
