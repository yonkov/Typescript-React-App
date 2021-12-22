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
    const postUrl = post._embedded['wp:featuredmedia'] ? post._embedded['wp:featuredmedia']['0'].source_url : '';
    
    function createMarkup(markup: string) {
        return { __html: markup };
    }
    return (
        <article id={`post-${post.id}`}>
        {postUrl && 
            <Link to={"/post/" + post.id}>
                <div className="post-thumbnail">
                    <img src={postUrl} />
                </div>
            </Link>}
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