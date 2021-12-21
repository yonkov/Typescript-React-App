import React, { useState, Fragment, useEffect } from 'react';
import { render } from 'react-dom';
import App from './App';
import { HashRouter as Router, BrowserRouter, Route, Link, Switch } from 'react-router-dom'

const rootElement = document.getElementById('root');
render(<BrowserRouter><App /></BrowserRouter>, rootElement);
