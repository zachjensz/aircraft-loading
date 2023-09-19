import { derived } from 'svelte/store';
import { localStore } from './localStore.ts';
import { aircraft, mass, PA28_161, default_templates } from './loadingDataDefaults.ts';

export const emptyWeight = localStore('emptyWeight', 1521.45);
export const emptyArm = localStore('emptyArm', 86.18);
export const frontWeight = localStore('frontWeight', 200);
export const frontArm = localStore('frontArm', 80.5);
export const fuelWeight = localStore('fuelWeight', 201.6);
export const fuelArm = localStore('fuelArm', 95);
export const rearWeight = localStore('rearWeight', 0);
export const rearArm = localStore('rearArm', 118.1);
export const baggageWeight = localStore('baggageWeight', 0);
export const baggageArm = localStore('baggageArm', 142.8);

export const emptyMoment = derived([emptyWeight, emptyArm], multiply);
export const frontMoment = derived([frontWeight, frontArm], multiply);
export const fuelMoment = derived([fuelWeight, fuelArm], multiply);
export const rearMoment = derived([rearWeight, rearArm], multiply);
export const baggageMoment = derived([baggageWeight, baggageArm], multiply);

export const totalWeight = derived(
	[emptyWeight, frontWeight, fuelWeight, rearWeight, baggageWeight],
	add
);
export const totalMoment = derived(
	[emptyMoment, frontMoment, fuelMoment, rearMoment, baggageMoment],
	add
);
export const totalArm = derived([totalWeight, totalMoment], ([$totalWeight, $totalMoment]) =>
	twoDecimals($totalMoment / $totalWeight)
);

function multiply(numbers) {
	return twoDecimals(numbers.reduce((acc, number) => acc * number));
}
function add(numbers) {
	return twoDecimals(numbers.reduce((acc, number) => acc + number));
}

function twoDecimals(number) {
	return Math.round((number + Number.EPSILON) * 100) / 100;
}
