<script lang="ts">
	export let data;
	let user = data.user;
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<section class="page-px section-py">
	<h1 class="text-4xl">About</h1>
	<p class="text-2xl">
		Hello again, {user.email}. This is another page you can navigate to when you are authenticated.
	</p>
	<p class="text-2xl">This page can not be accessed if you are not authenticated.</p>
</section>
