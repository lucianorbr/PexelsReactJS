import React, {useState} from 'react';
import {Container, Header, SearchForm, PexelLogo, ButtonsHeader, Burger} from './styles';
import {useNavigate} from 'react-router-dom'


const UniqueOverlay: React.FC = (props) => {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        console.log(search);
    }

    return (
        <Container>
            <Header>
              <PexelLogo/>
                <SearchForm
                    onSubmit={handleSubmit}>
                    <input  placeholder="Search for free photos..."
                           value={search}
                           onChange={e => setSearch(e.currentTarget.value)}
                    />
                    <ButtonsHeader/>
                </SearchForm>
              <Burger/>
            </Header>
        </Container>
    );
};

export default UniqueOverlay;