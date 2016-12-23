import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {Router,Route,Link,browserHistory,hashHistory} from 'react-router'
// import App1 from '../modules/App1' //第一个例子
// import App2 from '../modules/App2' //第二个例子
// import App3 from '../modules/app3/App3'
// import Repos from '../modules/app3/Repos' //第三个例子
// import About from '../modules/app3/About'

import App4 from '../modules/app4/App4'
import About from '../modules/app4/About'
import Repos from '../modules/app4/Repos'
//第四个例子
ReactDOM.render((
		<Router history={hashHistory}>
			<Route path="/" component={App4} />
			<Route path="/about" component={About} />
			<Route path="/repos" component={Repos} />

		   
		</Router>
	),document.getElementById("app"))
//第三个例子
/* ReactDOM.render((
	 <Router history={hashHistory}>
	 	<Route path="/" component={App3} >
		 	<Route path="repos" component={Repos} />
			<Route path="about" component={About} />
	 	</Route>
	 </Router>

	),document.getElementById("app")
)
*/




