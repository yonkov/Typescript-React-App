/**
 * Display A Blog Post
 *
 * @param props
 */
import { useRouteMatch } from 'react-router-dom';
import Post from '../shared/interfaces/post'

const Details = (props: {
    posts: Array<Post>,
}) => {

    const isMatch: any = useRouteMatch("/post/:id");
    const { posts } = props;
    const post = posts.find(post => post.id == isMatch.params.id);

    function createMarkup(markup: string) {
        return { __html: markup };
    }
    return (
        <article id={`post-${post.id}`}>
            <img src={post._embedded['wp:featuredmedia']['0'].source_url} />
            <h1>{post.title.rendered}</h1>
            <p>Published {(post.date)}</p>
            <div>
                <div dangerouslySetInnerHTML={createMarkup(post.content.rendered)} />
            </div>
        </article>

    );
};

export default Details