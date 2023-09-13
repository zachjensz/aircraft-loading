<script>
	import {
		emptyWeight,
		emptyArm,
		frontWeight,
		frontArm,
		fuelWeight,
		fuelArm,
		rearWeight,
		rearArm,
		baggageWeight,
		baggageArm
	} from '$lib/loadingData.ts';

	$: totalWeight = twoDecimals(
		$emptyWeight + $frontWeight + $fuelWeight + $rearWeight + $baggageWeight
	);
	$: totalMoment = twoDecimals(
		moment($emptyWeight, $emptyArm) +
			moment($frontWeight, $frontArm) +
			moment($fuelWeight, $fuelArm) +
			moment($rearWeight, $rearArm) +
			moment($baggageWeight, $baggageArm)
	);

	function moment(weight, arm) {
		return twoDecimals(weight * arm);
	}
	function twoDecimals(number) {
		return Math.round((number + Number.EPSILON) * 100) / 100;
	}
</script>

<h1>Piper Warrior Weight and Balance Calculator</h1>
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
		<td><output id="empty-moment">{moment($emptyWeight, $emptyArm)}</output></td>
	</tr>
	<tr>
		<th>Front Seats</th>
		<td><input id="front-weight" type="number" bind:value={$frontWeight} /></td>
		<td><input id="front-arm" type="number" bind:value={$frontArm} /></td>
		<td><output id="front-moment">{moment($frontWeight, $frontArm)}</output></td>
	</tr>
	<tr>
		<th>Fuel</th>
		<td><input id="fuel-weight" type="number" bind:value={$fuelWeight} /></td>
		<td><input id="fuel-arm" type="number" bind:value={$fuelArm} /></td>
		<td><output id="fuel-moment">{moment($fuelWeight, $fuelArm)}</output></td>
	</tr>
	<tr>
		<th>Rear Seats</th>
		<td><input id="rear-weight" type="number" bind:value={$rearWeight} /></td>
		<td><input id="rear-arm" type="number" bind:value={$rearArm} /></td>
		<td><output id="rear-moment">{moment($rearWeight, $rearArm)}</output></td>
	</tr>
	<tr>
		<th>Baggage</th>
		<td><input id="baggage-weight" type="number" bind:value={$baggageWeight} /></td>
		<td><input id="baggage-arm" type="number" bind:value={$baggageArm} /></td>
		<td><output id="baggage-moment">{moment($baggageWeight, $baggageArm)}</output></td>
	</tr>
	<tr>
		<th>Total</th>
		<td><output>{totalWeight}</output></td>
		<td><output>{twoDecimals(totalMoment / totalWeight)}</output></td>
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
		width: 16ch;
		height: 1.2em;
		padding: 0.2em;
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
