import React from 'react'
import { ItemInformationCard } from './ItemInformationStyles';

type CharacterInventoryProps = {
  character: any;
};

const ItemInformation = ({ character }: CharacterInventoryProps) => {
  return (
    <ItemInformationCard>
      <img src={`https://www.bungie.net${character.items[0].itemDetails.displayProperties.icon}`} alt={`${character.items[0].itemDetails.displayProperties.name}`} height="20"/>
    </ItemInformationCard>
  )
}

export default ItemInformation