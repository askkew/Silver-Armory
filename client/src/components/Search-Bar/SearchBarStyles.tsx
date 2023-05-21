import styled from '@emotion/styled';
import { AiFillQuestionCircle } from 'react-icons/ai';

export const SearchBarContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  width: '80%',
  height: '10%',
  color: 'white',
  margin: 'auto',
})

export const StyledInputField = styled('input')({
	fontFamily: 'Futura, sans-serif',
  display: 'block',
  padding: '10px',
  margin: '10px',
  width: 'clamp(80px, 50%, 300px)',
  '::placeholder': {
    transition: 'opacity 0.25s',
    color: 'white',
    fontWeight: 500,
  },
  ':focus::placeholder': {
    opacity: 0,
  },
  border: '3px solid white',
  color: 'white',
  backgroundColor: 'rgb(194,187,178)',
  outline: "2px solid gainsboro",
  transitionProperty: "outline-offset, outline-color, background-color",
  transitionDuration: "0.25s",
  '&:hover': {
    outlineOffset: "2px",
  },
  '@media (max-width: 768px)': {
    margin: '5px',
  }
})

export const CodeInputField = styled(StyledInputField)({
  // width: 'clamp(80px, 50%, 300px)',
})

export const StyledForm = styled('form')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
})
