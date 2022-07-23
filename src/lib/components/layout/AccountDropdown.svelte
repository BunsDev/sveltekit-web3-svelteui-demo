<script lang="ts">
    import { defaultEvmStores, connected, selectedAccount } from 'svelte-web3';
    import { Menu } from '@svelteuidev/core';
    import { Person, LinkBreak1 } from 'radix-icons-svelte';
    import { friendlyAddress } from '$lib/helpers/friendlyAddress';

    const disconnectMetaMask = () => {
		defaultEvmStores.disconnect();
	};

    export let isDark: boolean; // TODO lang="ts" and store isDark in Svelte Store
    
    $: iconColor = isDark ? 'white' : 'black';
    $: friendlySelectedAccount = $connected ? friendlyAddress($selectedAccount) : "";
</script>

{#if $connected}
    <!-- <Tooltip withArrow label={$selectedAccount}>
        <ActionIcon root="a" variant="default" size={30} href="/profile">
            <Person color={iconColor} />
        </ActionIcon>
    </Tooltip> -->

    <Menu trigger="hover" delay={500}>
        <Menu.Label>Account: {friendlySelectedAccount}</Menu.Label>
        <Menu.Item icon={Person}>My Account</Menu.Item>
        <Menu.Item color="red" icon={LinkBreak1} on:click={disconnectMetaMask}
            >Disconnect MM</Menu.Item
        >
    </Menu>
{/if}