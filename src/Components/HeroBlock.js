import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
	Button,
	Box, 
	Container
} from '@material-ui/core';

import {
	addWorker,
	removeWorker,
} from '../Actions/villagerActions.js';
import {
	buyCostSelector,
	sellCostSelector,
	workerSelector,
} from '../Reducers/villageReducer.js';
import {
	verifyCostAvailable,
} from '../Functions/mathFunctions.js';

class HeroBlock extends Component {
	handleBuy = (e) => {
		const temp = this.props;
		const curr = this.props.currency;
		console.log(temp.worker);

		if (verifyCostAvailable(temp.buyCost, curr)){
			temp.addWorker(temp.class, temp.quant, temp.worker.currency, temp.buyCost);
		}
	}

	handleSell = (e) => {
		const temp = this.props;
		const cl = this.props.worker;

		if(cl.quant > 0){
			temp.removeWorker(temp.class, temp.quant, temp.worker.currency, temp.sellCost);
		}
	}

	render() {
		const s = this.props.worker;
		return (
			<Box className = 'heroBlockMainBody'>
				<Box className = 'infoBlock'>
					<div>{s.name}: {s.quant}</div>
				</Box>
				<Box className = 'buttonBlock'>
					<Button variant = 'text' onClick = {this.handleSell}> SELL </Button>
					<Button variant = 'text' onClick = {this.handleBuy}> BUY </Button>
					<div> Cost:
						{this.props.buyCost.map((n, i) => {
							const t = this.props.buyCost[i];
								return (
									<div key = {t.currency}> {t.currency + ": " + (Math.round(t.quant * s.currentMult))} </div>
								);
							})
						}
					</div>
				</Box>
			</Box>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	currency: state.currency,
	worker: workerSelector(state, ownProps.class),
	buyCost: buyCostSelector(state, ownProps.class),
	sellCost: sellCostSelector(state, ownProps.class),
});

export default connect(mapStateToProps, { addWorker, removeWorker })(HeroBlock);
