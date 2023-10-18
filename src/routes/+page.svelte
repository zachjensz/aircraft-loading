<script>
	import MassItem from '$lib/MassItem.svelte';
	import { currentAircraft } from '$lib/loadingData.ts';

	$: totalWeight = twoFrac(
		$currentAircraft.masses.reduce((acc, mass) => acc + mass.weightPounds, 0)
	);
	$: totalMoment = twoFrac(
		$currentAircraft.masses.reduce(
			(acc, mass) => acc + mass.weightPounds * mass.armInches,
			0
		)
	);
	$: totalArm = twoFrac(totalMoment / totalWeight);

	function twoFrac(number) {
		return Math.round((number + Number.EPSILON) * 100) / 100;
	}
</script>

<h1>Aircraft Loading Calculator</h1>
<table>
	<tr>
		<th />
		<th>Weight (lb)</th>
		<th>Arm (in)</th>
		<th>Moment (lb.in)</th>
	</tr>
	{#each $currentAircraft.masses as mass}
		<MassItem {mass} />
	{/each}
	<tr>
		<th>Total</th>
		<td><output>{totalWeight}</output></td>
		<td><output>{totalArm}</output></td>
		<td>
			<output>{totalMoment}</output>
		</td>
	</tr>
</table>

<style>
	input,
	output {
		all: unset;
		display: block;
		width: 14ch;
		height: 1.2em;
		padding: 0.2em 0.4em;
		margin-block: 0.2em;
		border: 1px solid var(--c-border);
	}
	th {
		font-weight: unset;
		text-align: unset;
	}
	th:first-child {
		padding-inline-end: 1rem;
	}
</style>
