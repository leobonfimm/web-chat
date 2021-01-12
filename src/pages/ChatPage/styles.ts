import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 32px 0 0 0;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > img {
    height: 86px;
    border-radius: 50%;
  }

  > strong {
    margin-left: 6px;
    font-size: 20px;
    line-height: 4px;
  }
`;

export const Content = styled.div`
  padding: 32px;
  height: 80%;

  div.search {
    display: flex;
    max-width: 500px;
    align-items: center;
    margin-bottom: 10px;
    padding: 16px;
    border-radius: 50px;
    background: #5c4f82;

    > input {
      background: transparent;
      border: none;
      margin-left: 14px;
      color: #fff;
      flex: 1;
    }
  }
`;

export const AreaMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

export const Contacts = styled.div`
  max-width: 500px;
  background: #5c4f82;
  width: 30%;
  height: 100%;
  padding: 10px;
  border-radius: 20px 0 0 20px;

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

export const Contact = styled.div`
  display: flex;
  align-items: center;

  > img {
    height: 60px;
    border-radius: 50%;
  }
`;

export const ContactPreview = styled.a`
  flex: 1;
  display: flex;
  align-items: center;
  margin-left: 13px;
  border-bottom: 1px solid #666;
  padding: 16px;
  text-decoration: none;

  div.contactPreview {
    flex: 1;

    strong {
      color: #fff;
    }

    p {
      margin-top: 10px;
      color: #666;
    }
  }

  div.notification {
    margin-left: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      color: #fff;
    }

    > svg {
      margin-top: 10px;
      color: #dc653b;
    }
  }
`;

export const Chat = styled.div``;
