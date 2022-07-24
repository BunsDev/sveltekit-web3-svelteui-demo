<script lang="ts">
	import { defaultEvmStores, connected, selectedAccount } from 'svelte-web3';
	import { Menu } from '@svelteuidev/core';
	import { Person, LinkBreak1 } from 'radix-icons-svelte';
	import { friendlyAddress } from '$lib/helpers/friendlyAddress';

	const disconnectMetaMask = () => {
		defaultEvmStores.disconnect();
	};

	$: friendlySelectedAccount = $connected ? friendlyAddress($selectedAccount) : '';
</script>

{#if $connected}
	<Menu trigger="hover" delay={500}>
		<Menu.Label>Account: {friendlySelectedAccount}</Menu.Label>
		<Menu.Item icon={Person}>My Account</Menu.Item>
		<Menu.Item color="red" icon={LinkBreak1} on:click={disconnectMetaMask}>Disconnect MM</Menu.Item>
	</Menu>
{/if}
