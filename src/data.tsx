import { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './shared/interfaces/post'


export function FetchPosts(){

	/**
	 * Put posts in state
	 */
	const [posts, setPosts] = useState<Array<Post> | null>([]);

	/**
	 * Get posts via remote API
	 */
	const url = 'https://try-pliska.nasiothemes.com/wp-json/wp/v2/posts?_embed';
	useEffect(() => {
		axios(url).then(r => {
			setPosts(r.data);
		});
	}, [url]);

    return posts

}