<script>
	import '../lib/assets/css/app.css';
	import { SvelteUIProvider, fns, AppShell, Navbar, Header, Container } from '@svelteuidev/core';
	import TopBar from '$lib/components/layout/TopBar.svelte';
	import SideBar from '$lib/components/layout/SideBar.svelte';
	import Device from '$lib/components/Device.svelte'

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
		<Navbar slot="navbar" hidden={!opened} width={{ base: 300 }} override={{ p: '$mdPX' }}>
			<SideBar />
		</Navbar>

		<Header slot="header" height={60} override={{ p: '$mdPX' }}>
			<TopBar {isDark} {opened} toggle={toggleTheme} toggleOpen={toggleOpened} />
		</Header>

		<Container override={{ minSize: '90vh', py: '$lgPX' }}>
			<slot />
		</Container>
	</AppShell>
</SvelteUIProvider>
