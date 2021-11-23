import React from 'react';
import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom';
import Problem1 from './pages/Problem1';
import Problem2 from './pages/Problem2';

class App extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/">
						<div className='container'>
							<h1>PROG2053 - Part 1</h1>
							<p>
								If you can see this message it means your simple CRA app is working!
							</p>
							<p>
								Your solutions to part1 should be served by this web server from the following files
								that can be clicked on to test in your browser:
							</p>
							<ul>
								<li>Problem #1 - Getting started - <Link to="p1">p1</Link></li>
								<li>Problem #2 - States display component - <Link to="p2">p2</Link></li>
								<li>Problem #3 - Layout Personalization - <Link to="p3">p3</Link></li>
								<li>Problem #4 - Dynamic view switching - <Link to="p4">p4</Link></li>
								<li>Problem #5 - Single page app - <Link to="p5">p5</Link></li>
							</ul>
						</div>
					</Route>
					<Route exact path="/p1">
						<Problem1/>
					</Route>
					<Route exact path="/p2">
						<Problem2/>
					</Route>
				</Switch>
			</Router>
		);
	}
}

export default App;
