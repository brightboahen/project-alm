import React, { lazy, Suspense, Fragment } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import MainLayout from 'layouts/mainLayouts';
import DashboardLayout from 'layouts/dashboardLayouts';
import LoadingIndicator from 'components/LoadingIndicator';
import HomeView from 'views/pages/HomeView/HomeView';
import AuthGuard from 'components/AuthGuard';

const routesConfig = [
    {
        path: '/app',
        guard: AuthGuard,
        layout: DashboardLayout,
        routes: [
            { path: '/app/account', component: () => <div>App account</div> },
            { component: () => <Redirect to="/404" /> }
        ]
    },
    {
        exact: true,
        path: '/register',
        //guard: GuestGuard,
        component: lazy(() => import('views/auth/RegisterView'))
    },
    {
        exact: true,
        path: '/login',
        //guard: GuestGuard,
        component: lazy(() => import('views/auth/LoginView'))
    },
    {
        exact: true,
        path: '/404',
        component: lazy(() => import('views/pages/HomeView/Error404View'))
    },
    {
        exact: true,
        path: '/',
        component: () => <Redirect to="/home" />
    },
    {
        path: '*',
        layout: MainLayout,
        routes: [
            { exact: true, path: '/home', component: HomeView },
            { component: () => <Redirect to="/404" /> }
        ]
    }
];

const renderRoutes = (routes) =>
    routes ? (
        <Suspense fallback={<LoadingIndicator />}>
            <Switch>
                {routes.map((route, i) => {
                    const Guard = route.guard || Fragment;
                    const Layout = route.layout || Fragment;
                    const Component = route.component;
                    return (
                        <Route
                            key={i}
                            path={route.path}
                            exact={route.exact}
                            render={(props) => (
                                <Guard>
                                    <Layout>
                                        {route.routes ? (
                                            renderRoutes(route.routes)
                                        ) : (
                                            <Component {...props} />
                                        )}
                                    </Layout>
                                </Guard>
                            )}
                        />
                    );
                })}
            </Switch>
        </Suspense>
    ) : null;

function Routes() {
    return renderRoutes(routesConfig);
}

export default Routes;
