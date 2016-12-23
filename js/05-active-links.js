import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import{Router,Route,Link,hashHistory,browserHistory} from 'react-router'

import App   from '../modules/app5/App'
import About from '../modules/app5/About'
import Repos from '../modules/app5/Repos'


ReactDOM.render((
		<Router history={hashHistory} >
			<Route path="/" component={App}>
				<Route path="/about" component={About} />
				<Route path="/repos" component={Repos}  />
			</Route>
		</Router>
	),document.getElementById("app"))



