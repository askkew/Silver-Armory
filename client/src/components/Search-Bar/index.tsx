import React, { useContext } from 'react';
import { SearchBarContainer, StyledInputField } from './SearchBarStyles'
import { Button, TextField } from '@mui/material'
import { StyledButton } from '../../utils'
import { DataContext } from '../../utils/DataContext'

interface FormData {
  displayName: string;
  displayNameCode: string;
}

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
        console.log(responseData);
        setData(responseData); // assuming responseData is the data you want to store in context
      })
      .catch(error => {
        console.error(error);
        // handle error
      });
  };

  return (
    <SearchBarContainer>
      <form onSubmit={handleSearch}>
        <StyledInputField type="text" placeholder="Bungie Display Name" id="displayName" required />
        <StyledInputField type="text" placeholder="Bungie Name Code" id="displayNameCode" required />
        <StyledButton type="submit">Search</StyledButton>
      </form>
      {/* <StyledInputField
        type="text"
        placeholder="Bungie Display Name"
        id="displayName"
        required
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
        />
      <StyledInputField
        type="text"
        placeholder="Bungie Name Code"
        id="displayNameCode"
        required
        value={displayNameCode}
        onChange={(e) => setDisplayNameCode(e.target.value)}
      />
      <StyledButton onClick={handleSearch}>Search</StyledButton> */}
    </SearchBarContainer>
  )
}

export default SearchBar