import React, { useContext, useState } from 'react';
import { DataContext } from '../../utils/DataContext';
import { GuardianBannerIcon, GuardianBanner, GuardianPageContainer, ImageContainer, SearchContainer, LightLevel, GuardianType, GuardianRace, CharacterList } from './GuardianPageStyles';
import GuardianInventory from '../../components/GuardianInventory';

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
              <GuardianBanner src={`https://www.bungie.net${character.emblemBackgroundPath}`} alt="Guardian-1" height="100"/>
              {/* @ts-ignore */}
              <GuardianBannerIcon src={`https://www.bungie.net${character.emblemPath}`} alt="Guardian-1" height="100"/>
              {/* @ts-ignore */}
              <GuardianType>{ getClassName(character.classHash) }</GuardianType>
              {/* @ts-ignore */}
              <GuardianRace>{ getRaceName(character.raceHash) }</GuardianRace>
            </ImageContainer>
          </SearchContainer>
        ))}
      </CharacterList>
      {selectedCharacter && (
        <GuardianInventory character={selectedCharacter} />
      )}
    </GuardianPageContainer>
  )
}

export default GuardianPage;