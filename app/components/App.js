var React = require('react');
var Popular = require('./Popular');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Route path="/" component={Populer} />
        </div>
      </Router>
    )
  }
}

module.exports = App;
