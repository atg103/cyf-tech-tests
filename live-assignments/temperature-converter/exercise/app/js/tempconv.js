function TemperatureConverter() { }
TemperatureConverter.prototype.convert = function(fromTemp, toTemp, value) {
	return undefined;
};

if (module) {
	// this exists in the Node/Jest environment but not in the browser.
	module.exports = TemperatureConverter;
}
