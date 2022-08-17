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
	<Grid.Col override={{ minHeight: '136px' }}>
		<Card>
			<Text weight={'bold'}>Block Hash:</Text>
			<Text class="whitespace-normal" mb="lg">{blockData.hash}</Text>

			<Text weight={'bold'}>Block Time (UTC):</Text>
			<Text class="whitespace-normal" mb="lg">{new Date(blockData.timestamp * 1000).toUTCString()}</Text>

			<Text weight={'bold'}>Transaction Count:</Text>
			<Text class="whitespace-normal" mb="lg">{blockData.transactions.length}</Text>

			<Text weight={'bold'}>Gas Used:</Text>
			<Text class="whitespace-normal" mb="lg">{blockData.gasUsed}</Text>

			<Text weight={'bold'}>Gas Limit:</Text>
			<Text class="whitespace-normal" mb="lg">{blockData.gasLimit}</Text>
		</Card>
	</Grid.Col>
</Grid>