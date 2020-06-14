import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

const MainNavigation = styled.nav`
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10vh;
  padding: 0rem 0.5rem;
  border-bottom: 1px solid lightgrey;
`;

const NavigationList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  width: 100vw;
  justify-content: space-between;
  align-items: center;
`;

const NavigationItem = styled.li`
  padding: 1.2rem 1.5rem;
  text-decoration: none;
`;

const NavigationLink = styled(NavLink)`
  padding: 0.2rem 0.5rem;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 900;
  color: var(--blue);
  border-radius: 0.5rem;
  border: 0.1rem solid white;
  &:hover {
    color: var(--purple);
  }
  &.active {
    color: var(--blue);
  }
`;

const Navigation = () => {
  const location = useLocation();
  return (
    <MainNavigation>
      <NavigationList>
        <NavigationItem>
          <NavigationLink to="/">
            {location.pathname === "/" ? "Recepty" : "\u{2190}"}
          </NavigationLink>
        </NavigationItem>{" "}
        <NavigationItem>
          <NavigationLink to="/create">+</NavigationLink>
        </NavigationItem>{" "}
      </NavigationList>
    </MainNavigation>
  );
};

export default Navigation;
