<script>
	export let mass;
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
</style>
