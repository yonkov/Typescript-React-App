import React, { useState, Fragment, useEffect } from 'react';
import { render } from 'react-dom';
import ListOfPosts from './components/post-loop';
import Details from './components/details'
import {FetchPosts} from './data'
import { HashRouter as Router, BrowserRouter, Route, withRouter, useRouteMatch, Link, Switch } from 'react-router-dom'

function App() {
	/**
	 * State of content vs excerpt display
	 * Putting it here to demonstrate passing change handlers
	 */
	const [showContent, toggleShowContent] = useState<boolean | null>(null);

	return (
			<div className="App">
			<Switch>
				<Route path='/' exact>
					<ListOfPosts
						posts={FetchPosts()}
						showContent={showContent}
						toggleShowContent={toggleShowContent}
					/>
				</Route>
				<Route path="/post/:id">
          <Details
          posts={FetchPosts()}
          showContent={showContent}
          toggleShowContent={toggleShowContent}
        />
				</Route>
			</Switch>
			</div>
	);
}

export default withRouter(App)
