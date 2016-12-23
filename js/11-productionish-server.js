import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRoute} from 'react-router'

import App from '../modules/app11/App'
import About from '../modules/app11/About'
import Repos from '../modules/app11/Repos'
import Home from '../modules/app11/Home'
import Repo from '../modules/app11/Repo'


ReactDOM.render((
		 <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/repos" component={Repos}>
        <Route path="/repos/:userName/:repoName" component={Repo}/>
      </Route>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
), document.getElementById('app'))