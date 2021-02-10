import { useField } from '@unform/core';
import React, { InputHTMLAttributes, useEffect, useRef } from 'react';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  inputLabel: string;
}

const Input: React.FC<InputProps> = ({ name, inputLabel, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <input ref={inputRef} type="text" defaultValue={defaultValue} {...rest} />
      <label>{inputLabel}</label>
    </Container>
  );
};

export default Input;
