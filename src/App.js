import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import routes from './routes';
const App = () => {
  return (
    <div className='App'>
      <Router>
        <Switch>
          {routes.map(route => (
            <Route
              key={route.name}
              exact
              path={route.path}
              render={props => {
                document.title = route.name;
                return (
                  <route.component
                    location={props.location}
                    history={props.history}
                    match={props.match}
                  />
                );
              }}
            />
          ))}
        </Switch>
      </Router>
    </div>
  );
};

App.defaultProps = {
  location: {},
  history: {},
  match: {},
};

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  match: PropTypes.shape({}),
};
export default App;
