<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('https://jsonplaceholder.typicode.com/posts');
		const guides = await res.json();
		if (res.ok) {
			return {
				status: 200,
				props: {
					guides
				}
			};
		}
		return {
			status: res.status,
			error: new Error('Could not fetch the guides')
		};
	}
</script>

<script>
	import '../styles/global.css';
	export let guides;
</script>

<svelte:head>
	<title>Home | HispanicHackers</title>
</svelte:head>

<div>
	<hr />
	<ul>
		<h1>Events</h1>
		{#each guides as guide}
			<h3>{guide.title}</h3>
			<p>{guide.body}</p>
		{/each}
	</ul>
	<hr />
</div>
