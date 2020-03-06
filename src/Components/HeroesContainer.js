import React, { Component } from 'react';
import { connect } from 'react-redux';

import HeroBlock from './HeroBlock.js';
import {
	Box,
	Card
} from '@material-ui/core';

import {
	classesSelector,
} from '../Reducers/villageReducer.js';

class HeroesContainer extends Component {
	render() {
		return (
			<Card className = "bodyContainer">
				{this.props.workerNameList.map((n, i, a) => {
					if (i === a.length - 1){
						return (
							<HeroBlock key = {n} class = {n} quant = {1} />
						);
					} else {
						return (
							<Box key = {n}>
								<HeroBlock class = {n} quant = {1} />
								<hr />
							</Box>
						);						
					}
				})}
			</Card>
		);
	}
}

const mapStateToProps = (state) => ({
	workerNameList: classesSelector(state),
});

export default connect(mapStateToProps)(HeroesContainer);