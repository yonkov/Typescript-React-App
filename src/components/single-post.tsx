/**
 * Display A Blog Post
 *
 * @param props
 */

 import Post from './../shared/interfaces/post'

 const BlogPost = (props: { 
        post: Post; 
        showContent: boolean 
    }) => {
	const { post, showContent } = props;

	function createMarkup(markup: string) {
		return { __html: markup };
	}
	return (
		<article id={`post-${post.id}`}>
			<h1>{post.title.rendered}</h1>
			<p>Published {(post.date)}</p>
			<div>
				{showContent ? (
					<div dangerouslySetInnerHTML={createMarkup(post.content.rendered)} />
				) : (
					<div dangerouslySetInnerHTML={createMarkup(post.excerpt.rendered)} />
				)}
			</div>
		</article>
	);
};

export default BlogPost