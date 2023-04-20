import React, { useContext } from 'react';
import { DataContext } from '../../utils/DataContext';

const GuardianInventory = () => {
  const { data } = useContext(DataContext);
  console.log('Data:', data);

  if (!data) {
    return null;
  }

  return (
    <div>
      <div>
        {Object.entries(data.characters).map(([id, character]) => (
          <div key={id}>
            {/* @ts-ignore */}
            {/* <h1 style={{color: 'white', margin: 10}}>{character.light}</h1> */}
            <div>
            {/* @ts-ignore */}
              {character.items.map((item) => (
                <img key={item.itemInstanceId} src={`https://www.bungie.net${item.itemDetails.displayProperties.icon}`} alt={`${item.itemDetails.displayProperties.name}`} />
              ))}
            </div>
            {/* <img src={`https://www.bungie.net${character.items[0].itemDetails.displayProperties.icon}`} alt="Guardian-1" /> */}
            {/* <p>First item hash: {character.items[0].itemHash}</p> */}
            {/* <img src={`https://www.bungie.net${character.emblemBackgroundPath}`} alt="Guardian-1" /> */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default GuardianInventory