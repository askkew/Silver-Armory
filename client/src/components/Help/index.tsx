import React, { useState } from 'react'
import { DropdownMenu, HelpContainer, QuestionMark, TempText, AccountText, NameGrid } from './HelpStyles'

const Help = () => {

  return (
    <HelpContainer>
      <TempText>
        Try it out with these accounts:
      </TempText>
      <NameGrid>
        <AccountText>everwilling#3572</AccountText>
        <AccountText>askew#1099</AccountText>
        <AccountText>DZA#7513</AccountText>
        <AccountText>TheOtherGuy#4120</AccountText>
      </NameGrid>
    </HelpContainer>
  )
}

export default Help