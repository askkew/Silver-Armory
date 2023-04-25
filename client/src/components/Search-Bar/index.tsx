import React, { useContext } from 'react';
import { SearchBarContainer, StyledForm, StyledInputField } from './SearchBarStyles'
import { Button, TextField } from '@mui/material'
import { ButtonLabel, StyledButton } from '../../utils'
import { DataContext } from '../../utils/DataContext'

const SearchBar = () => {
  const { setData } = useContext(DataContext);

  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    const displayName = event.currentTarget.displayName.value;
    const displayNameCode = event.currentTarget.displayNameCode.value;
  
    const data = {
      displayName,
      displayNameCode,
    };
  
    fetch('http://localhost:5000/search-and-inventory', {
      // fetch('https://silver-armory.herokuapp.com/search-and-inventory', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error searching that account!');
        }
        return response.json();
      })
      .then(responseData => {
        if (responseData.characters) {
          Object.entries(responseData.characters).forEach(([id, character]) => {
            if (responseData.inventories[id]) {
              //@ts-ignore
              character.items = responseData.inventories[id].items;
            }
          });
        }
  
        setData(responseData);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <SearchBarContainer>
      <StyledForm onSubmit={handleSearch}>
        <StyledInputField type="text" placeholder="Bungie Display Name" id="displayName" required />
        <StyledInputField type="text" placeholder="Bungie Name Code" id="displayNameCode" required />
        <StyledButton type="submit"><ButtonLabel>Search</ButtonLabel></StyledButton>
      </StyledForm>
    </SearchBarContainer>
  )
}

export default SearchBar