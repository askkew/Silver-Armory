import styled from '@emotion/styled';

export const GuardianPageContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'top',
  height: '100vh',
  width: '100vw',
  backgroundImage: 'url("https://i.imgur.com/p6KZ6v5.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
})

export const CharacterList = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  margin: '15px',
  gap: '15px',
  '@media (max-width: 668px)': {
    gap: '25px',
  }
})

export const SearchContainer = styled('div')({
  position: 'relative',
  cursor: 'pointer',
})

export const ImageContainer = styled('div')({
  position: 'relative',
  display: 'flex',
  alignItems: 'flex-start',
})

export const GuardianBanner = styled('img')({
  width: 'clamp(200px, 100%, 470px)',
  height: '100%',
  border: '3px solid gainsboro',
  transform: "translateZ(0)",
  outline: "3px solid gainsboro",
  transitionProperty: "outline-offset, outline-color, background-color",
  transitionDuration: "0.25s",
  '&:hover': {
    outlineOffset: "2px",
  },
  '@media (max-width: 668px)': {
    display: 'none',
  }
})

export const GuardianBannerIcon = styled('img')({
  width: '100%',
  height: '100%',
  border: '3px solid gainsboro',
  transform: "translateZ(0)",
  outline: "3px solid gainsboro",
  transitionProperty: "outline-offset, outline-color, background-color",
  transitionDuration: "0.25s",
  '&:hover': {
    outlineOffset: "2px",
  },
  '@media (min-width: 668px)': {
    display: 'none',
  }
})

export const LightLevel = styled('span')({
  color: 'rgb(231, 207, 81)',
  fontWeight: 450,
})

export const GuardianType = styled('h1')({
  position: 'absolute',
  bottom: '20%',
  left: '15%',
  padding: '10px',
  fontSize: '2vw',
  color: '#fff',
  fontWeight: 400,
  '@media (max-width: 668px)': {
    display: 'none',
  },
  '@media (min-width: 2068px)': {
    fontSize: '40px',
  }
})

export const GuardianRace = styled('h1')({
  position: 'absolute',
  top: '20%',
  left: '15%',
  padding: '10px',
  fontSize: '1.8vw',
  color: 'rgb(209, 209, 209)',
  fontWeight: 400,
  '@media (max-width: 668px)': {
    display: 'none',
  },
  '@media (min-width: 2068px)': {
    fontSize: '35px',
  }
})
