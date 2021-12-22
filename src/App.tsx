import React, { useState, Fragment, useEffect } from 'react';
import { render } from 'react-dom';
import ListOfPosts from './components/post-loop';
import Details from './components/post-content'
import { FetchPostsPerPage } from './data'
import { Route, withRouter, useRouteMatch, Link, Switch } from 'react-router-dom'
import './scss/App.scss'

function App() {

	const [pageNum, setPageNum] = useState<number>(1);
	const maxNumberOfPosts = 100;

	const loadMoreItems = () => {
		setPageNum(pageNum + 1);
	}

	return (
		<div className="wrapper">
			<header><h1 className="site-title">My Awesome Typescript - React App</h1></header>
			<Switch>
				<Route path='/' exact>
					<ListOfPosts
						posts={FetchPostsPerPage(pageNum)}
					/>
					{FetchPostsPerPage(pageNum).length < maxNumberOfPosts && <button className="m-auto" onClick={loadMoreItems}>Load more</button>}
				</Route>
				<Route path="/post/:id">
					<Details/>
				</Route>
			</Switch>
		</div>
	);
}

export default App
