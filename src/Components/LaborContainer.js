import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
	Box,
	Card
} from '@material-ui/core';
import UpgradeBlock from '../Components/UpgradeBlock.js';

import {
	buildingNamesSelector,
} from '../Reducers/laborReducer';

class LaborContainer extends Component {
	render() {
		return (
			<Box>
				{
					this.props.buildingNameList.map((n) => {
						return (
							<UpgradeBlock key = {n} class = {n} />
						)
					})
				}
			</Box>
		);
	}
}

const mapStateToProps = (state) => ({
	buildingNameList: buildingNamesSelector(state),
});

export default connect(mapStateToProps)(LaborContainer);
