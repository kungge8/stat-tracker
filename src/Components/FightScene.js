import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';

import { addCoin } from '../Actions/villagerActions.js';

import '../Styling/general.css';

class FightScene extends Component {
	handleClick = (e) => {
		this.props.addCoin(1);
	}

	render() {
		return (
			<div className = 'fightScene'>
				{this.props.state.villager.coin}
				<Button variant = 'contained' className = 'bigButton' onClick = {this.handleClick}> Click! </Button>
				}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	state
});

export default connect (mapStateToProps, { addCoin })(FightScene);