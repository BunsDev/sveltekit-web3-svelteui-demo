<script>
    import { defaultEvmStores, connected, selectedAccount } from 'svelte-web3';
    import { Button } from '@svelteuidev/core';

    const connectMetaMask = () => {
		defaultEvmStores.setProvider();
	};
</script>

{#if $connected != true}
<Button color="orange" on:click={connectMetaMask}>Connect MM</Button>
{/if}