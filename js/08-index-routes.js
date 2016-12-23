import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {Router,Route,Link,hashHistory,browserHistory} from 'react-router'

import App from '../modules/app8/App'
import Repos from '../modules/app8/Repos'
import About from '../modules/app8/About'
import Repo from  '../modules/app8/Repo'


ReactDOM.render((
	    <Router history={hashHistory}>
	    	<Route path="/" component={App}>
	    		<Route path="/about" component={About} />
	    		<Route path="/repos" component={Repos} >
	    			<Route path="/repos/:userName/:repoName" component={Repo} />
	    		</Route>

	    	</Route>
	    </Router>
	),document.getElementById("app"))