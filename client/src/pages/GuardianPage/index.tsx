import React, { useContext } from 'react';
import { DataContext } from '../../utils/DataContext';
import { GuardianPageContainer } from './GuardianPageStyles';

const GuardianPage = () => {
  const { data } = useContext(DataContext);
  console.log('Data:', data);

  if (!data) {
    return null;
  }

  return (
    <GuardianPageContainer>
      <div className="characterlist">
        {Object.entries(data.characters).map(([id, character]) => (
          <h1 style={{color: 'white', margin: 10}} key={id}>{id}</h1>
        ))}
      </div>
      <div className="characterlist">
        {Object.entries(data.characters).map(([id, character]) => (
          <div key={id}>
            {/* @ts-ignore */}
            <h1 style={{color: 'white', margin: 10}}>{character.light}</h1>
          </div>
        ))}
      </div>
    </GuardianPageContainer>
  )
}

export default GuardianPage;