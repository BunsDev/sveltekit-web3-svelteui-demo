<script lang="ts">
	import { Group, ActionIcon, Text, Anchor, Burger, Tooltip, Button, Menu } from '@svelteuidev/core';
	import { Sun, Moon, GithubLogo, Person, LinkBreak1 } from 'radix-icons-svelte';
	import { useOs, hotkey } from '@svelteuidev/composables';
	import { defaultEvmStores, connected, selectedAccount } from 'svelte-web3';

	const os = useOs();
	const mod = os === 'macos' ? '⌘' : 'ctrl';

	const connectMetaMask = () => { defaultEvmStores.setProvider() }
	const disconnectMetaMask = () => { defaultEvmStores.disconnect() }

	export let isDark: boolean;
	export let opened: boolean;
	export let toggle: () => void;
	export let toggleOpen: () => void;

	$: iconColor = isDark ? 'white' : 'black'
</script>

<Group override={{ height: '100%', px: 20 }} position="apart">
	<Burger {opened} on:click={toggleOpen} override={{ d: 'block', '@sm': { d: 'none' } }} />
	<Anchor
		underline={false}
		href="/"
		override={{ '&:hover': { textDecoration: 'none !important' } }}
	>
		<Group>
			<Text size="xl" override={{ d: 'none', '@sm': { d: 'block' } }}>SvelteKit Web3 Demo</Text>
		</Group>
	</Anchor>
	<Group>
		<Tooltip withArrow label="GitHub">
			<ActionIcon
				root="a"
				variant="default"
				size={30}
				href="https://github.com/svelteuidev/svelteui"
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
		{#if $connected}
			<Tooltip withArrow label="{$selectedAccount}">
				<ActionIcon
					root="a"
					variant="default"
					size={30}
					href="/profile"
				>
					<Person color={iconColor} />
				</ActionIcon>
			</Tooltip>
			<Menu trigger='hover' delay={500}>
				<Menu.Label>Account</Menu.Label>
				<Menu.Item icon={Person}>My Account</Menu.Item>
				<Menu.Item color="red" icon={LinkBreak1} on:click={disconnectMetaMask}>Disconnect MM</Menu.Item>
			</Menu>
		{:else}
			<Button color="orange" on:click={connectMetaMask}>
				Connect MetaMask
			</Button>
		{/if}
	</Group>
</Group>