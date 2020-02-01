import React, { Component } from 'react';
import { List,ListItem, ListItemText } from '@material-ui/core';

import '../Styling/general.css';

export default class Sidebar extends Component {
	render() {
		return (
			<List disablePadding dense className = "sidebar">
				<ListItem button>
					<ListItemText>STUFF</ListItemText>
				</ListItem>
				<ListItem button>
					<ListItemText>STUFF</ListItemText>
				</ListItem>
				<ListItem button>
					<ListItemText>STUFF</ListItemText>
				</ListItem>
				<ListItem button>
					<ListItemText>STUFF</ListItemText>
				</ListItem>
				<ListItem button>
					<ListItemText>STUFF</ListItemText>
				</ListItem>
				<ListItem button>
					<ListItemText>STUFF</ListItemText>
				</ListItem>
				<ListItem button>
					<ListItemText>STUFF</ListItemText>
				</ListItem>
			</List>
		);
	}
}
