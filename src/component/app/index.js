import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import HomePage from '../Home';
import SignUpPage from '../Sign/SignUp';
import SignInPage from '../Sign/SignIn';
import LandingPage from '../Landing';
import Header from '../Header';
import {Link } from 'react-router-dom';

import * as ROUTES from '../../const/routes';
import { withAuthentification } from '../Session';

const App = () => (
	<Router>
		<div id="page-container">
			<Header />
			<section id="error-page" class="fixed-no-header">
				<div class="container">
					<div class="row">
						<div class="col-md-8 col-md-offset-2">
							<span class="title"><span>4<img src="/images/broken-pin.png" alt="" />1</span> Error!</span>
							<h2 class="line-broken">Authentication Failed!</h2>
							<div class="text">
								The URL you've requested,  requires a correct username and password.<br />
								Either you entered an incorrect username/password, or your browser doesn't support this feature.<br /> 
								Please inform the administrator, if you think this was a mistake.
							</div>
							<Link className="btn btn-default error-button" to={ROUTES.SIGN_UP}>Report broken link</Link>
							<Link className="btn btn-default error-button" to={ROUTES.HOME}>Visit the Home Pagen</Link>
						</div>
					</div>
				</div>
			</section>
			<hr />
			<div  className="container">
        		<Route  exact path={ROUTES.LANDING} component={LandingPage} />
				<Route path={ROUTES.SIGN_UP} component={SignUpPage} />
				<Route path={ROUTES.HOME} component={HomePage} />
				<Route path={ROUTES.SIGN_IN} component={SignInPage} />
			</div>
		</div>
	</Router>
);


export default withAuthentification(App);