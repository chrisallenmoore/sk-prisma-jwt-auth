<script lang="ts">
	export let data;
	let user = data.user;
</script>

<svelte:head>
	<title>Dashboard</title>
</svelte:head>

<section class="page-px section-py">
	<h1 class="text-4xl">Dashboard</h1>
	<p class="text-2xl">
		Hello, {user.email}. This page is guarded and is only be accessible to authenticated users.
	</p>
</section>
