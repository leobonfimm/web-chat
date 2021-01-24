import styled, { css } from 'styled-components';

declare interface MessageReceivedProps {
  isPhoto: boolean;
}

export const Container = styled.div`
  width: 80%;
  height: 100%;
  background: #5c4f82;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  margin-left: 70px;
`;

export const BodyMessage = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

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
  display: flex;
  align-items: center;

  > img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  ${props =>
    !props.isPhoto &&
    css`
      content: '';
      margin-left: 40px;
    `}

  span {
    background: #4d426d;
    margin-bottom: 4px;
    margin-left: 4px;
    padding: 16px;
    border-radius: 10px;
    max-width: 680px;
    word-break: break-all;
    text-align: justify;
  }

  @media only screen and (max-width: 1500px) {
    span {
      max-width: 340px;
    }
  }
`;

export const MeMessage = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  span {
    background: #efa985;
    margin-bottom: 4px;
    margin-right: 4px;
    padding: 16px;
    border-radius: 10px;
    max-width: 680px;
    text-align: justify;
  }

  @media only screen and (max-width: 1500px) {
    span {
      max-width: 340px;
    }
  }
`;

export const SendMessage = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

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
