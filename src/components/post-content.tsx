/**
 * Display A Blog Post
 *
 * @param props
 */
import { useRouteMatch } from 'react-router-dom';
import Post from '../shared/interfaces/post'
import { useEffect } from 'react';
import {FetchPostById} from './../data'

const Details = () => {

    const match: any = useRouteMatch("/post/:id");
    const post:Post | '' = FetchPostById(match.params.id);

    useEffect(() => {
        window.scrollTo(0, 0);
     }, []);

    function createMarkup(markup: string) {
        return { __html: markup };
    }
    return (
        post ?  
        <article id={`post-${post.id}`}>
            {post._embedded['wp:featuredmedia'] &&
            <img src={post._embedded['wp:featuredmedia']['0'].source_url} />}
            <h1>{post.title.rendered}</h1>
            <p>Published {(post.date)}</p>
            <div>
                <div dangerouslySetInnerHTML={createMarkup(post.content.rendered)} />
            </div>
        </article> : 
        <p className="text-center">Loading...</p>

    );
};

export default Details