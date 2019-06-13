import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => (
  <nav className="navbar bg-primary">
    <h1>
      <i className={icon} />
      {title}
    </h1>
  </nav>
);

Navbar.isRequired = {
  icon: 'fab fa-github',
  title: 'Github Finder',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
