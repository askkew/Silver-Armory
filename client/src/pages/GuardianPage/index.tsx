import React, { useContext } from 'react';
import { DataContext } from '../../utils/DataContext'
import { GuardianPageContainer } from './GuardianPageStyles'

const GuardianPage = () => {
  const { data } = useContext(DataContext);
  console.log(data);
  return (
    <GuardianPageContainer>
      <h1>Guardian Page</h1>
      <h1 className="test">test</h1>
    </GuardianPageContainer>
  )
}

export default GuardianPage