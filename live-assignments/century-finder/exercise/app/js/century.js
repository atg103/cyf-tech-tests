class CenturyFinder {

	constructor(){
	}

	formatOrdinal(centuryNumber) {
		if (centuryNumber >= 11 && centuryNumber <= 13) {
			return centuryNumber + "th";
		}
		switch (centuryNumber % 10) {
			case 1:
				return centuryNumber + "st";
			case 2:
				return centuryNumber + "nd";
			case 3:
				return centuryNumber + "rd";
			default:
				return centuryNumber + "th";
		}
	}

	findCenturyOf(date) {
		return undefined; // TODO: Implement this method
	}

}