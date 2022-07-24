<script>
	import { defaultEvmStores, connected } from 'svelte-web3';
	import { Button, Modal } from '@svelteuidev/core';

	const connectMetaMask = () => {
		if (typeof window.ethereum !== 'undefined') {
			defaultEvmStores.setProvider();
		} else {
			toggleOpen();
		}
	};

	let open = false;
	let toggleOpen = () => {
		open = !open;
	};
</script>

{#if $connected != true}
	<Button color="orange" on:click={connectMetaMask}>Connect MM</Button>
{/if}

<Modal
	opened={open}
	title="Connection Error!"
	closeOnClickOutside
	closeOnEscape
	withCloseButton
	on:close={toggleOpen}
>
	MetaMask not detected.
</Modal>
