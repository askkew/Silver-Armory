import React, { useContext, useState } from 'react';
import { DataContext } from '../../utils/DataContext';
import { GuardianPageContainer, ImageContainer, SearchContainer, TextCustom, LightLevel, GuardianType, GuardianRace, CharacterList } from './GuardianPageStyles';

type CharacterInventoryProps = {
  character: any;
};

const CharacterInventory = ({ character }: CharacterInventoryProps) => {
  return (
    <div>
      {character.items.map((item: any) => (
        <div style={{ position: 'relative', display: 'inline-block'}} key={item.itemInstanceId}>
          <img src={`https://www.bungie.net${item.itemDetails.displayProperties.icon}`} alt={`${item.itemDetails.displayProperties.name}`} />
          <img style={{ position: 'absolute', top: 0, left: 0 }} src={`https://www.bungie.net${item.itemDetails.iconWatermark}`} alt="" />
        </div>
      ))}
    </div>
  );
};

const GuardianPage = () => {
  const { data } = useContext(DataContext);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  console.log('Data:', data);

  if (!data) {
    return null;
  }

  const getClassName = (classHash: number): string => {
    switch (classHash) {
      case 2271682572:
        return 'Warlock';
      case 671679327:
        return 'Hunter';
      case 3655393761:
        return 'Titan';
      default:
        return 'Unknown';
    }
  };
  
  const getRaceName = (raceHash: number): string => {
    switch (raceHash) {
      case 3887404748:
        return 'Human';
      case 2803282938:
        return 'Awoken';
      case 898834093:
        return 'Exo';
      default:
        return 'Unknown';
    }
  };

  return (
    <GuardianPageContainer>
      <CharacterList>
        {Object.entries(data.characters).map(([id, character]) => (
          <SearchContainer key={id}>
          {/* @ts-ignore */}
            <ImageContainer onClick={() => setSelectedCharacter(character)}>
              {/* @ts-ignore */}
              <img src={`https://www.bungie.net${character.emblemBackgroundPath}`} alt="Guardian-1"/>
              <div className="image-overlay">
              {/* @ts-ignore */}
                <LightLevel>{ character.light }</LightLevel>
                <TextCustom>
              {/* @ts-ignore */}
                  <GuardianType>{ getClassName(character.classHash) }</GuardianType>
              {/* @ts-ignore */}
                  <GuardianRace>{ getRaceName(character.raceHash) }</GuardianRace>
                </TextCustom>
              </div>
            </ImageContainer>
          </SearchContainer>
        ))}
      </CharacterList>
      {selectedCharacter && (
        <CharacterInventory character={selectedCharacter} />
      )}
    </GuardianPageContainer>
  )
}

export default GuardianPage;
