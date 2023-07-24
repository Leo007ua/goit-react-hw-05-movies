import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 20px;

  input {
    width: 300px;
    height: 40px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border: none;
    padding: 0 10px;
    font-size: 16px;
    margin-bottom: 20px;
    color: #000;
    background: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    &:focus {
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    }
    &::placeholder {
      color: #999;
    }
    &:hover {
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.7);
    }
    &:active {
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.9);
    }
  }
  button {
    border: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    padding: 0 10px;
    height: 40px;
    font-size: 18px;
    cursor: pointer;
    color: #000;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    &:hover {
      background-color: greenyellow;
    }

    &:focus {
      color: greenyellow;
    }
    &:active {
      color: #fff;
    }
  }
`;

export default Container;
