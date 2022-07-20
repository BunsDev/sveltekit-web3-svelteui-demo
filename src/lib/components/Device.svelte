<script context="module">
	import { screenH, screenW, mobileThreshold, mobile, scrollY, mouse } from '$lib/stores';

	const mouseMove = (e) => {
		mouse.update(() => ({ x: e.clientX, y: e.clientY }));
	};
</script>

<svelte:window
	on:mousemove={(e) => mouseMove(e)}
	bind:innerHeight={$screenH}
	bind:innerWidth={$screenW}
	bind:scrollY={$scrollY}
/>
