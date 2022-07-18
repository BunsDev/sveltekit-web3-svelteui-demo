<script>
	import { TextInput, Card, Text, Button } from '@svelteuidev/core';
	import { web3 } from 'svelte-web3';
	import { goto } from '$app/navigation';

	let input = '';
	let errors = '';

	const search = () => {
		let isAddress = $web3.utils.isAddress(input);

		if (isAddress) {
			input = $web3.utils.toChecksumAddress(input);
			goto('/address/' + input);
		} else {
			errors = 'Invalid address entered. Please enter a valid EVM address.';
		}
	};
</script>

<Card p="lg">
	<TextInput
		bind:value={input}
		label="Address Search"
		description="Retrieve balance and information for a given address."
		placeholder="Enter Address"
		override={{ mb: '$4' }}
	/>
	<Button on:click={search} ripple>Submit</Button>

	{#if errors}
		<Text color="red" override={{ mt: '$4' }}>{errors}</Text>
	{/if}
</Card>
