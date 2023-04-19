import styled from '@emotion/styled';

export const SearchBarContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  height: '70px',
  width: '400px',
  color: 'white',
  margin: 'auto',
})

export const StyledInputField = styled('input')({
	fontFamily: 'Poppins, sans-serif',
  display: 'block',
  padding: '10px',
  border: 'none',
  outline: 'none',
  borderRadius: '4px',
  font: 'inherit',
  margin: '10px',
  '::placeholder': {
    transition: 'opacity 0.25s',
  },
  ':focus::placeholder': {
    opacity: 0,
  },
})


