import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const NavBar = ({ title, icon }) => {
  return (
    <>
      <div className="navbar bg-primary">
        <h1>
          <i className={icon} style={{ paddingRight: 10 }} />
          {title}
        </h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </>
  );
};
NavBar.propType = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};
NavBar.defaultProps = {
  title: "Contact Keeper",
  icon: "fas fa-id-card-alt",
};
