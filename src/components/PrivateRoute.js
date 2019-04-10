import React from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

export default PrivateRoute = ({component: Component, authed}) => {
    return (
      <Route
        {...rest}
        render={(props) => authed === true
          ? <Component {...props} />
          : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
      />
    )
}