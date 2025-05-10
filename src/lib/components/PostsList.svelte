<script>
	export let posts = [];
</script>

<ul class="posts-list">
	{#each posts as post}
		<li>
			<a href="/blog/{post.slug}">
				{#if post.coverImage}
					<img
						src={post.coverImage}
						alt=""
						style="aspect-ratio: {post.coverWidth} / {post.coverHeight};"
						width={post.coverWidth}
						height={post.coverHeight}
					/>
				{/if}
				<div class="post-meta">
					<h2>{post.title}</h2>
					<p>{post.excerpt}</p>
					<time datetime={post.date}>{post.date}</time>
				</div>
			</a>
		</li>
	{/each}
</ul>