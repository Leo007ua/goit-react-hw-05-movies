import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  &:hover{
    background-color: rgba(255, 255, 255, 0.2);
    color: white;
    cursor: pointer;
    text-decoration: none;
  }
`

export default StyledLink;

const NavStyled = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
`

export { NavStyled };

