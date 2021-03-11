import React from "react"
import { Route, Redirect } from "react-router-dom"
import useGlobalProvider from "../context"

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useGlobalProvider();

  return (
    <Route
      {...rest}
      render={props => {
        return currentUser ? <Component {...props} /> : <Redirect to="/About" />
      }}
    ></Route>
  )
}