<script>
	import {
		emptyWeight,
		emptyArm,
		emptyMoment,
		frontWeight,
		frontArm,
		frontMoment,
		fuelWeight,
		fuelArm,
		fuelMoment,
		rearWeight,
		rearArm,
		rearMoment,
		baggageWeight,
		baggageArm,
		baggageMoment,
		totalWeight,
		totalArm,
		totalMoment
	} from '$lib/loadingData.ts';
</script>

<h1>Aircraft Loading Calculator</h1>
<table>
	<tr>
		<th />
		<th>Weight (lb)</th>
		<th>Arm (in)</th>
		<th>Moment (lb.in)</th>
	</tr>
	<tr>
		<th>Empty Weight</th>
		<td><input id="empty-weight" type="number" bind:value={$emptyWeight} /></td>
		<td><input id="empty-arm" type="number" bind:value={$emptyArm} /></td>
		<td><output id="empty-moment">{$emptyMoment}</output></td>
	</tr>
	<tr>
		<th>Front Seats</th>
		<td><input id="front-weight" type="number" bind:value={$frontWeight} /></td>
		<td><input id="front-arm" type="number" bind:value={$frontArm} /></td>
		<td><output id="front-moment">{$frontMoment}</output></td>
	</tr>
	<tr>
		<th>Fuel</th>
		<td><input id="fuel-weight" type="number" bind:value={$fuelWeight} /></td>
		<td><input id="fuel-arm" type="number" bind:value={$fuelArm} /></td>
		<td><output id="fuel-moment">{$fuelMoment}</output></td>
	</tr>
	<tr>
		<th>Rear Seats</th>
		<td><input id="rear-weight" type="number" bind:value={$rearWeight} /></td>
		<td><input id="rear-arm" type="number" bind:value={$rearArm} /></td>
		<td><output id="rear-moment">{$rearMoment}</output></td>
	</tr>
	<tr>
		<th>Baggage</th>
		<td><input id="baggage-weight" type="number" bind:value={$baggageWeight} /></td>
		<td><input id="baggage-arm" type="number" bind:value={$baggageArm} /></td>
		<td><output id="baggage-moment">{$baggageMoment}</output></td>
	</tr>
	<tr>
		<th>Total</th>
		<td><output>{$totalWeight}</output></td>
		<td><output>{$totalArm}</output></td>
		<td>
			<output>{$totalMoment}</output>
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
		border: 1px solid #aaa;
	}
	th {
		font-weight: unset;
		text-align: unset;
	}
	th:first-child {
		padding-inline-end: 1rem;
	}
</style>
