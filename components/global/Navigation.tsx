import styled from "styled-components";

// style final state
// style closed state?
// transitions

export default function Navigation(): JSX.Element {
  return (
    <Nav>
      <ListContainer>
        <ListItem>
          <Anchor href="#!">About</Anchor>
        </ListItem>
        <ListItem>
          <Anchor href="#!">Work</Anchor>
        </ListItem>
        <ListItem>
          <Anchor href="#!">Contact</Anchor>
        </ListItem>
      </ListContainer>
    </Nav>
  );
}

const Nav = styled.nav``;

const ListContainer = styled.ul`
  list-style: none;
  display: flex;
`;

const ListItem = styled.li`
  text-transform: lowercase;
  font-family: var(--header-font);
  font-weight: 800;
  font-size: 2.25rem;
`;

const Anchor = styled.a`
  color: var(--blue);
  text-decoration: none;
`;
