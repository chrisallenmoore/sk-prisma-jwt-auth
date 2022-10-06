<script>
	import '../app.css';
	import AppHeader from '$lib/headers/AppHeader.svelte';
</script>

<AppHeader />
<main class="grow">
	<slot />
</main>
