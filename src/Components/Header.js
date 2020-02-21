import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	clearState,
} from '../Functions/localStorage.js';
import {
	resetGame
} from '../Actions/gameActions.js';

import {
	Button,
} from '@material-ui/core';

class Header extends Component {
	resetState = (e) => {
		const r = window.confirm("Are you sure?");
		if (r == true){
			clearState();
			this.props.resetGame();
		}
	}

	render() {
		return (
			<div>
				THIS IS A HEADER.
				<Button variant = 'text' onClick = {this.resetState}>RESET</Button>
			</div>
		);
	}
}

export default connect( null, { resetGame })(Header);