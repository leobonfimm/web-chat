import React, { useCallback, useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import { useHistory } from 'react-router-dom';

import { Form } from '@unform/web';
import Input from '../../components/Input';
import api from '../../services/api';

import { Container, LonginContainer } from './styles';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/auth';

interface SignInFormData {
  email: string;
}

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const history = useHistory();

  const [isSingUp, setIsSingUp] = useState(false);

  const handleSubmitSingIn = useCallback(
    async (data: SignInFormData) => {
      try {
        await signIn({ emailLogin: data.email });

        history.push('/chat');
      } catch (err) {
        formRef.current?.clearField('email');
        setIsSingUp(true);
      }
    },
    [signIn, history],
  );

  const handleSubmitSingUp = useCallback(
    async (data: SignInFormData) => {
      try {
        await api.post('users', data);

        history.push('/chat');
      } catch (err) {
        setIsSingUp(true);
      }
    },
    [history],
  );

  return (
    <Container>
      {!isSingUp && <h1>Entre com seu email</h1>}

      <LonginContainer>
        {isSingUp && (
          <img
            src="https://avatars3.githubusercontent.com/u/39925352?s=460&u=4af2bf6a646f2ae4fae4ef4c9cd20dedd6b4e7d2&v=4"
            alt="Leonardo Bonfim"
          />
        )}

        {isSingUp ? (
          <Form ref={formRef} onSubmit={handleSubmitSingUp}>
            <Input
              defaultValue=""
              name="name"
              inputLabel="Nome"
              placeholder=" "
              type="text"
            />

            <Input
              defaultValue=""
              name="email"
              inputLabel="E-mail"
              type="email"
              placeholder=" "
            />

            <Button type="submit">Cadastrar</Button>
          </Form>
        ) : (
          <Form ref={formRef} onSubmit={handleSubmitSingIn}>
            <Input
              name="email"
              inputLabel="E-mail"
              type="email"
              placeholder=" "
            />
            <Button type="submit">Entrar</Button>
          </Form>
        )}
      </LonginContainer>
    </Container>
  );
};

export default Login;
