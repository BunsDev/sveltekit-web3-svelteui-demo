<script>
	import '../lib/assets/css/app.css';
	import { SvelteUIProvider, fns, AppShell, Navbar, Header, Container } from '@svelteuidev/core';
	import TopBar from '$lib/components/layout/TopBar.svelte';
	import SideBar from '$lib/components/layout/SideBar.svelte';
	import Device from '$lib/components/Device.svelte';

	let isDark = false;
	let opened = false;

	function toggleTheme() {
		isDark = !isDark;
	}
	function toggleOpened() {
		opened = !opened;
	}
</script>

<Device />

<SvelteUIProvider ssr withGlobalStyles themeObserver={isDark ? 'dark' : 'light'}>
	<AppShell
		override={{
			main: { bc: isDark ? fns.themeColor('dark', 8) : fns.themeColor('gray', 0) }
		}}
	>
		<Header slot="header" height={60} override={{ p: '$mdPX' }}>
			<TopBar {isDark} {opened} toggle={toggleTheme} toggleOpen={toggleOpened} />
		</Header>

		<Navbar
			slot="navbar"
			width={{
				sm: 300,
				base: '100vw'
			}}
			hidden={!opened}
			override={{ p: '$mdPX', position: 'fixed', '@md': { position: 'static' } }}
		>
			<SideBar />
		</Navbar>

		<Container override={{ minHeight: '90vh', py: '$lgPX' }}>
			<slot />
		</Container>
	</AppShell>
</SvelteUIProvider>
