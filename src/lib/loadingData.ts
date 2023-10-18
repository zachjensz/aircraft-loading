import { localStore } from './localStore.ts';
import { derived } from 'svelte/store';
import { aircraft as DEFAULT_AIRCRAFT } from './loadingDataDefaults.ts';

export const currentAircraft = localStore('currentAircraft', DEFAULT_AIRCRAFT);
export const totalWeight = derived(currentAircraft, ($currentAircraft) =>
	twoFrac(
		$currentAircraft.masses.reduce((acc, mass) => acc + mass.weightPounds, 0)
	)
);
export const totalMoment = derived(currentAircraft, ($currentAircraft) =>
	twoFrac(
		$currentAircraft.masses.reduce(
			(acc, mass) => acc + mass.weightPounds * mass.armInches,
			0
		)
	)
);
export const totalArm = derived(currentAircraft, ($currentAircraft) =>
	twoFrac(
		$currentAircraft.masses.reduce(
			(acc, mass) => acc + mass.weightPounds * mass.armInches,
			0
		) /
			$currentAircraft.masses.reduce((acc, mass) => acc + mass.weightPounds, 0)
	)
);

function twoFrac(number) {
	return Math.round(number * 100) / 100;
}
