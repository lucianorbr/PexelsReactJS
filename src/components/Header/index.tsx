import React, { useState } from 'react';
import { Container, SearchForm, PexelLogo } from './styles';
import { useNavigate } from 'react-router-dom'

const Header: React.FC = () => {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        // console.log(search);

        navigate('/' + search.toLowerCase().trim());
    }

  return (
      <Container>

        <PexelLogo />

        <SearchForm onSubmit={handleSubmit} >
            <input placeholder="Search for free photos..."
                   value={search}
                   onChange={e => setSearch(e.currentTarget.value)}
            />
        </SearchForm>
      </Container>
  );
};

export default Header;