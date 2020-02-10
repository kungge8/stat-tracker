import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';

import { removeCoin,
		 addWorker } from '../Actions/villagerActions.js';

import '../Styling/general.css';

class HeroBlock extends Component {
	handleBuy = (e) => {
		const temp = this.props;
		const curr = this.props.currency;
		const cl = this.props[this.props.class];
		console.log(cl.cost);
		if (cl.cost < curr.Coin.quant){
			temp.addWorker(cl.name, this.props.quant);
			temp.removeCoin('Coin', cl.cost);
		}
	}

	render() {
		return (
			<div className = "mainBody">
				<header>
					{this.props[this.props.class].name}
					{this.props[this.props.class].quant}
				</header>
				<div>
					THESE ARE THE HERO STATS
					<Button variant = 'text' onClick = {this.handleBuy}> BUY </Button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	currency: state.currency,
	[ownProps.class]: state.villager[ownProps.class]
});

export default connect(mapStateToProps, { removeCoin, addWorker })(HeroBlock);
