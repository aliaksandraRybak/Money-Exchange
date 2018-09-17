// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
	if (currency <= 0) return {};
	if (currency >= 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};

	var res = {};

	function numberOfCoins (name, value) {
		var v = Math.floor(currency/value);
		if (v != 0) {
			res[name] = v;
			currency = (currency % value);
		}
	}

	numberOfCoins("H", 50);
	numberOfCoins("Q", 25);
	numberOfCoins("D", 10);
	numberOfCoins("N", 5);
	numberOfCoins("P", 1);
	
	return res;
}

