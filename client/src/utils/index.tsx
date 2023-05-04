import styled from '@emotion/styled';

export const StyledButton = styled('button')({
  fontFamily: 'Futura, sans-serif',
  display: 'block',
  padding: '10px',
  border: '3px solid white',
  color: 'white',
  font: 'inherit',
  margin: '10px',
  backgroundColor: 'rgb(68,115,68)',
  cursor: 'pointer',
  outline: "2px solid gainsboro",
  transitionProperty: "outline-offset, outline-color, background-color",
  transitionDuration: "0.25s",
  '&:hover': {
    outlineOffset: "2px",
  },
})

export const ButtonLabel = styled('span')({
  fontFamily: 'Futura, sans-serif',
  fontWeight: 500,
})