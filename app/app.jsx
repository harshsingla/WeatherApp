var React = require('react');
var ReactDOM = require('react-dom');
var {Router, Route, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
import About from 'About';
import Examples from 'Examples';

// load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();
// load css
require('style!css!appstyles')
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path='about' component={About}/>
      <Route path='examples' component={Examples}/>
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
