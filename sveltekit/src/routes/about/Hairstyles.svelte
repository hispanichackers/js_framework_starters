<script>
	import { aboutCopy } from '$lib/data.js';
	import scissors from '$lib/scissors.svg';
</script>

<aside>
	<h3>Hairstyles</h3>
	<ul>
		{#each aboutCopy.hairstyles as hairstyle}
			<li>
				<img src={scissors} alt="Scissors" />
				{hairstyle}
			</li>
		{/each}
	</ul>
</aside>

<style>
	h3 {
		text-align: center;
	}
	ul {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		list-style: none;
		padding: 0;
	}
	li {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 2rem 0;
		width: 25%;
	}
	img {
		width: 15px;
		margin: 0 1rem;
	}
	@media (min-width: 320px) {
		li {
			flex-direction: column;
			width: 30%;
		}
	}
</style>
