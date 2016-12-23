import React from 'react'
import ReactDOM from 'react-dom'
import {Router,Route,Link,hashHistory,IndexRoute} from 'react-router'

import App from '../modules/app10/App'
import About from '../modules/app10/About'
import Repos from  '../modules/app10/Repos'
import Repo from '../modules/app10/Repo'
import Home from '../modules/app10/Home'

ReactDOM.render((
		<Router history={hashHistory}>
			<Route path="/" component={App} >
				<IndexRoute component={Home} />
				<Route path="/repos" component={Repos}>
					<Route path="/repos/:userName/:repoName" component={Repo}/>
				</Route>
				<Route path="/about" component={About} />
			</Route>
		</Router>
	),document.getElementById("app"))