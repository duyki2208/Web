eexport const load = async ({ url, fetch }) => {
	try {
		const res = await fetch(`${url.origin}/api/posts.json`);

		if (!res.ok) {
			console.error("Failed to fetch posts.json:", res.status);
			return { uniqueCategories: [] };
		}

		const posts = await res.json();

		if (!Array.isArray(posts)) {
			console.error("Invalid posts data format");
			return { uniqueCategories: [] };
		}

		const uniqueCategories = {};

		posts.forEach(post => {
			if (Array.isArray(post.categories)) {
				post.categories.forEach(category => {
					if (uniqueCategories.hasOwnProperty(category)) {
						uniqueCategories[category].count += 1;
					} else {
						uniqueCategories[category] = {
							title: category,
							count: 1
						};
					}
				});
			}
		});

		const sortedUniqueCategories = Object.values(uniqueCategories).sort((a, b) =>
			a.title.localeCompare(b.title)
		);

		return {
			uniqueCategories: sortedUniqueCategories
		};
	} catch (error) {
		console.error("Error in load function:", error);
		return {
			uniqueCategories: []
		};
	}
};
