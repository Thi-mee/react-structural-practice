import React from "react";
import { Link } from "react-router-dom";
import {
  useAuthContext,
  useAuthDispatchContext,
} from "../../providers/AuthProvider";
import LogoutButton from "../../../Common/Buttons/LogoutButton";

const getNavbarStyle = (pill, rest) => {
  return {
    gridArea: "nav",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: rest.backgroundColor || "#333",
    color: rest.color || "#fff",
    padding: "1rem",
    borderBottom: "1px solid #44f",
    position: rest.position ? rest.position : "relative",
    top:
      rest.position === "fixed" && !rest.top
        ? "0"
        : !!rest.top
        ? rest.top
        : "auto",
    left:
      rest.position === "fixed" && !rest.left
        ? "0"
        : !!rest.left
        ? rest.left
        : "auto",
    right:
      rest.position === "fixed" && !rest.right
        ? "0"
        : !!rest.right
        ? rest.right
        : "auto",
    borderRadius: pill ? "1em" : "0",
  };
};

/**
 *
 * @param {{
 * children: React.ReactNode
 * position: "fixed"|"relative"
 * }} props
 * @returns
 */
const Navbar = ({ children, pill, ...rest }) => {
  const { isAuthenticated } = useAuthContext();
  const dispatch = useAuthDispatchContext();

  const RightOfNav = React.useMemo(() => {
    return isAuthenticated ? (
      <span className="logout">
        <LogoutButton
          onClick={() => dispatch({ type: "logout", payload: null })}
        />
      </span>
    ) : (
      <>
        <span className="login">
          <Link to="/login">Login</Link>
        </span>
        <span className="register">
          <Link to="/register">Register</Link>
        </span>
      </>
    );
  }, [isAuthenticated, dispatch]);

  return (
    <nav style={getNavbarStyle(pill, rest)}>
      <div className="left">
        <span className="logo">
          <a href="#top">Logo Navbar</a>
        </span>
      </div>
      <div className="middle">{children || "Title"}</div>
      <div className="right">{RightOfNav}</div>
    </nav>
  );
};

export default React.memo(Navbar);
