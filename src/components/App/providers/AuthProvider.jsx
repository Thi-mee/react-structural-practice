import React from "react";
import authService from "../../../services/App/AuthService";
import { useLocation, useNavigate } from "react-router-dom";

const AuthContext = React.createContext(null);
const AuthDispatchContext = React.createContext(null);

/**
 *
 * @param {{
 * children: React.ReactNode,
 * excludedRoutes: string[],
 * loginRoute: string
 * redirectRoute: string
 * registerRoute: string
 * }} props
 * @returns
 */
const AuthProvider = ({
  children,
  excludedRoutes,
  loginRoute,
  redirectRoute,
  registerRoute,
}) => {
  const [authObj, dispatch] = React.useReducer(reducer, authService.init());
  const navigate = useNavigate();
  const location = useLocation();

  const excludedRoutesV1 = React.useMemo(
    () => excludedRoutes || [],
    [excludedRoutes]
  );

  React.useEffect(() => {
    let shouldAuthenticate = true;
    const checkAuthAndRedirect = () => {
      if (authObj.isAuthenticated) {
        if (
          location.pathname === loginRoute ||
          location.pathname === registerRoute
        ) {
          if (location.state && location.state.from) {
            navigate(location.state.from);
          }
          navigate(redirectRoute);
        }
      } else {
        if (excludedRoutesV1.includes(location.pathname)) {
          return;
        }
        if (location.pathname !== loginRoute && location.pathname !== registerRoute) {
          navigate(loginRoute, { state: { from: location.pathname } });
        }
      }
    };

    shouldAuthenticate && checkAuthAndRedirect();

    return () => {
      shouldAuthenticate = false;
    };
  }, [
    authObj.isAuthenticated,
    location.pathname,
    navigate,
    location.state,
    loginRoute,
    redirectRoute,
    excludedRoutesV1,
    registerRoute,
  ]);

  return (
    <AuthContext.Provider value={authObj}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthContext.Provider>
  );
};

export default AuthProvider;

/**
 *
 * @param {{
 * isAuthenticated: boolean,
 * user: {},
 * login: (password: string, email: string) => void,
 * logout: () => void,
 * error: {error: boolean, message: string}
 * }} initialState
 * @param {{
 * type: string,
 * payload: {}
 * }} actionObj
 * @returns {{
 * isAuthenticated: boolean,
 * user: {},
 * login: (password: string, email: string) => void,
 * logout: () => void,
 * error: {error: boolean, message: string}
 * }} newState
 */
const reducer = (initialState, actionObj) => {
  switch (actionObj.type) {
    case "login": {
      return authService.login(actionObj.payload);
    }
    case "logout": {
      return authService.logout();
    }
    default:
      return initialState;
  }
};

/**
 *
 * @returns {{
 * isAuthenticated: boolean,
 * user: {},
 * login: (password: string, email: string) => void,
 * logout: () => void,
 * error: {error: boolean, message: string}
 * }}
 */
export const useAuthContext = () => React.useContext(AuthContext);

/**
 *
 * @returns {dispatch: (actionObj: {type: string, payload: {}}) => void}
 */
export const useAuthDispatchContext = () =>
  React.useContext(AuthDispatchContext);
