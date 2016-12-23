import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {Router,Route,Link,hashHistory,browserHistory} from 'react-router'

import App from '../modules/app7/App'
import Repos from '../modules/app7/Repos'
import About from '../modules/app7/About'
import Repo from  '../modules/app7/About'


ReactDOM.render((
		<Router history ={hashHistory}>
			<Route path="/" component={App}>	
				<Route path ="/about" component={About} />
				<Route path ="/repos" component={Repos} />
				<Route path="/repos/:userName/:repoName" component={Repo} />
			</Route>
		</Router>
	),document.getElementById("app"))