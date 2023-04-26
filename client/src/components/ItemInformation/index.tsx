import React from 'react'
import { WeaponInformationCard } from './ItemInformationStyles';

type CharacterInventoryProps = {
  character: any;
};

const ItemInformation = ({ character }: CharacterInventoryProps) => {
  return (
    <WeaponInformationCard>
      <img src={`https://www.bungie.net${character.items[0].itemDetails.displayProperties.icon}`} alt={`${character.items[0].itemDetails.displayProperties.name}`} height="20"/>
    </WeaponInformationCard>
  )
}

export default ItemInformation