import React from 'react'
import Dashboard from '../Dashboard'
import One from '../pages/one'
import Two from '../pages/two'
import Three from '../pages/three'
import Four from '../pages/four'
import Five from '../pages/five'
import Six from '../pages/six'
import { Route, Switch, Redirect } from 'react-router-dom'
import { IRouteConfig } from './interface'

const routeConfig: IRouteConfig[] = [
  { path: '/', component: Dashboard },
  { path: '/one', component: One },
  { path: '/two',component: Two },
  { path: '/three', component: Three },
  { path: '/four', component: Four },
  { path: '/five', component: Five },
  { path: '/six', component: Six }
]

const createRouter = () => (
  <Switch>
    <Redirect from='/' to='/one' exact={true} />
    {routeConfig.map(r => (
      <Route
          key={r.path}
          exact={true}
          path={r.path}
          component={r.component}
        />
    ))}
  </Switch>
)

export default createRouter 