import React from 'react';

import { Container, LonginContainer, InputUser } from './styles';

const Login: React.FC = () => {
  return (
    <Container>
      <LonginContainer>
        <img
          src="https://avatars3.githubusercontent.com/u/39925352?s=460&u=4af2bf6a646f2ae4fae4ef4c9cd20dedd6b4e7d2&v=4"
          alt="Leonardo Bonfim"
        />
        <InputUser>
          <input placeholder="" type="text" />
          <label>Usuário</label>
        </InputUser>
      </LonginContainer>
    </Container>
  );
};

export default Login;
