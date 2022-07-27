<script>
	import { aboutCopy } from '$lib/data.js';
	import pole from '$lib/pole.svg';
</script>

<aside>
	<h3>Business</h3>
	{#each aboutCopy.business as { title, text }}
		<div>
			<img class="barberPole poleSwitch" src={pole} alt="Barber Pole" />
			<h3>{title}</h3>
			<p>
				{text}
			</p>
		</div>
	{/each}
</aside>

<style>
	aside {
		display: flex;
		justify-content: space-around;
		align-items: flex-start;
		text-align: left;
		margin: 0 auto;
	}
	div {
		max-width: 90%;
	}
	h3 {
		text-align: center;
	}
	.poleSwitch {
		display: none;
	}
	@media (min-width: 320px) {
		aside {
			flex-direction: column;
			justify-content: center;
			align-items: center;
			text-align: center;
		}
		h3 {
			margin: 0;
		}
	}
	@media (min-width: 768px) {
		aside {
			flex-direction: row;
			align-items: flex-start;
			max-width: 90%;
		}
		.poleSwitch {
			display: inline-block;
		}
	}
	@media (min-width: 1440px) {
		div {
			width: 40%;
		}
	}
</style>
