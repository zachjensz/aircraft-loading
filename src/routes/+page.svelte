<script>
	import MassItem from '$lib/MassItem.svelte';
	import {
		currentAircraft,
		totalWeight,
		totalMoment,
		totalArm
	} from '$lib/loadingData.ts';
</script>

<table>
	<tr>
		<th />
		<th>Weight (lb)</th>
		<th>Arm (in)</th>
		<th>Moment (lb.in)</th>
	</tr>
	{#each $currentAircraft.masses as mass, massIndex}
		<MassItem {massIndex} />
	{/each}
	<tr>
		<th>Total</th>
		<td><output>{$totalWeight}</output></td>
		<td><output>{$totalArm}</output></td>
		<td>
			<output>{$totalMoment}</output>
		</td>
	</tr>
</table>
