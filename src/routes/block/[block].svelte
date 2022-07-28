<script context="module">
	export async function load({ params, fetch }) {
		let blockNumber = params.block;

		let apiEndpoint = `/api/block/${blockNumber}`
		let fetchblockData = await fetch(apiEndpoint);
		let blockData = await fetchblockData.json()

		return {
			props: {
				blockNumber: blockNumber,
				blockData: blockData
			}
		};
	}
</script>

<script lang="ts">
	import { Grid, Card, Title, Text } from '@svelteuidev/core';
	import type { Block } from '$lib/types/Block'

	export let blockNumber: string;
	export let blockData: Block;
</script>

<Title order={2} mb="$xl">Block {blockNumber}</Title>

<Grid>
	<Grid.Col md={6} lg={6} override={{ minHeight: '136px' }}>
		<Card p="lg">
			<Text weight={'bold'} mb="xs">Block Hash:</Text>
			<Text class="whitespace-normal">{blockData.hash}</Text>
		</Card>
	</Grid.Col>

	<Grid.Col md={6} lg={6} override={{ minHeight: '136px' }}>
		<Card p="lg">
			<Text weight={'bold'} mb="xs">Block Time (UTC):</Text>
			{new Date(blockData.timestamp * 1000).toUTCString()}
		</Card>
	</Grid.Col>

	<Grid.Col md={6} lg={6} override={{ minHeight: '136px' }}>
		<Card p="lg">
			<Text weight={'bold'} mb="xs">Transaction Count:</Text>
			{blockData.transactions.length}
		</Card>
	</Grid.Col>

	<Grid.Col md={6} lg={6} override={{ minHeight: '136px' }}>
		<Card p="lg">
			<Text weight={'bold'} mb="xs">Gas:</Text>
			Used: {blockData.gasUsed}
			<br />
			Limit: {blockData.gasLimit}
		</Card>
	</Grid.Col>
</Grid>
