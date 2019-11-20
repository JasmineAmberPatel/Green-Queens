import React from 'react';
import styled from 'styled-components';

import { useSpring, animated } from 'react-spring';

const CollapseMenu = (props) => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

  if (props.navbarState === true) {
    return (
      <CollapseWrapper style={{
        transform: open.interpolate({
          range: [0, 0.2, 0.3, 1],
          output: [0, -20, 0, -200],
        }).interpolate(openValue => `translate3d(0, ${openValue}px, 0`),
      }}
      >
        <NavLinks>
          <li><a href="/" onClick={props.handleNavbar}>Home</a></li>
          <li><a href="/Questions" onClick={props.handleNavbar}>Facts</a></li>
          <li><a href="/PlantTree" onClick={props.handleNavbar}>Plant a Tree</a></li>
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
  background: #f5f5f5;
  position: sticky;
  top: 4.5rem;
  left: 0;
  right: 0;
  z-index: 2;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 3rem 2rem;

  & li {
    transition: all 300ms linear 0s;
  }

  & a {
    font-size: 1.4rem;
    line-height: 2;
    color: #272727;
    text-decoration: none;
    font-weight: bold;
 
    cursor: pointer;

    &:hover {
      color: #2ac653;
    }
  }
`;