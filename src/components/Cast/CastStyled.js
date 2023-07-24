import styled from 'styled-components';

const CastStyled = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: white;
  text-align: center;
  
  ul {
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  li {
    list-style: none;
    width: 200px;
  }
  img {
    border: 2px solid white;
    border-radius: 15px;
    display: block;
  }
`;

export default CastStyled;
