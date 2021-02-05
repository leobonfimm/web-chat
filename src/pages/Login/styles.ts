import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const LonginContainer = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }
`;

export const InputUser = styled.div`
  position: relative;
  padding-top: 13px;

  input {
    border: 1px solid lightgrey;
    border-radius: 5px;
    outline: none;
    min-width: 250px;
    width: 100%;
    padding: 15px 20px;
    font-size: 16px;
    transition: all 0.1s linear;
    -webkit-transition: all 0.1s linear;
    -moz-transition: all 0.1s linear;
    -webkit-appearance: none;
  }

  input:focus {
    border: 2px solid #3951b2;
  }

  input::placeholder {
    color: transparent;
  }

  label {
    pointer-events: none;
    position: absolute;
    top: calc(50% - 8px);
    left: 15px;
    transition: all 0.1s linear;
    -webkit-transition: all 0.1s linear;
    -moz-transition: all 0.1s linear;
    background-color: white;
    padding: 5px;
    box-sizing: border-box;
  }

  input:focus + label,
  input:not(:placeholder-shown) + label {
    font-size: 13px;
    top: 0;
    color: #3951b2;
  }
`;

// display: flex;
//   flex-direction: column;
//   min-width: 350px;
//   position: relative;

//   input {
//     width: 100%;
//     height: 56px;
//     padding: 14px 16px 0 10px;
//     outline: 0;
//     border: 1px solid #ddd;
//     border-radius: 4px;
//     background: #fff;
//     font-family: Arial, Helvetica, sans-serif;
//     font-size: 16px;
//   }

//   label {
//     font-size: 16px;
//     font-family: Arial, Helvetica, sans-serif;
//     padding: 0 12px;
//     color: #999;
//     pointer-events: none;

//     position: absolute;
//     transform: translate(0, 26px) scale(1);

//     transform-origin: top left;
//     transition: all 0.2s ease-out;
//   }

//   &:focus-within label {
//     transform: translate(0, 12px) scale(0.75);
//   }
