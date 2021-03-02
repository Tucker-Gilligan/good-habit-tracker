import { Route, Switch } from 'react-router-dom';
import LandingPage from '../../RouteComponents/LandingPage';
import Register from '../../RouteComponents/Users/Register';
import Login from '../../RouteComponents/Users/Login';
function Routes() {
  return (
    <Switch>
      <Route exact path={'/'} component={LandingPage} />
      <Route path={'/register'} component={Register} />
      <Route path={'/login'} component={Login} />
    </Switch>
  );
}

export default Routes;
