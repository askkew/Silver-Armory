import React, { useContext, CSSProperties, useState, useEffect  } from 'react';
import { SearchBarContainer, StyledForm, StyledInputField } from './SearchBarStyles'
import { Button, TextField } from '@mui/material'
import { ButtonLabel, StyledButton } from '../../utils'
import { DataContext } from '../../utils/DataContext'
import BarLoader from "react-spinners/BarLoader";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  color: "white",
  position: "absolute",
  left: "0%",
  top: "70px",
};

const SearchBar = () => {
  const { setData } = useContext(DataContext);
  let [loading, setLoading] = useState(false);
  const [barWidth, setBarWidth] = useState(window.innerWidth);

  useEffect(() => {
    if(window.innerWidth !== barWidth) {
      setBarWidth(window.innerWidth);
    }
  }, [window.innerWidth]);

  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(!loading);
  
    const displayName = event.currentTarget.displayName.value;
    const displayNameCode = event.currentTarget.displayNameCode.value;
  
    const data = {
      displayName,
      displayNameCode,
    };
  
    // fetch('http://localhost:5000/search-and-inventory', {
      fetch('http://ec2-18-216-130-139.us-east-2.compute.amazonaws.com:80/search-and-inventory', {
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
        setLoading(loading);
      })
      .catch(error => {
        console.error(error);
        setLoading(loading);
        toast.error('Error searching that account!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      });
  };

  return (
    <SearchBarContainer>
      <StyledForm onSubmit={handleSearch}>
        <StyledInputField type="text" placeholder="Bungie Display Name" id="displayName" required />
        <StyledInputField type="text" placeholder="Bungie Name Code" id="displayNameCode" required />
        <StyledButton type="submit"><ButtonLabel>Search</ButtonLabel></StyledButton>
      </StyledForm>
      <BarLoader
        loading={loading}
        cssOverride={override}
        height={4}
        width={barWidth}
        color={"#fff"}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </SearchBarContainer>
  )
}

export default SearchBar