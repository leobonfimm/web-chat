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
  justify-content: space-between;

  > img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }
`;
