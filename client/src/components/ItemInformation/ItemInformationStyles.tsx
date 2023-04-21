import styled from "@emotion/styled";

export const ItemInformationCard = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '440px',
  height: '250px',
  border: '10px solid rgba(0, 0, 0, 0.5)',
  position: 'absolute',
  top: '4%',
  right: '120%',
  "&:hover": {
    opacity: 1,
  },
  overflow: 'hidden',
})

//------------------Item Name------------------//

export const ItemName = styled('h1')({
  position: 'absolute',
  top: '-9%',
  left: '10px',
  color: 'white',
  fontSize: '28px',
  fontWeight: 500,
  zIndex: 90,
})

export const ItemLightLevel = styled('h1')({
  position: 'absolute',
  top: '-6%',
  right: '10px',
  color: 'rgb(231, 207, 81)',
  textShadow: '0px 0px 10px rgb(0, 0, 0, 0.251)',
  fontSize: '23px',
  fontWeight: 500,
  zIndex: 90,
})

export const ItemNameBackground = styled('span')({
  position: 'absolute',
  opacity: 0.6,
  width: '100%',
  height: '13%',
  top: '0%',
  left: '0%',
  zIndex: 80,
  boxShadow: 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px',
})

export const ItemNameExotic = styled(ItemNameBackground)({
  backgroundColor: 'rgb(206,174,51)',
})

export const ItemNameLegendary = styled(ItemNameBackground)({
  backgroundColor: 'rgb(82,47,101)',
})

export const ItemNameRare = styled(ItemNameBackground)({
  backgroundColor: 'rgb(86,126,157)',
})

export const ItemNameUncommon = styled(ItemNameBackground)({
  backgroundColor: 'rgb(51,107,62)',
})

export const ItemNameCommon = styled(ItemNameBackground)({
  backgroundColor: 'rgb(194,187,178)',
})

//------------------Subclass Name------------------//

export const SubclassName = styled('h1')({
  position: 'absolute',
  top: '-9%',
  left: '10px',
  color: 'white',
  fontSize: '28px',
  fontWeight: 500,
  zIndex: 90,
})

export const SubclassBackground = styled('span')({
  position: 'absolute',
  opacity: 0.6,
  width: '100%',
  height: '13%',
  top: '0%',
  left: '0%',
  zIndex: 80,
  boxShadow: 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px',
})

export const Solar = styled(SubclassBackground)({
  backgroundColor: 'rgb(242,114,27)',
})

export const Void = styled(SubclassBackground)({
  backgroundColor: 'rgb(110,83,160)',
})

export const Arc = styled(SubclassBackground)({
  backgroundColor: 'rgb(73,122,155)',
})

export const Stasis = styled(SubclassBackground)({
  backgroundColor: 'rgb(46, 56, 182)',
})

export const Strand = styled(SubclassBackground)({
  backgroundColor: 'rgb(51,107,62)',
})

//------------------Other------------------//

export const ItemDescription = styled('h1')({
  position: 'absolute',
  top: '10%',
  left: '12px',
  color: 'white',
  fontSize: '15px',
  fontWeight: 500,
})

//------------------Perks------------------//

export const PerkRow = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'left',
  position: 'absolute',
  top: '23%',
  left: '10px',
})

export const Perk = styled('img')({
})

//------------------Subclass------------------//

export const SubclassPerkGrid = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  position: 'absolute',
  top: '23%',
  left: '40px',
})

export const SubclassPerk = styled('img')({
})

//------------------Stats------------------//

export const Statcolumn = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'left',
  position: 'absolute',
  top: '40%',
  left: '12px',
})

export const Statrow = styled('div')({
  display: 'flex',
  flexDirection: 'row',
})

export const ItemStatlabel = styled('h1')({
  color: 'white',
  fontSize: '10px',
  fontWeight: 500,
  margin: 0,
})

export const ItemStatvalue = styled('h1')({
  color: 'rgb(231, 207, 81)',
  fontSize: '10px',
  fontWeight: 500,
  margin: 0,
  position: 'relative',
  left: '8px',
  top: '0px',
})