import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {Router,Route,Link,hashHistory,browserHistory,IndexRoute} from 'react-router'

import App from '../modules/app9/App'
import About from '../modules/app9/About'
import Repos from '../modules/app9/Repos'
import Repo from '../modules/app9/Repo'
import Home from '../modules/app9/Home'

ReactDOM.render((
	   	<Router history={hashHistory} >
	   	  	<Route path="/" component={App} >
	   	  		<IndexRoute component={Home} />
	   	  		<Route path="/repos" component ={Repos} >
	   	  			<Route path="/repos/:userName/:repoName"  component={Repo}/>
	   	  		</Route>
	   	  		<Route path="/about" component ={About} />
	   	  	</Route>
 		</Router>
	),document.getElementById("app"))