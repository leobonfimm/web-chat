import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  padding-top: 13px;

  input {
    border: 1px solid lightgrey;
    border-radius: 5px;
    outline: none;
    min-width: 250px;
    padding: 15px 20px;
    font-size: 16px;
    transition: all 0.1s linear;
    -webkit-transition: all 0.1s linear;
    -moz-transition: all 0.1s linear;
    -webkit-appearance: none;
  }

  label {
    z-index: 10;
    pointer-events: none;
    position: absolute;
    top: calc(50% - 8px);
    left: 15px;
    transition: all 0.1s linear;
    -webkit-transition: all 0.1s linear;
    -moz-transition: all 0.1s linear;
    background-color: #fff;
    color: #666;
    padding: 5px;
    box-sizing: border-box;
  }

  input:focus {
    border: 2px solid #3951b2;
  }

  input::placeholder {
    color: transparent;
  }

  input:focus + label,
  input:not(:placeholder-shown) + label {
    font-size: 13px;
    top: 0;
    color: #3951b2;
  }
`;
