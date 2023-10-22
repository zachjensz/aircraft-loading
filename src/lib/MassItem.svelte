<script>
	import { currentAircraft } from '$lib/loadingData.ts';

	export let massIndex;
	$: mass = $currentAircraft.masses[massIndex];

	function twoFrac(number) {
		return Math.round((number + Number.EPSILON) * 100) / 100;
	}
</script>

<tr>
	<th>{mass.name}</th>
	<td
		><input
			id={`${mass.name}-weight`}
			type="number"
			bind:value={mass.weightPounds}
		/></td
	>
	<td
		><input
			id={`${mass.name}-arm`}
			type="number"
			bind:value={mass.armInches}
		/></td
	>
	<td
		><output id={`${mass.name}-moment`}
			>{twoFrac(mass.weightPounds * mass.armInches)}</output
		></td
	>
</tr>
