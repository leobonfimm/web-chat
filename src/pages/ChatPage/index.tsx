import React from 'react';
import { FiBell, FiSearch } from 'react-icons/fi';

import ChatContact from '../../components/ChatContact';
import { useAuth } from '../../hooks/auth';

import {
  Container,
  Header,
  Profile,
  Content,
  AreaMessage,
  Contacts,
  Contact,
  ContactPreview,
} from './styles';

const ChatPage: React.FC = () => {
  const { user } = useAuth();
  return (
    <Container>
      <Header>
        <Profile>
          <img
            src="https://avatars3.githubusercontent.com/u/39925352?s=460&u=4af2bf6a646f2ae4fae4ef4c9cd20dedd6b4e7d2&v=4"
            alt={user.name}
          />

          <strong>{user.name}</strong>
        </Profile>
        <FiBell size={20} />
      </Header>

      <Content>
        <div className="search">
          <FiSearch size={20} color="#666" />
          <input type="text" />
        </div>

        <AreaMessage>
          <Contacts>
            <Contact>
              <img
                src="https://avatars3.githubusercontent.com/u/39925352?s=460&u=4af2bf6a646f2ae4fae4ef4c9cd20dedd6b4e7d2&v=4"
                alt="Leonardo Bonfim"
              />

              <ContactPreview href="#">
                <div className="contactPreview">
                  <strong>Leonardo Bonfim</strong>
                  <p>Olá, tudo bem?</p>
                </div>

                <div className="notification">
                  <p>20:50</p>
                  <FiBell size={20} />
                </div>
              </ContactPreview>
            </Contact>
          </Contacts>

          <ChatContact />
        </AreaMessage>
      </Content>
    </Container>
  );
};

export default ChatPage;
