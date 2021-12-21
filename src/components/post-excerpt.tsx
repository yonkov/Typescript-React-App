/**
 * Display A Blog Post
 *
 * @param props
 */
 import { Link } from 'react-router-dom';
import Post from '../shared/interfaces/post'

const BlogPost = (props: {
    post: Post;
}) => {
    const { post } = props;

    function createMarkup(markup: string) {
        return { __html: markup };
    }
    return (
        <article id={`post-${post.id}`}>
            <Link to={"/post/" + post.id}>
                <div className="post-thumbnail">
                    <img src={post._embedded['wp:featuredmedia']['0'].source_url} />
                </div>
            </Link>
                <div className="post-excerpt">
                    <Link to={"/post/" + post.id}><h2>{post.title.rendered}</h2></Link>
                    <p>Published {(post.date)}</p>
                    <div>
                        <div dangerouslySetInnerHTML={createMarkup(post.excerpt.rendered)} />
                    </div>
                </div>
        </article>
    );
};

export default BlogPost