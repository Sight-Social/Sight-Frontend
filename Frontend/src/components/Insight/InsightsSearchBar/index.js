import React from 'react';
import { Container, Input } from './InsightsSearchBarElements';

const SearchBar = () => {
  return (
    <Container>
      <Input type="text" placeholder="Search" />
    </Container>
  );
};

export default SearchBar;
