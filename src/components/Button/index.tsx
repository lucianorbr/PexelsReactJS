import React, {useState} from 'react';
import {Container, Buttons} from './styles';

const Button: React.FC = () => {

    return (
        <Container>
                <Buttons>
                    <button data-img="curated">Prev</button>
                    <button>Next</button>
                </Buttons>
        </Container>
    );
}

export default Button;