<script>
	import { currentAircraft } from '$lib/loadingData.ts';

	export let massIndex;

	function twoFrac(number) {
		return Math.round((number + Number.EPSILON) * 100) / 100;
	}
</script>

<tr>
	<th>{$currentAircraft.masses[massIndex].name}</th>
	<td
		><input
			id={`${$currentAircraft.masses[massIndex].name}-weight`}
			type="number"
			bind:value={$currentAircraft.masses[massIndex].weightPounds}
		/></td
	>
	<td
		><input
			id={`${$currentAircraft.masses[massIndex].name}-arm`}
			type="number"
			bind:value={$currentAircraft.masses[massIndex].armInches}
		/></td
	>
	<td
		><output id={`${$currentAircraft.masses[massIndex].name}-moment`}
			>{twoFrac(
				$currentAircraft.masses[massIndex].weightPounds *
					$currentAircraft.masses[massIndex].armInches
			)}</output
		></td
	>
</tr>
