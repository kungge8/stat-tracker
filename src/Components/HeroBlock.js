import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';

import { removeCoin,
		 addWorker } from '../Actions/villagerActions.js';

import '../Styling/general.css';

class HeroBlock extends Component {
	handleClick = (e) => {
		const temp = this.props
		temp.addWorker(temp.quant, temp.class, temp.cost);
		temp.removeCoin(temp.quant * temp.cost);
	}

	render() {
		return (
			<div className = "mainBody">
				<header>
					{this.props.class}
					{this.props[this.props.class]}
				</header>
				<div>
					THESE ARE THE HERO STATS
					<Button variant = 'text' onClick = {this.handleClick}> BUY </Button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	[ownProps.class]: state.villager[ownProps.class]
});

export default connect(mapStateToProps, { removeCoin, addWorker })(HeroBlock);
