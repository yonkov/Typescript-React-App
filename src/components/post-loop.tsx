import { Fragment } from 'react';
import Post from './../shared/interfaces/post'
import BlogPost from './single-post'
import { Link } from 'react-router-dom';

/**
 * Display a list of posts
 *
 * @param props
 */

 const ListOfPosts = (props: {
	posts: Array<Post>;
	showContent: boolean;
	toggleShowContent: (enable: boolean) => void;
}) => {
	const { posts, showContent, toggleShowContent } = props;
	return (
		<div>
			<button
				onClick={(e: React.MouseEvent) => {
					e.preventDefault();
					toggleShowContent(!showContent);
				}}>
				Show Full Content
			</button>
			<Fragment>
				{posts.map((post: Post) => (
                    <>
                    <Link to={"/post/" + post.id}><BlogPost key={post.id} post={post} showContent={showContent} />
                    </Link>
                    </>
				))}
			</Fragment>
		</div>
	);
};

export default ListOfPosts