<script context="module">
	export async function load({ params, fetch }) {
		let block = params.block;

		let apiEndpoint = `/api/block/${block}`
		let fetchblockData = await fetch(apiEndpoint);
		let blockData = await fetchblockData.json()

		return {
			props: {
				block: block,
				blockData: blockData
			}
		};
	}
</script>

<script lang="ts">
	import { Grid, Card, Title, Text } from '@svelteuidev/core';

	export let block: string;

	type blockData = {
		hash: string,
		timestamp: number,
		transactions: Array<Object>,
		gasUsed: number,
		gasLimit: number
	}
	export let blockData: blockData;
</script>

<Title order={2} mb="$xl">Block {block}</Title>

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
