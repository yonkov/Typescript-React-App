/**
 * Interface for post title, content and excerpt
 */
 interface ContentObject {
	//This property is always present
	rendered: string;
	//This property is only present in some contexts
	raw?: string;
}

/**
 * Interface for describing post title
 */
interface PostTitle extends ContentObject {}
/**
 * Interface for describing post content
 */
interface PostContent extends ContentObject {}
/**
 * Interface for describing post content
 */
interface PostExcerpt extends ContentObject {}

/**
 * Interface describing a WordPress post
 */
export default interface Post {
	title: PostTitle;
	content: PostContent;
	excerpt: PostExcerpt;
	date: string;
	id: number;
}