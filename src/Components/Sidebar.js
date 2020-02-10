import React, { Component } from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom'

import '../Styling/general.css';

export default class Sidebar extends Component {
	render() {
		return (
			<List disablePadding dense className = "sidebar">
				<Link to = '/'>
					<ListItem button>
						<ListItemText>HOME</ListItemText>
					</ListItem>
				</Link>
				<Link to = '/labor'>
					<ListItem button>
						<ListItemText>LABOR</ListItemText>
					</ListItem>
				</Link>
				<Link to = '/science'>
					<ListItem button>
						<ListItemText>SCIENCE</ListItemText>
					</ListItem>
				</Link>
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
