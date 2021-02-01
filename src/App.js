import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Switch } from 'react-router-dom';

import AppBar from './components/AppBar/AppBar';
import Container from './components/Container';
import LoaderSpinner from './components/Loader';

import { authOperations } from './redux/auth';

import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const HomeView = lazy(() =>
  import('./views/HomeView' /* webpackChunkName: "home-view" */),
);

const RegisterView = lazy(() =>
  import('./views/RegisterView' /* webpackChunkName: "register-view" */),
);
const LoginView = lazy(() =>
  import('./views/LoginView' /* webpackChunkName: "login-view" */),
);
const ContactsView = lazy(() =>
  import('./views/ContactsView' /* webpackChunkName: "contacts-view" */),
);

// const UploadView = lazy(() =>
//   import('./views/NotFoundView' /* webpackChunkName: "not-found-view" */),
// );

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />
      <Suspense fallback={<LoaderSpinner />}>
        <Switch>
          <PublicRoute path="/" exact>
            <HomeView />
          </PublicRoute>

          <PublicRoute path="/register" restricted redirectTo="/contacts">
            <RegisterView />
          </PublicRoute>

          <PublicRoute path="/login" restricted redirectTo="/contacts">
            <LoginView />
          </PublicRoute>

          <PrivateRoute path="/contacts" redirectTo="/login">
            <ContactsView />
          </PrivateRoute>
        </Switch>
      </Suspense>
    </Container>
  );
}
