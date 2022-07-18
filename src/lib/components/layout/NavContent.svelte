<script lang="ts">
	import { Stack, Button, Divider, Text } from '@svelteuidev/core';
    import { connected, selectedAccount } from 'svelte-web3';

    import { goto } from '$app/navigation'
</script>

<Stack spacing="xs">
    <Button variant="light" color="gray" ripple on:click={() => {goto("/")}}>
        Home
    </Button>
    <Button variant="light" color="gray" ripple on:click={() => {goto("/")}}>
        Chain Overview
    </Button>

    <Divider label='Search' labelPosition='center' />
    <Button variant="light" color="gray" ripple on:click={() => {goto("/block/search")}}>
        Block Search
    </Button>
    <Button variant="light" color="gray" ripple on:click={() => {goto("/address/search")}}>
        Address Search
    </Button>
    <Button variant="light" color="gray" ripple on:click={() => {goto("/transaction/search")}}>
        Transaction Search
    </Button>

    <Divider label='Utilities' labelPosition='center' />
    <Button variant="light" color="gray" ripple on:click={() => {goto("/address/checksum")}}>
        Address Checksum
    </Button>

    
    {#if $connected}
    <Divider label='My Account' labelPosition='center' />
    <Button variant="light" color="gray" ripple on:click={() => {goto("/address/" + $selectedAccount)}}>
        Balance
    </Button>
    {/if}
</Stack>