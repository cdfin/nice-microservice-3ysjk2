import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function RoleBasedRoute({ component: Component, allowedRoles, ...rest }) {
  const { user } = useSelector((state) => state.auth);

  return (
    <Route
      {...rest}
      render={(props) =>
        user && allowedRoles.includes(user.role) ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}

export default RoleBasedRoute;
