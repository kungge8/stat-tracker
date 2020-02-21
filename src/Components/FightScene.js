import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
	Box,
	Card, 
	Container
} from '@material-ui/core';

import { tick } from '../Actions/villagerActions.js';

class FightScene extends Component {
	componentDidMount () {
	    setInterval(()=> {
	    	this.props.tick();
	    }, 1000 / (this.props.state.game.speed * this.props.state.game.speedMult));
	}

	componenDidUpdate (){
		clearInterval();
	    setInterval(()=> {
	    	this.props.tick();
	    }, 1000 / (this.props.state.game.speed * this.props.state.game.speedMult));
	}

	componentWillUnmount () {
		clearInterval();
	}


	render() {
		const c = this.props.state.currency;
		return (
			<Card className = 'fightScene'>
				{Object.entries(c).map((n) => {
					const y = n[1];
					return (
						<Box className = 'currency' key = {y.name}>
							{y.name}: {y.quant}
						</Box>
					);
				})}
			</Card>
		);
	}
}

const mapStateToProps = (state) => ({
	state
});

export default connect (mapStateToProps, { tick })(FightScene);