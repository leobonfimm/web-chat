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
        </MessageReceived>

        <MessageReceived isPhoto={false}>
          {false && (
            <img
              src="https://avatars3.githubusercontent.com/u/39925352?s=460&u=4af2bf6a646f2ae4fae4ef4c9cd20dedd6b4e7d2&v=4"
              alt="Leonardo Bonfim"
            />
          )}
          <span>
            O Lorem Ipsum é um texto modelo da indústria tipográfica e de
            impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por
            estas indústrias desde o ano de 1500, quando uma misturou os
            caracteres de um texto para criar um espécime de livro. Este texto
            não só sobreviveu 5 séculos, mas também o salto para a tipografia
            electrónica, mantendo-se essencialmente inalterada. Foi popularizada
            nos anos 60 com a disponibilização das folhas de Letraset, que
            continham passagens com Lorem Ipsum, e mais recentemente com os
            programas de publicação como o Aldus PageMaker que incluem versões
            do Lorem Ipsum.
          </span>
        </MessageReceived>

        <MessageReceived isPhoto={false}>
          {false && (
            <img
              src="https://avatars3.githubusercontent.com/u/39925352?s=460&u=4af2bf6a646f2ae4fae4ef4c9cd20dedd6b4e7d2&v=4"
              alt="Leonardo Bonfim"
            />
          )}
          <span>Olá, tudo bem!?</span>
        </MessageReceived>

        <MessageReceived isPhoto={false}>
          {false && (
            <img
              src="https://avatars3.githubusercontent.com/u/39925352?s=460&u=4af2bf6a646f2ae4fae4ef4c9cd20dedd6b4e7d2&v=4"
              alt="Leonardo Bonfim"
            />
          )}
          <span>Olá, tudo bem!?</span>
        </MessageReceived>

        <MessageReceived isPhoto={false}>
          {false && (
            <img
              src="https://avatars3.githubusercontent.com/u/39925352?s=460&u=4af2bf6a646f2ae4fae4ef4c9cd20dedd6b4e7d2&v=4"
              alt="Leonardo Bonfim"
            />
          )}
          <span>Olá, tudo bem!?</span>
        </MessageReceived>

        <MeMessage>
          <span> Olá, tudo certo!</span>
        </MeMessage>

        <MeMessage>
          <span>
            O Lorem Ipsum é um texto modelo da indústria tipográfica e de
            impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por
            estas indústrias desde o ano de 1500, quando uma misturou os
            caracteres de um texto para criar um espécime de livro. Este texto
            não só sobreviveu 5 séculos, mas também o salto para a tipografia
            electrónica, mantendo-se essencialmente inalterada. Foi popularizada
            nos anos 60 com a disponibilização das folhas de Letraset, que
            continham passagens com Lorem Ipsum, e mais recentemente com os
            programas de publicação como o Aldus PageMaker que incluem versões
            do Lorem Ipsum.
          </span>
        </MeMessage>

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
