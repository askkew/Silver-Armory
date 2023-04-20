import styled from '@emotion/styled';

export const GuardianPageContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'top',
  justifyContent: 'center',
  height: '100vh',
  width: '100vw',
  backgroundImage: 'url("https://i.imgur.com/p6KZ6v5.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
})

export const CharacterList = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'top',
  margin: '15px',
  gap: '15px',
})

export const SearchContainer = styled('div')({

})

export const ImageContainer = styled('div')({
  position: 'relative',
  display: 'inline-block',
  cursor: 'pointer',
  marginLeft: '30px',
  marginRight: '30px',
  "&:hover": {
    opacity: 0.8,
    // transform: 'scale(1.009)',
    transition: 'all 0.3s ease-in-out',
  },
})

export const LightLevel = styled('span')({
  position: 'absolute',
  bottom: '50%',
  right: '0%',
  padding: '5px',
  backgroundColor: 'transparent',
  color: 'rgb(231, 207, 81)',
  fontSize: '38px',
  fontWeight: 450,
})

export const TextCustom = styled('div')({
  position: 'absolute',
  backgroundColor: 'transparent',
  color: '#fff',
  top: '35%',
  left: '18%',
  transform: 'translate(0, -50%)',
  textAlign: 'left',
})

export const GuardianType = styled('h1')({
  color: '#fff',
  fontSize: '28px',
  fontWeight: 400,
})

export const GuardianRace = styled('h1')({
  color: 'rgb(209, 209, 209)',
  fontSize: '15px',
  fontWeight: 400,
})