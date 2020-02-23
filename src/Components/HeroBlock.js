import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
	Button,
	Box, 
	Container
} from '@material-ui/core';

import {
	addCoin,
	removeCoin,
	addWorker,
	removeWorker,
	changeRate
} from '../Actions/villagerActions.js';

class HeroBlock extends Component {
	handleBuy = (e) => {
		const temp = this.props;
		const curr = this.props.currency;
		const cl = this.props[this.props.class];

		if (Math.round(cl.cost * cl.currentMult) <= curr.Coin.quant){
			temp.addWorker(cl.name, this.props.quant);
			temp.removeCoin('Coin', Math.round(cl.cost * cl.currentMult));
			temp.changeRate(cl.currency, this.props.quant);
		}
	}

	handleSell = (e) => {
		const temp = this.props;
		const curr = this.props.currency;
		const cl = this.props[this.props.class];

		if(cl.quant > 0){
			temp.removeWorker(cl.name, this.props.quant);
			temp.addCoin('Coin', Math.round(cl.cost * cl.currentMult / cl.costMult));
			temp.changeRate(cl.currency, this.props.quant * -1);
		}
	}

	render() {
		const s = this.props[this.props.class];
		return (
			<Box className = 'heroBlockMainBody'>
				<Box className = 'infoBlock'>
					<div>{s.name}: {s.quant}</div>
				</Box>
				<Box className = 'buttonBlock'>
					<Button variant = 'text' onClick = {this.handleSell}> SELL </Button>
					<Button variant = 'text' onClick = {this.handleBuy}> BUY </Button>
					<div>Cost: {Math.round(s.cost * s.currentMult)}</div>
				</Box>
			</Box>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	currency: state.currency,
	[ownProps.class]: state.villager[ownProps.class]
});

export default connect(mapStateToProps, { addCoin, removeCoin, addWorker, removeWorker, changeRate })(HeroBlock);
