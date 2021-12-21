/**
 * Display A Blog Post
 *
 * @param props
 */
 import { Fragment } from 'react';
 import BlogPost from './single-post'
 import { Link, useRouteMatch } from 'react-router-dom';


 import Post from './../shared/interfaces/post'

 const Details = (props: { 
     posts: Array<Post>,
     showContent: boolean, 
     toggleShowContent: (enable: boolean) => void,
    }) => {

        let isMatch:any = useRouteMatch("/post/:id");
        console.log(isMatch.params.id);
	const { posts, showContent} = props;

    const post = posts.find(post => post.id == isMatch.params.id);

	function createMarkup(markup: string) {
		return { __html: markup };
	}
	return (
		<article id={`post-${post.id}`}>
			<h1>{post.title.rendered}</h1>
			<p>Published {(post.date)}</p>
			<div>
				<div dangerouslySetInnerHTML={createMarkup(post.content.rendered)} />
			</div>
		</article>
        
	);
};

export default Details