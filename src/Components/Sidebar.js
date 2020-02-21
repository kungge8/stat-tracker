import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import { List,
		 ListItem,
		 ListItemText,
		 Icon } from '@material-ui/core';

import { Home,
		 Work,
		 Build,
		 Colorize } from '@material-ui/icons';

export default class Sidebar extends Component {
	render() {
		return (
			<List disablePadding dense className = "sidebar">
				<Link to = '/'>
					<ListItem button>
						<Home />
						<ListItemText>VILLAGE</ListItemText>
					</ListItem>
				</Link>
				<Link to = '/labor'>
					<ListItem button>
					<Work />
						<ListItemText>LABOR</ListItemText>
					</ListItem>
				</Link>
				<Link to = '/science'>
					<ListItem button>
						<Colorize />
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
