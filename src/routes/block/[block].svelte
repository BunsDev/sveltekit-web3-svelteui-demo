<script context="module">
	export async function load({ params }) {
		let block = params.block;

		return {
			props: {
				block: block
			}
		};
	}
</script>

<script lang="ts">
	import { Grid, Card, Title, Text, Loader } from '@svelteuidev/core';
	import { web3, connected } from 'svelte-web3';

	export let block: string;

	$: blockData = $connected ? $web3.eth.getBlock(block) : 'Connect MetaMask';
</script>

<Title order={2} mb="$xl">Block {block}</Title>

<Grid>
	<Grid.Col md={6} lg={6} override={{ minHeight: '136px' }}>
		<Card p="lg">
			<Text weight={'bold'} mb="xs">Block Hash:</Text>
			{#await blockData}
				<Loader size="sm" />
			{:then value}
				<Text class="whitespace-normal">{value.hash}</Text>
			{/await}
		</Card>
	</Grid.Col>

	<Grid.Col md={6} lg={6} override={{ minHeight: '136px' }}>
		<Card p="lg">
			<Text weight={'bold'} mb="xs">Block Time (UTC):</Text>
			{#await blockData}
				<Loader size="sm" />
			{:then value}
				{new Date(value.timestamp * 1000).toUTCString()}
			{/await}
		</Card>
	</Grid.Col>

	<Grid.Col md={6} lg={6} override={{ minHeight: '136px' }}>
		<Card p="lg">
			<Text weight={'bold'} mb="xs">Transaction Count:</Text>
			{#await blockData}
				<Loader size="sm" />
			{:then value}
				{value.transactions.length}
			{/await}
		</Card>
	</Grid.Col>

	<Grid.Col md={6} lg={6} override={{ minHeight: '136px' }}>
		<Card p="lg">
			<Text weight={'bold'} mb="xs">Gas:</Text>
			{#await blockData}
				<Loader size="sm" />
			{:then value}
				Used: {value.gasUsed}
				<br />
				Limit: {value.gasLimit}
			{/await}
		</Card>
	</Grid.Col>
</Grid>
