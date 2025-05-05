<script>
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { TextPlugin } from 'gsap/TextPlugin';
	// Remove SplitText import as it's no longer used
	// import { SplitText } from 'gsap/SplitText';

	// register GSAP plugins
	// Register only TextPlugin
	gsap.registerPlugin(TextPlugin);

	onMount(() => {
		// Remove SplitText initialization
		// const split = new SplitText('.title', { type: 'chars' });

		// create a timeline with a slight delay
		const tl = gsap.timeline({ delay: 0.5 });

			// typewriter effect for title
		tl.to(
			'.title',
			{
				duration: 2, // Adjust duration as needed
				text: { value: 'LionRampant.co.za', delimiter: '' },
				ease: 'none'
			}
		)
			// typewriter effect for subtitle, starting after the title animation
			.to(
				'.subtitle',
				{
					duration: 1.5,
					text: { value: 'Coming Soon', delimiter: '' },
					ease: 'none'
				},
				'-=0.5' // Adjust timing relative to the title animation
			);
	});
</script>

<!-- full-screen container with gradient background -->
<div
	class="relative flex h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800"
>
	<div class="space-y-4 text-center">
		<!-- animated gradient heading -->
		<!-- svelte-ignore a11y_missing_content -->
		<h1 class="title text-6xl leading-tight font-bold tracking-wider text-white">
		</h1>
		<!-- subtitle for typewriter animation -->
		<!-- svelte-ignore a11y_missing_content -->
		<h2
			class="subtitle text-white text-3xl font-bold"
		></h2>
	</div>
</div>
