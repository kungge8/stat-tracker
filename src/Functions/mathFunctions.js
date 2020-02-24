//expected inputs [],{}
export const verifyCostAvailable = (cost, currencyState) => {
	const check = cost.map((n, i) => {
		if (currencyState[n.currency].quant > n.quant){
			return true;
		} else {
			return false;
		}
	}).reduce((a, n) => {
		if (n) {
			return true;
		} else {
			return false;
		}
	}, false);

	return check;
}