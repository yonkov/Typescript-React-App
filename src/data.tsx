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
	const url = 'https://www.newstatesman.com//wp-json/wp/v2/posts';
	useEffect(() => {
		axios(url).then(r => {
			setPosts(r.data);
		});
	}, [url]);

    return posts

}