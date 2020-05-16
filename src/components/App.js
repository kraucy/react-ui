import React from 'react';
import Footer from './footer/footer';
import Header from './header/header';
import About from '../pages/about';
import Contact from '../pages/contact';
import Home from '../pages/home';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	// Link,
	// useRouteMatch
  } from "react-router-dom";


function App() {
  return (
	<Router>
		<div className="App">
			<Header className="App-header" />
			<div className="body">
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/contact">
						<Contact />
					</Route>
				</Switch>
			</div>
			<Footer className="App-footer" />
		</div>
	</Router>
  );
}

export default App;
