import React, { useState, Fragment, useEffect } from 'react';
import { render } from 'react-dom';
import ListOfPosts from './components/post-loop';
import Details from './components/post-content'
import {FetchPosts} from './data'
import { Route, withRouter, useRouteMatch, Link, Switch } from 'react-router-dom'
import './scss/App.scss'

function App() {

	return (
			<div className="wrapper">
        <header><h1 className="site-title">My Awesome Typescript - React App</h1></header>
			<Switch>
				<Route path='/' exact>
					<ListOfPosts
						posts={FetchPosts()}
					/>
				</Route>
				<Route path="/post/:id">
          <Details
          posts={FetchPosts()}
        />
				</Route>
			</Switch>
			</div>
	);
}

export default App
