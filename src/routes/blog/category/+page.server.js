export const load = async ({ url, fetch }) => {
	try {
		const res = await fetch(`${url.origin}/api/posts.json`);
		if (!res.ok) {
			throw new Error(`Failed to fetch posts: ${res.status}`);
		}

		let posts = await res.json();
		console.log('Fetched posts:', posts);

		let uniqueCategories = {};

		if (posts && Array.isArray(posts)) {
			posts.forEach((post) => {
				if (post && post.categories && Array.isArray(post.categories)) {
					post.categories.forEach((category) => {
						if (category) {
							if (uniqueCategories.hasOwnProperty(category)) {
								uniqueCategories[category].count += 1;
							} else {
								uniqueCategories[category] = {
									title: category,
									count: 1
								};
							}
						}
					});
				}
			});
		}

		const sortedUniqueCategories = Object.values(uniqueCategories).sort(
			(a, b) => a.title > b.title
		);
		console.log('Sorted categories:', sortedUniqueCategories);

		return {
			uniqueCategories: sortedUniqueCategories
		};
	} catch (error) {
		console.error('Error in category page load:', error);
		return {
			uniqueCategories: []
		};
	}
};
