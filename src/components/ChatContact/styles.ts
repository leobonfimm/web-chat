import styled, { css } from 'styled-components';

interface MessageReceivedProps {
  isPhoto: boolean;
}

export const Container = styled.div`
  width: 80%;
  height: 100%;
  background: #5c4f82;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  margin-left: 70px;
`;

export const BodyMessage = styled.div`
  height: 100%;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgb(32, 34, 37);
    border-radius: 20px;
  }

  ::-webkit-scrollbar-track {
    background-color: #3f3653;
  }
`;

export const MessageReceived = styled.div<MessageReceivedProps>`
  margin-right: auto;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  flex-direction: column;

  ${props => css`
    display: flex;
    align-items: center;
    > img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    span {
      background: #4d426d;
      padding: 16px;
      border-radius: 10px;
      margin-left: 10px;
      margin-top: 10px;
      word-break: break-all;
    }
  `}

  > img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  span {
    background: #4d426d;
    padding: 16px;
    border-radius: 10px;
    margin-left: 10px;
    margin-top: 10px;
    word-break: break-all;
  }
`;

export const MeMessage = styled.div`
  margin-left: auto;
  text-align: right;

  span {
    background: #efa985;
    padding: 16px;
    border-radius: 10px;
  }
`;

export const SendMessage = styled.div`
  display: flex;
  align-items: center;

  > button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    color: #fff;
    background: #1b9a59;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
  }
`;

export const InputMessage = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 16px;
  background: #fff;
  border-radius: 40px;

  > input {
    flex: 1;
    border: none;
    margin: 0 4px;
  }

  > svg {
    color: #666;
  }
`;
