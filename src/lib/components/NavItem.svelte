<script>
	import { currentPage } from '$lib/assets/js/store.js';

	export let href;
	export let children;

	$: isCurrentPage = $currentPage.startsWith(href);
</script>

<a {href} class:active={isCurrentPage}>
	<slot />
</a>
