import React from 'react';

import { Container, Buttons } from './styles';



const Button: React.FC = () => {
    return (
    <Container>
      <Buttons>
        <button>Prev</button>
        <button>Next</button>
      </Buttons>
    </Container>
  );
}

export default Button;