import React from 'react';
import { FiSmile, FiClipboard, FiSend } from 'react-icons/fi';

import {
  Container,
  BodyMessage,
  MessageReceived,
  MeMessage,
  SendMessage,
  InputMessage,
} from './styles';

const ChatContact: React.FC = () => {
  return (
    <Container>
      <BodyMessage>
        <MessageReceived isPhoto>
          <img
            src="https://avatars3.githubusercontent.com/u/39925352?s=460&u=4af2bf6a646f2ae4fae4ef4c9cd20dedd6b4e7d2&v=4"
            alt="Leonardo Bonfim"
          />

          <span>Olá, tudo bem!?</span>
          <span>Olá, tudo bem!?</span>
          <span>Olá, tudo bem!?</span>
          <span>Olá, tudo bem!?</span>
          <span>Olá, tudo bem!?</span>
        </MessageReceived>

        <MeMessage>
          <span> Olá, tudo certo!</span>
        </MeMessage>
      </BodyMessage>

      <SendMessage>
        <InputMessage>
          <FiSmile size={20} />

          <input type="text" placeholder="Digite uma mensagem" />

          <FiClipboard size={20} />
        </InputMessage>

        <button type="button">
          <FiSend size={20} />
        </button>
      </SendMessage>
    </Container>
  );
};

export default ChatContact;
