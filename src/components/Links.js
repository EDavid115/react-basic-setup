import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const navItems = ['', 'two', 'admin', 'auth'];

const NavItem = ({ navItem }) => {
  const location = useLocation();
  const isCurrentRoute = location.pathname === `/${navItem}`;

  return (
    <Link to={navItem}>
      <div>
        {isCurrentRoute ? (
          <span>{navItem === '' ? 'Home' : navItem}</span>
        ) : (
          <p>{navItem === '' ? 'Home' : navItem}</p>
        )}
      </div>
    </Link>
  );
};

const ContainerNav = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
  a {
    text-decoration: none;
    span {
      font-size: 20px;
      color: red;
    }
    p {
      font-size: 20px;
      color: blue;
    }
  }
`;

const NavItemsContainer = () => (
  <ContainerNav>
    {navItems.map((navItem) => (
      <NavItem navItem={navItem} key={navItem} />
    ))}
  </ContainerNav>
);
NavItem.propTypes = {
  navItem: PropTypes.string.isRequired,
};

export default NavItemsContainer;
