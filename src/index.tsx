import React, { useState, Fragment, useEffect } from 'react';
import { render } from 'react-dom';
import ListOfPosts from './components/post-loop';
import Details from './components/details'
import {FetchPosts} from './data';
import App from './App';
import { HashRouter as Router, BrowserRouter, Route, Link, Switch } from 'react-router-dom'

const rootElement = document.getElementById('root');
render(<BrowserRouter><App /></BrowserRouter>, rootElement);
