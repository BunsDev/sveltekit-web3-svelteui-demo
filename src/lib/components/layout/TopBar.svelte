<script lang="ts">
	import { Group, ActionIcon, Text, Anchor, Burger, Tooltip } from '@svelteuidev/core';
	import { Sun, Moon, GithubLogo } from 'radix-icons-svelte';
	import { useOs, hotkey } from '@svelteuidev/composables';
	import { mobile } from '$lib/stores';
	import MetaMaskButton from './MetaMaskButton.svelte';
	import AccountDropdown from './AccountDropdown.svelte';

	const os = useOs();
	const mod = os === 'macos' ? '⌘' : 'ctrl';

	export let isDark: boolean;
	export let opened: boolean;
	export let toggle: () => void;
	export let toggleOpen: () => void;

	$: iconColor = isDark ? 'white' : 'black';
</script>

<Group override={{ height: '100%', px: 20 }} position="apart">
	<Burger {opened} on:click={toggleOpen} override={{ d: 'block', '@md': { d: 'none' } }} />

	{#if !$mobile}
		<Anchor
			underline={false}
			href="/"
			override={{ '&:hover': { textDecoration: 'none !important' } }}
		>
			<Group>
				<Text size="xl" override={{ d: 'none', '@sm': { d: 'block' } }}>SvelteKit Web3 Demo</Text>
			</Group>
		</Anchor>
	{/if}

	<Group>
		<Tooltip withArrow label="GitHub">
			<ActionIcon
				root="a"
				variant="default"
				size={30}
				href="https://github.com/smartgoo/sveltekit-web3-demo"
				external
			>
				<GithubLogo color={iconColor} />
			</ActionIcon>
		</Tooltip>
		<Tooltip withArrow label={`${mod} + J`}>
			<ActionIcon variant="default" on:click={toggle} size={30}>
				<div use:hotkey={[['mod+J', () => toggle()]]} />
				{#if isDark}
					<Moon />
				{:else}
					<Sun />
				{/if}
			</ActionIcon>
		</Tooltip>

		<AccountDropdown />

		{#if !$mobile}
			<MetaMaskButton />
		{/if}
	</Group>
</Group>
