import { useState } from 'react';
import { Arc, ItemDescription, ItemInformationCard, ItemLightLevel, ItemName, ItemNameCommon, ItemNameExotic, ItemNameLegendary, ItemNameRare, ItemNameUncommon, Perk, PerkRow, Solar, Stasis, Strand, SubclassName, SubclassPerk, SubclassPerkGrid, Void } from '../ItemInformation/ItemInformationStyles';
import { GuardianInventoryContainer, InventoryBox, ItemImageContainer, ItemImageIcon, LeftColumn, Powertitle, Powervalue, RightColumn, RightColumnContainer, RightColumnStats, SquareHover, Statvalue, TriangleHover } from './GuardianInventoryStyles';

type CharacterInventoryProps = {
  character: any;
};

const leftList = [11, 0, 1, 2, 8];
const rightList = [3, 4, 5, 6, 7];

const GuardianInventory = ({ character }: CharacterInventoryProps) => {
  const [showSubclassInfo, setShowSubclassInfo] = useState(false);
  const [showHelmetInfo, setShowHelmetInfo] = useState(false);
  const [showGauntletsInfo, setShowGauntletsInfo] = useState(false);
  const [showChestInfo, setShowChestInfo] = useState(false);
  const [showLegsInfo, setShowLegsInfo] = useState(false);
  const [showPrimaryInfo, setShowPrimaryInfo] = useState(false);
  const [showSpecialInfo, setShowSpecialInfo] = useState(false);
  const [showHeavyInfo, setShowHeavyInfo] = useState(false);
  const [showGhostInfo, setShowGhostInfo] = useState(false);
  const [showClassItemInfo, setShowClassItemInfo] = useState(false);

  const toggleSubclassInfo = () => {
    setShowSubclassInfo(!showSubclassInfo);
  }

  const toggleHelmetInfo = () => {
    setShowHelmetInfo(!showHelmetInfo);
  }

  const toggleGauntletsInfo = () => {
    setShowGauntletsInfo(!showGauntletsInfo);
  }

  const toggleChestInfo = () => {
    setShowChestInfo(!showChestInfo);
  }

  const toggleLegsInfo = () => {
    setShowLegsInfo(!showLegsInfo);
  }

  const toggleClassItemInfo = () => {
    setShowClassItemInfo(!showClassItemInfo);
  }

  const togglePrimaryInfo = () => {
    setShowPrimaryInfo(!showPrimaryInfo);
  }

  const toggleSpecialInfo = () => {
    setShowSpecialInfo(!showSpecialInfo);
  }

  const toggleHeavyInfo = () => {
    setShowHeavyInfo(!showHeavyInfo);
  }

  const toggleGhostInfo = () => {
    setShowGhostInfo(!showGhostInfo);
  }

  return (
    <GuardianInventoryContainer>
      <InventoryBox>
        <LeftColumn>
          <ItemImageContainer onClick={toggleSubclassInfo} style={{ position: 'relative', display: 'inline-block'}}>
            <ItemImageIcon src={`https://www.bungie.net${character.items[11].itemDetails.displayProperties.icon}`} alt={`${character.items[11].itemDetails.displayProperties.name}`}/>
            <ItemImageIcon style={{ position: 'absolute', top: 0, left: 0, }} src={`https://www.bungie.net${character.items[11].itemDetails.iconWatermark}`} alt="" />
            <TriangleHover className="trianglehover"></TriangleHover>
            <TriangleHover className="trianglehover"></TriangleHover>
            {showSubclassInfo && (
              <ItemInformationCard>
                <img src={`https://www.bungie.net${character.items[11].itemDetails.screenshot}`} alt={`${character.items[11].itemDetails.displayProperties.name}`} height="250"/>
                <SubclassName>{character.items[11].itemDetails.displayProperties.name}</SubclassName>
                {character.items[11].itemDetails.inventory.tierTypeHash === 3340296461 ? (
                  <Solar></Solar>
                ) : character.items[11].itemDetails.inventory.tierTypeHash === 3340296461 ? (
                  <Void></Void>
                ) : character.items[11].itemDetails.inventory.tierTypeHash === 3340296461 ? (
                  <Arc></Arc>
                ) : character.items[11].itemDetails.inventory.tierTypeHash === 3340296461 ? (
                  <Stasis></Stasis>
                ) : (
                  <Strand></Strand>
                )}
                <SubclassPerkGrid>
                  {character.items[11].itemInstanceData.perks.data.perks.map((perk: any) => {
                    return (
                      <>
                        <SubclassPerk src={`https://www.bungie.net${perk.iconPath}`} alt="" height="40" />
                      </>
                    )
                  })}
                </SubclassPerkGrid>
              </ItemInformationCard>
            )}
          </ItemImageContainer>
          <ItemImageContainer onClick={togglePrimaryInfo} style={{ position: 'relative', display: 'inline-block'}}>
            <ItemImageIcon src={`https://www.bungie.net${character.items[0].itemDetails.displayProperties.icon}`} alt={`${character.items[0].itemDetails.displayProperties.name}`}/>
            <ItemImageIcon style={{ position: 'absolute', top: 0, left: 0, }} src={`https://www.bungie.net${character.items[0].itemDetails.iconWatermark}`} alt="" />
            <SquareHover></SquareHover>
            <SquareHover></SquareHover>
            {showPrimaryInfo && (
              <ItemInformationCard>
                <img style={{overflow: 'hidden'}} src={`https://www.bungie.net${character.items[0].itemDetails.screenshot}`} alt={`${character.items[0].itemDetails.displayProperties.name}`} height="250"/>
                <ItemName>{character.items[0].itemDetails.displayProperties.name}</ItemName>
                <ItemLightLevel>{character.items[0].itemInstanceData.instance.data.primaryStat.value}</ItemLightLevel>
                {character.items[0].itemDetails.inventory.tierTypeHash === 2759499571 ? (
                  <ItemNameExotic></ItemNameExotic>
                ) : character.items[0].itemDetails.inventory.tierTypeHash === 4008398120 ? (
                  <ItemNameLegendary></ItemNameLegendary>
                ) : character.items[0].itemDetails.inventory.tierTypeHash === 2127292149 ? (
                  <ItemNameRare></ItemNameRare>
                ) : character.items[0].itemDetails.inventory.tierTypeHash === 3340296461 ? (
                  <ItemNameUncommon></ItemNameUncommon>
                ) : (
                  <ItemNameCommon></ItemNameCommon>
                )}
                <ItemDescription>{character.items[0].itemDetails.itemTypeAndTierDisplayName}</ItemDescription>
                <PerkRow>
                  {character.items[0].itemInstanceData.perks.data.perks.map((perk: any) => {
                    return (
                      <>
                        <Perk src={`https://www.bungie.net${perk.iconPath}`} alt="" height="40" />
                        {/* <PerkName>{perk.displayProperties.name}</PerkName> */}
                      </>
                    )
                  })}
                </PerkRow>
              </ItemInformationCard>
            )}
          </ItemImageContainer>
          <ItemImageContainer onClick={toggleSpecialInfo} style={{ position: 'relative', display: 'inline-block'}}>
            <ItemImageIcon src={`https://www.bungie.net${character.items[1].itemDetails.displayProperties.icon}`} alt={`${character.items[1].itemDetails.displayProperties.name}`}/>
            <ItemImageIcon style={{ position: 'absolute', top: 0, left: 0, }} src={`https://www.bungie.net${character.items[1].itemDetails.iconWatermark}`} alt="" />
            <SquareHover></SquareHover>
            <SquareHover></SquareHover>
            {showSpecialInfo && (
              <ItemInformationCard>
                <img style={{overflow: 'hidden'}} src={`https://www.bungie.net${character.items[1].itemDetails.screenshot}`} alt={`${character.items[1].itemDetails.displayProperties.name}`} height="250"/>
                <ItemName>{character.items[1].itemDetails.displayProperties.name}</ItemName>
                <ItemLightLevel>{character.items[1].itemInstanceData.instance.data.primaryStat.value}</ItemLightLevel>
                {character.items[1].itemDetails.inventory.tierTypeHash === 2759499571 ? (
                  <ItemNameExotic></ItemNameExotic>
                ) : character.items[1].itemDetails.inventory.tierTypeHash === 4008398120 ? (
                  <ItemNameLegendary></ItemNameLegendary>
                ) : character.items[1].itemDetails.inventory.tierTypeHash === 2127292149 ? (
                  <ItemNameRare></ItemNameRare>
                ) : character.items[1].itemDetails.inventory.tierTypeHash === 3340296461 ? (
                  <ItemNameUncommon></ItemNameUncommon>
                ) : (
                  <ItemNameCommon></ItemNameCommon>
                )}
                <ItemDescription>{character.items[1].itemDetails.itemTypeAndTierDisplayName}</ItemDescription>
                <PerkRow>
                  {character.items[1].itemInstanceData.perks.data.perks.map((perk: any) => {
                    return (
                      <>
                        <Perk src={`https://www.bungie.net${perk.iconPath}`} alt="" height="40" />
                        {/* <PerkName>{perk.displayProperties.name}</PerkName> */}
                      </>
                    )
                  })}
                </PerkRow>
              </ItemInformationCard>
            )}
          </ItemImageContainer>
          <ItemImageContainer onClick={toggleHeavyInfo} style={{ position: 'relative', display: 'inline-block'}}>
            <ItemImageIcon src={`https://www.bungie.net${character.items[2].itemDetails.displayProperties.icon}`} alt={`${character.items[2].itemDetails.displayProperties.name}`}/>
            <ItemImageIcon style={{ position: 'absolute', top: 0, left: 0, }} src={`https://www.bungie.net${character.items[2].itemDetails.iconWatermark}`} alt="" />
            <SquareHover></SquareHover>
            <SquareHover></SquareHover>
            {showHeavyInfo && (
              <ItemInformationCard>
                <img style={{overflow: 'hidden'}} src={`https://www.bungie.net${character.items[2].itemDetails.screenshot}`} alt={`${character.items[2].itemDetails.displayProperties.name}`} height="250"/>
                <ItemName>{character.items[2].itemDetails.displayProperties.name}</ItemName>
                <ItemLightLevel>{character.items[2].itemInstanceData.instance.data.primaryStat.value}</ItemLightLevel>
                {character.items[2].itemDetails.inventory.tierTypeHash === 2759499571 ? (
                  <ItemNameExotic></ItemNameExotic>
                ) : character.items[2].itemDetails.inventory.tierTypeHash === 4008398120 ? (
                  <ItemNameLegendary></ItemNameLegendary>
                ) : character.items[2].itemDetails.inventory.tierTypeHash === 2127292149 ? (
                  <ItemNameRare></ItemNameRare>
                ) : character.items[2].itemDetails.inventory.tierTypeHash === 3340296461 ? (
                  <ItemNameUncommon></ItemNameUncommon>
                ) : (
                  <ItemNameCommon></ItemNameCommon>
                )}
                <ItemDescription>{character.items[2].itemDetails.itemTypeAndTierDisplayName}</ItemDescription>
                <PerkRow>
                  {character.items[2].itemInstanceData.perks.data.perks.map((perk: any) => {
                    return (
                      <>
                        <Perk src={`https://www.bungie.net${perk.iconPath}`} alt="" height="40" />
                        {/* <PerkName>{perk.displayProperties.name}</PerkName> */}
                      </>
                    )
                  })}
                </PerkRow>
              </ItemInformationCard>
            )}
          </ItemImageContainer>
          <ItemImageContainer onClick={toggleGhostInfo} style={{ position: 'relative', display: 'inline-block'}}>
            <ItemImageIcon src={`https://www.bungie.net${character.items[8].itemDetails.displayProperties.icon}`} alt={`${character.items[8].itemDetails.displayProperties.name}`}/>
            <ItemImageIcon style={{ position: 'absolute', top: 0, left: 0, }} src={`https://www.bungie.net${character.items[8].itemDetails.iconWatermark}`} alt="" />
            <SquareHover></SquareHover>
            <SquareHover></SquareHover>
            {showGhostInfo && (
              <ItemInformationCard>
                <img style={{overflow: 'hidden'}} src={`https://www.bungie.net${character.items[8].itemDetails.screenshot}`} alt={`${character.items[8].itemDetails.displayProperties.name}`} height="250"/>
                <ItemName>{character.items[8].itemDetails.displayProperties.name}</ItemName>
                <ItemLightLevel>{character.items[8].itemInstanceData.instance.data.primaryStat.value}</ItemLightLevel>
                {character.items[8].itemDetails.inventory.tierTypeHash === 2759499571 ? (
                  <ItemNameExotic></ItemNameExotic>
                ) : character.items[8].itemDetails.inventory.tierTypeHash === 4008398120 ? (
                  <ItemNameLegendary></ItemNameLegendary>
                ) : character.items[8].itemDetails.inventory.tierTypeHash === 2127292149 ? (
                  <ItemNameRare></ItemNameRare>
                ) : character.items[8].itemDetails.inventory.tierTypeHash === 3340296461 ? (
                  <ItemNameUncommon></ItemNameUncommon>
                ) : (
                  <ItemNameCommon></ItemNameCommon>
                )}
                <ItemDescription>{character.items[8].itemDetails.itemTypeAndTierDisplayName}</ItemDescription>
                {character.items[8].itemInstanceData.perks?.data?.perks?.length > 0 && (
                  <PerkRow>
                    {character.items[8].itemInstanceData.perks.data.perks.map((perk: any) => (
                      <Perk src={`https://www.bungie.net${perk?.iconPath}`} alt="" height="40" />
                      // <PerkName>{perk.displayProperties.name}</PerkName>
                    ))}
                  </PerkRow>
                )}
              </ItemInformationCard>
            )}
          </ItemImageContainer>
        </LeftColumn>
        <RightColumnContainer>
          <RightColumnStats>
            <Powertitle>Power</Powertitle>
            <Powervalue><img style={{marginRight: '4px', marginBottom: '20px'}}src="./assets/powericon.png" height="15"/>{character.stats['1935470627']}</Powervalue>
            <Statvalue><img style={{marginRight: '4px'}}src="./assets/mobilityicon.png" height="15"/>{character.stats['2996146975']}</Statvalue>
            <Statvalue><img style={{marginRight: '5px'}}src="./assets/resilienceicon.png" height="18"/>{character.stats['392767087']}</Statvalue>
            <Statvalue><img style={{marginRight: '4px'}}src="./assets/recoveryicon.png" height="18"/>{character.stats['1943323491']}</Statvalue>
            <Statvalue><img style={{marginRight: '5px'}}src="./assets/disciplineicon.png" height="18"/>{character.stats['1735777505']}</Statvalue>
            <Statvalue><img style={{marginRight: '5px'}}src="./assets/intellecticon.png" height="20"/>{character.stats['144602215']}</Statvalue>
            <Statvalue><img style={{marginRight: '7px'}}src="./assets/strengthicon.png" height="18"/>{character.stats['4244567218']}</Statvalue>
          </RightColumnStats>
          <RightColumn>
            <ItemImageContainer onClick={toggleHelmetInfo} style={{ position: 'relative', display: 'inline-block'}}>
              <ItemImageIcon src={`https://www.bungie.net${character.items[3].itemDetails.displayProperties.icon}`} alt={`${character.items[3].itemDetails.displayProperties.name}`}/>
              <ItemImageIcon style={{ position: 'absolute', top: 0, left: 0, }} src={`https://www.bungie.net${character.items[3].itemDetails.iconWatermark}`} alt="" />
              <SquareHover></SquareHover>
              <SquareHover></SquareHover>
              {showHelmetInfo && (
              <ItemInformationCard>
                <img style={{overflow: 'hidden'}} src={`https://www.bungie.net${character.items[3].itemDetails.screenshot}`} alt={`${character.items[8].itemDetails.displayProperties.name}`} height="250"/>
                <ItemName>{character.items[3].itemDetails.displayProperties.name}</ItemName>
                <ItemLightLevel>{character.items[3].itemInstanceData.instance.data.primaryStat.value}</ItemLightLevel>
                {character.items[3].itemDetails.inventory.tierTypeHash === 2759499571 ? (
                  <ItemNameExotic></ItemNameExotic>
                ) : character.items[3].itemDetails.inventory.tierTypeHash === 4008398120 ? (
                  <ItemNameLegendary></ItemNameLegendary>
                ) : character.items[3].itemDetails.inventory.tierTypeHash === 2127292149 ? (
                  <ItemNameRare></ItemNameRare>
                ) : character.items[3].itemDetails.inventory.tierTypeHash === 3340296461 ? (
                  <ItemNameUncommon></ItemNameUncommon>
                ) : (
                  <ItemNameCommon></ItemNameCommon>
                )}
                <ItemDescription>{character.items[3].itemDetails.itemTypeAndTierDisplayName}</ItemDescription>
                {character.items[3].itemInstanceData.perks?.data?.perks?.length > 0 && (
                  <PerkRow>
                    {character.items[3].itemInstanceData.perks.data.perks.map((perk: any) => (
                      <Perk src={`https://www.bungie.net${perk?.iconPath}`} alt="" height="40" />
                      // <PerkName>{perk.displayProperties.name}</PerkName>
                    ))}
                  </PerkRow>
                )}
              </ItemInformationCard>
            )}
            </ItemImageContainer>
            <ItemImageContainer onClick={toggleGauntletsInfo} style={{ position: 'relative', display: 'inline-block'}}>
              <ItemImageIcon src={`https://www.bungie.net${character.items[4].itemDetails.displayProperties.icon}`} alt={`${character.items[4].itemDetails.displayProperties.name}`}/>
              <ItemImageIcon style={{ position: 'absolute', top: 0, left: 0, }} src={`https://www.bungie.net${character.items[4].itemDetails.iconWatermark}`} alt="" />
              <SquareHover></SquareHover>
              <SquareHover></SquareHover>
              {showGauntletsInfo && (
              <ItemInformationCard>
                <img style={{overflow: 'hidden'}} src={`https://www.bungie.net${character.items[4].itemDetails.screenshot}`} alt={`${character.items[8].itemDetails.displayProperties.name}`} height="250"/>
                <ItemName>{character.items[4].itemDetails.displayProperties.name}</ItemName>
                <ItemLightLevel>{character.items[4].itemInstanceData.instance.data.primaryStat.value}</ItemLightLevel>
                {character.items[4].itemDetails.inventory.tierTypeHash === 2759499571 ? (
                  <ItemNameExotic></ItemNameExotic>
                ) : character.items[4].itemDetails.inventory.tierTypeHash === 4008398120 ? (
                  <ItemNameLegendary></ItemNameLegendary>
                ) : character.items[4].itemDetails.inventory.tierTypeHash === 2127292149 ? (
                  <ItemNameRare></ItemNameRare>
                ) : character.items[4].itemDetails.inventory.tierTypeHash === 3340296461 ? (
                  <ItemNameUncommon></ItemNameUncommon>
                ) : (
                  <ItemNameCommon></ItemNameCommon>
                )}
                <ItemDescription>{character.items[4].itemDetails.itemTypeAndTierDisplayName}</ItemDescription>
                {character.items[4].itemInstanceData.perks?.data?.perks?.length > 0 && (
                  <PerkRow>
                    {character.items[4].itemInstanceData.perks.data.perks.map((perk: any) => (
                      <Perk src={`https://www.bungie.net${perk?.iconPath}`} alt="" height="40" />
                      // <PerkName>{perk.displayProperties.name}</PerkName>
                    ))}
                  </PerkRow>
                )}
              </ItemInformationCard>
            )}
            </ItemImageContainer>
            <ItemImageContainer onClick={toggleChestInfo} style={{ position: 'relative', display: 'inline-block'}}>
              <ItemImageIcon src={`https://www.bungie.net${character.items[5].itemDetails.displayProperties.icon}`} alt={`${character.items[5].itemDetails.displayProperties.name}`}/>
              <ItemImageIcon style={{ position: 'absolute', top: 0, left: 0, }} src={`https://www.bungie.net${character.items[5].itemDetails.iconWatermark}`} alt="" />
              <SquareHover></SquareHover>
              <SquareHover></SquareHover>
              {showChestInfo && (
              <ItemInformationCard>
                <img style={{overflow: 'hidden'}} src={`https://www.bungie.net${character.items[5].itemDetails.screenshot}`} alt={`${character.items[8].itemDetails.displayProperties.name}`} height="250"/>
                <ItemName>{character.items[5].itemDetails.displayProperties.name}</ItemName>
                <ItemLightLevel>{character.items[5].itemInstanceData.instance.data.primaryStat.value}</ItemLightLevel>
                {character.items[5].itemDetails.inventory.tierTypeHash === 2759499571 ? (
                  <ItemNameExotic></ItemNameExotic>
                ) : character.items[5].itemDetails.inventory.tierTypeHash === 4008398120 ? (
                  <ItemNameLegendary></ItemNameLegendary>
                ) : character.items[5].itemDetails.inventory.tierTypeHash === 2127292149 ? (
                  <ItemNameRare></ItemNameRare>
                ) : character.items[5].itemDetails.inventory.tierTypeHash === 3340296461 ? (
                  <ItemNameUncommon></ItemNameUncommon>
                ) : (
                  <ItemNameCommon></ItemNameCommon>
                )}
                <ItemDescription>{character.items[5].itemDetails.itemTypeAndTierDisplayName}</ItemDescription>
                {character.items[5].itemInstanceData.perks?.data?.perks?.length > 0 && (
                  <PerkRow>
                    {character.items[5].itemInstanceData.perks.data.perks.map((perk: any) => (
                      <Perk src={`https://www.bungie.net${perk?.iconPath}`} alt="" height="40" />
                      // <PerkName>{perk.displayProperties.name}</PerkName>
                    ))}
                  </PerkRow>
                )}
              </ItemInformationCard>
            )}
            </ItemImageContainer>
            <ItemImageContainer onClick={toggleLegsInfo} style={{ position: 'relative', display: 'inline-block'}}>
              <ItemImageIcon src={`https://www.bungie.net${character.items[6].itemDetails.displayProperties.icon}`} alt={`${character.items[6].itemDetails.displayProperties.name}`}/>
              <ItemImageIcon style={{ position: 'absolute', top: 0, left: 0, }} src={`https://www.bungie.net${character.items[6].itemDetails.iconWatermark}`} alt="" />
              <SquareHover></SquareHover>
              <SquareHover></SquareHover>
              {showLegsInfo && (
              <ItemInformationCard>
                <img style={{overflow: 'hidden'}} src={`https://www.bungie.net${character.items[6].itemDetails.screenshot}`} alt={`${character.items[8].itemDetails.displayProperties.name}`} height="250"/>
                <ItemName>{character.items[6].itemDetails.displayProperties.name}</ItemName>
                <ItemLightLevel>{character.items[6].itemInstanceData.instance.data.primaryStat.value}</ItemLightLevel>
                {character.items[6].itemDetails.inventory.tierTypeHash === 2759499571 ? (
                  <ItemNameExotic></ItemNameExotic>
                ) : character.items[6].itemDetails.inventory.tierTypeHash === 4008398120 ? (
                  <ItemNameLegendary></ItemNameLegendary>
                ) : character.items[6].itemDetails.inventory.tierTypeHash === 2127292149 ? (
                  <ItemNameRare></ItemNameRare>
                ) : character.items[6].itemDetails.inventory.tierTypeHash === 3340296461 ? (
                  <ItemNameUncommon></ItemNameUncommon>
                ) : (
                  <ItemNameCommon></ItemNameCommon>
                )}
                <ItemDescription>{character.items[6].itemDetails.itemTypeAndTierDisplayName}</ItemDescription>
                {character.items[6].itemInstanceData.perks?.data?.perks?.length > 0 && (
                  <PerkRow>
                    {character.items[6].itemInstanceData.perks.data.perks.map((perk: any) => (
                      <Perk src={`https://www.bungie.net${perk?.iconPath}`} alt="" height="40" />
                      // <PerkName>{perk.displayProperties.name}</PerkName>
                    ))}
                  </PerkRow>
                )}
              </ItemInformationCard>
            )}
            </ItemImageContainer>
            <ItemImageContainer onClick={toggleClassItemInfo} style={{ position: 'relative', display: 'inline-block'}}>
              <ItemImageIcon src={`https://www.bungie.net${character.items[7].itemDetails.displayProperties.icon}`} alt={`${character.items[7].itemDetails.displayProperties.name}`}/>
              <ItemImageIcon style={{ position: 'absolute', top: 0, left: 0, }} src={`https://www.bungie.net${character.items[7].itemDetails.iconWatermark}`} alt="" />
              <SquareHover></SquareHover>
              <SquareHover></SquareHover>
              {showClassItemInfo && (
              <ItemInformationCard>
                <img style={{overflow: 'hidden'}} src={`https://www.bungie.net${character.items[7].itemDetails.screenshot}`} alt={`${character.items[8].itemDetails.displayProperties.name}`} height="250"/>
                <ItemName>{character.items[7].itemDetails.displayProperties.name}</ItemName>
                <ItemLightLevel>{character.items[7].itemInstanceData.instance.data.primaryStat.value}</ItemLightLevel>
                {character.items[7].itemDetails.inventory.tierTypeHash === 2759499571 ? (
                  <ItemNameExotic></ItemNameExotic>
                ) : character.items[7].itemDetails.inventory.tierTypeHash === 4008398120 ? (
                  <ItemNameLegendary></ItemNameLegendary>
                ) : character.items[7].itemDetails.inventory.tierTypeHash === 2127292149 ? (
                  <ItemNameRare></ItemNameRare>
                ) : character.items[7].itemDetails.inventory.tierTypeHash === 3340296461 ? (
                  <ItemNameUncommon></ItemNameUncommon>
                ) : (
                  <ItemNameCommon></ItemNameCommon>
                )}
                <ItemDescription>{character.items[7].itemDetails.itemTypeAndTierDisplayName}</ItemDescription>
                {character.items[7].itemInstanceData.perks?.data?.perks?.length > 0 && (
                  <PerkRow>
                    {character.items[7].itemInstanceData.perks.data.perks.map((perk: any) => (
                      <Perk src={`https://www.bungie.net${perk?.iconPath}`} alt="" height="40" />
                      // <PerkName>{perk.displayProperties.name}</PerkName>
                    ))}
                  </PerkRow>
                )}
              </ItemInformationCard>
            )}
            </ItemImageContainer>
          </RightColumn>
        </RightColumnContainer>
      </InventoryBox>
    </GuardianInventoryContainer>
  );
};

export default GuardianInventory


