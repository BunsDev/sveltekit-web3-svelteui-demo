<script>
	import { TextInput, Card, Text, Button } from '@svelteuidev/core';
	import { goto } from '$app/navigation';

	let input = '';
	let errors = '';

	const search = () => {
		goto(`/block/${input}`)
	}
</script>

<Card p="lg">
	<TextInput
		bind:value={input}
		type="number"
		label="Block Search"
		description="Retrieve information for a given block."
		placeholder="Enter Block"
		override={{ mb: '$4' }}
	/>

	<Button on:click={search} ripple>Submit</Button>

	{#if errors}
		<Text color="red" override={{ mt: '$4' }}>{errors}</Text>
	{/if}
</Card>
