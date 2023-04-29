import styled from '@emotion/styled';

export const GuardianInventoryContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  height: '90vh',
  width: '90vw',
  backgroundImage: 'url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3046bb39-8dcd-46b8-a486-ce9ce67ae102/dbgudlw-97141612-452d-43f8-aeb1-6579ecc08ead.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzMwNDZiYjM5LThkY2QtNDZiOC1hNDg2LWNlOWNlNjdhZTEwMlwvZGJndWRsdy05NzE0MTYxMi00NTJkLTQzZjgtYWViMS02NTc5ZWNjMDhlYWQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.S9j6g3vVbn7650ijG81Du-Kz_9LjVfc2cnCjzrc2fAI")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  overflow: 'hidden',
  marginBottom: '10vh',
})

export const InventoryBox = styled('div')({
  width: '60%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
})

export const LeftColumn = styled('div')({
  width: '50%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
})

export const RightColumnContainer = styled('div')({
  width: '50%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  // border: '1px solid green',
})

export const RightColumn = styled('div')({
  width: '25%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
  // border: '1px solid blue',
  alignSelf: 'flex-start',
})

export const RightColumnStats = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  // border: '1px solid red',
  alignSelf: 'flex-start',
  height: '100%',
})

export const ItemImageContainer = styled('div')({
  cursor: 'pointer',
})

export const ItemImageIcon = styled('img')({
  "&:hover": {
    opacity: 0.8,
    transition: 'all 0.3s ease-in-out',
  },
})

export const EmblemHover = styled('span')({
  position: 'absolute',
  bottom: '4px',
  left: '-1px',
  width: '100%',
  height: '94%',
  border: '2px solid gainsboro',
  transform: "translateZ(0)",
  outline: "2px solid gainsboro",
  transitionProperty: "outline-offset, outline-color, background-color",
  transitionDuration: "0.25s",
  '&:hover': {
    outlineOffset: "4px",
  },
})

export const SquareHover = styled('span')({
  position: 'absolute',
  bottom: '5px',
  left: '-1px',
  width: '100%',
  height: '94%',
  border: '2px solid gainsboro',
  transform: "translateZ(0)",
  outline: "2px solid gainsboro",
  transitionProperty: "outline-offset, outline-color, background-color",
  transitionDuration: "0.25s",
  '&:hover': {
    outlineOffset: "4px",
  },
})

export const TriangleHover = styled('span')({
  position: 'absolute',
  bottom: '30px',
  left: '28px',
  width: '65%',
  height: '64%',
  border: '2px solid gainsboro',
  outline: "2px solid gainsboro",
  transitionProperty: "outline-offset, outline-color, background-color",
  transitionDuration: "0.25s",
  '&:hover': {
    outlineOffset: "4px",
  },
  transform: 'rotate(45deg)',
  '-webkit-transform': 'rotate(45deg)',
  '-moz-transform': 'rotate(45deg)',
  '-ms-transform': 'rotate(45deg)',
  '-o-transform': 'rotate(45deg)',
})

export const Statname = styled('h1')({
  fontSize: '1.5rem',
  fontWeight: 600,
  color: 'white',
  textAlign: 'right',
  margin: 0,
})

export const Statvalue = styled('h1')({
  fontSize: '1.5rem',
  fontWeight: 600,
  color: 'white',
  textAlign: 'right',
  margin: 0,
})

export const Powertitle = styled('h1')({
  fontSize: '30px',
  fontWeight: 600,
  color: 'white',
  textAlign: 'right',
  margin: 0,
})

export const Powervalue = styled('h1')({
  color: 'rgb(231, 207, 81)',
  fontSize: '50px',
  fontWeight: 600,
  textAlign: 'right',
  margin: 0,
  marginBottom: 80,
})


