export const aircraft = {
	get weight() {
		return this.fields.reduce((a, f) => a + f.weight);
	}
};
export const mass = {
	get moment() {
		return this.weightPounds * this.armInches;
	}
};
export const PA28_161 = {
	__proto__: aircraft,
	name: 'Piper Warrior PA28-161',
	weightMaxTakeoffPounds: 2325,
	weightMaxLandingPounds: 2325,
	additionalCategories: [
		{
			name: 'utility',
			weightMaxTakeoffPounds: 1950
		}
	],
	masses: [
		{
			__proto__: mass,
			name: 'Front Seats',
			armInches: 80.5
		},
		{
			__proto__: mass,
			name: 'Fuel',
			armInches: 95,
			weightMaxPounds: 2179.45
		},
		{
			__proto__: mass,
			name: 'Rear Seats',
			armInches: 118.1
		},
		{
			__proto__: mass,
			name: 'Baggage',
			armInches: 142.8,
			weightMaxPounds: 200
		}
	]
};
export const default_templates = [
	{
		__proto__: PA28_161,
		name: 'OHO YLIL',
		weightEmptyPounds: 1521.45,
		armEmptyInches: 86.18
	},
	{
		__proto__: PA28_161,
		name: 'AGD YLIL',
		weightEmptyPounds: 1483.4,
		armEmptyInches: 85.5
	},
	{
		__proto__: PA28_161,
		name: 'MGV YLIL',
		weightEmptyPounds: 1432.1,
		armEmptyInches: 86.67
	}
];
