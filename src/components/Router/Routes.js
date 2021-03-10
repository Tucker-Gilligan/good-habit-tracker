// import { Route, Switch } from 'react-router-dom';
// import LandingPage from '../../RouteComponents/LandingPage';
// import Register from '../../RouteComponents/Users/Register';
// import Login from '../../RouteComponents/Users/Login';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import PublicOnlyRoute from '../PublicOnlyRoute/PublicOnlyRoute';
import RegistrationRoute from '../../routes/RegistrationRoute/RegistrationRoute';
import LoginRoute from '../../routes/LoginRoute/LoginRoute';
import DashboardRoute from '../../routes/DashboardRoute/DashboardRoute';
import ScoreboardRoute from '../../routes/ScoreboardRoute/ScoreboardRoute';
import NotFoundRoute from '../../routes/NotFoundRoute/NotFoundRoute';
function Routes() {
  return (
    <Switch>
      <PrivateRoute exact path={'/'} component={DashboardRoute} />
      <PrivateRoute path={'/scoreboard'} component={ScoreboardRoute} />
      <PublicOnlyRoute path={'/register'} component={RegistrationRoute} />
      <PublicOnlyRoute path={'/login'} component={LoginRoute} />
      <Route component={NotFoundRoute} />
    </Switch>
  );
}

export default Routes;
