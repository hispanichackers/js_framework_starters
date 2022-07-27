<script>
	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
	import '../styles/global.css';
</script>

<main>
    <Header />
    <slot />
    <Footer />
</main>