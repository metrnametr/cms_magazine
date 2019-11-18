import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.scss';

const NavLink = ({ checked = false, to, children }) => (
    <li className={`nav-link ${checked ? 'checked' : ''}`}>
      <Link to={to}>{children}</Link>
    </li>
)

NavLink.propTypes = {
    to: PropTypes.string.isRequired,
    checked: PropTypes.bool
}
export default NavLink;