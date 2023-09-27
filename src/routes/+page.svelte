<script>
	import ContactForm from './../lib/components/ContactForm.svelte';
	import Section from '$lib/components/Section.svelte';
	import Posts from '$lib/components/Posts.svelte';
	import { headerHeight } from '../stores.js';
	export let data;
</script>

<Section navId={'posts'} style="margin-top: -{$headerHeight}px;">
	<Posts {data} />
</Section>

<Section navId={'resume'}>
	<h2>Resume</h2>
</Section>

<Section navId={'hobbies'}>
	<h2>Hobbies</h2>
</Section>

<Section navId={'contact'}>
	<h2>Contact</h2>
	<ContactForm />
</Section>
