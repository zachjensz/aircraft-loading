export const aircraft = {
	title: 'OHO YLIL',
	subtitle: 'Piper Warrior PA28-161',
	maxTakeoffWeightPounds: 2325,
	maxLandingWeightPounds: 2325,
	additionalCategories: [
		{
			name: 'utility',
			maxTakeoffWeightPounds: 1950
		}
	],
	masses: [
		{
			get moment() {
				return this.weightPounds * this.armInches;
			},
			name: 'Empty Weight',
			weightPounds: 1521.45,
			armInches: 86.18
		},
		{
			get moment() {
				return this.weightPounds * this.armInches;
			},
			name: 'Front Seats',
			weightPounds: 0,
			armInches: 80.5
		},
		{
			get moment() {
				return this.weightPounds * this.armInches;
			},
			name: 'Fuel',
			weightPounds: 0,
			armInches: 95,
			weightMaxPounds: 2179.45
		},
		{
			get moment() {
				return this.weightPounds * this.armInches;
			},
			name: 'Rear Seats',
			weightPounds: 0,
			armInches: 118.1
		},
		{
			get moment() {
				return this.weightPounds * this.armInches;
			},
			name: 'Baggage',
			weightPounds: 0,
			armInches: 142.8,
			weightMaxPounds: 200
		}
	]
};
// name: 'AGD YLIL',
// weightEmptyPounds: 1483.4,
// armEmptyInches: 85.5
// name: 'MGV YLIL',
// weightEmptyPounds: 1432.1,
// armEmptyInches: 86.67
