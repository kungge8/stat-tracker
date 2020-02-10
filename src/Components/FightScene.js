import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addCoin } from '../Actions/villagerActions.js';

import '../Styling/general.css';

class FightScene extends Component {
	updateStock (){

	}

	componentDidMount () {
	    setInterval(()=> {
	    	this.props.addCoin();
	    }, 1000 / (this.props.state.game.speed * this.props.state.game.speedMult));
	}

	componenDidUpdate (){
		clearInterval();
	    setInterval(()=> {
	    	this.props.addCoin();
	    }, 1000 / (this.props.state.game.speed * this.props.state.game.speedMult));
	}

	componentWillUnmount () {
		clearInterval();
	}

	render() {
		const c = this.props.state.currency;
		return (
			<div className = 'fightScene'>
				<text>
					Coin: {c.coin.quant}
				</text>
				<text>
					Wood: {c.wood.quant}
				</text>
				<text>
					Iron: {c.iron.quant}
				</text>
				<text>
					Grain: {c.grain.quant}
				</text>
				<text>
					Meat: {c.meat.quant}
				</text>
				<text>
					Research: {c.research.quant}
				</text>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	state
});

export default connect (mapStateToProps, { addCoin })(FightScene);