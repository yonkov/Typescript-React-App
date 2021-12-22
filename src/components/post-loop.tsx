import Post from './../shared/interfaces/post'
import BlogPost from './post-excerpt'
import { Link } from 'react-router-dom';

/**
 * Display a list of posts
 *
 * @param props
 */

const ListOfPosts = (props: {
    posts: Array<Post>;
}) => {
    const { posts } = props;
    return (
        posts.length ?
        (<div>
            {posts.map((post: Post) => (
                <BlogPost key={post.id} post={post}></BlogPost>
            ))}
        </div>) :
        (<p className="text-center">Loading...</p>)
    );
};

export default ListOfPosts