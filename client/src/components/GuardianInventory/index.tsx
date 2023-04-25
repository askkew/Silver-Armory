import { useState } from 'react';
import { Arc, ItemDamageType, ItemDescription, ItemInformationCard, ItemLightLevel, ItemName, ItemNameCommon, ItemNameExotic, ItemNameLegendary, ItemNameRare, ItemNameUncommon, ItemRowNameIcon, ItemStatlabel, ItemStatvalue, Perk, PerkRow, Solar, Stasis, Statcolumn, Statrow, Strand, SubclassName, SubclassPerk, SubclassPerkGrid, Void } from '../ItemInformation/ItemInformationStyles';
import { GuardianInventoryContainer, InventoryBox, ItemImageContainer, ItemImageIcon, LeftColumn, Powertitle, Powervalue, RightColumn, RightColumnContainer, RightColumnStats, SquareHover, Statvalue, TriangleHover } from './GuardianInventoryStyles';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

type CharacterInventoryProps = {
  character: any;
};



const getWeaponStat = (classHash: number): string => {
  switch (classHash) {
    case 155624089:
      return 'Stability';
    case 943549884:
      return 'Handling';
    case 1240592695 :
      return 'Range';
    case 1345609583  :
      return 'Aim Assistance';
    case 2714457168  :
      return 'Airborne Effectiveness';
    case 2715839340 :
      return 'Recoil Direction';
    case 3555269338 :
      return 'Zoom';
    case 3871231066  :
      return 'Magazine';
    case 4043523819  :
      return 'Impact';
    case 4188031367  :
      return 'Reload Speed';
    case 4284893193   :
      return 'RPM';
    default:
      return 'Unknown';
  }
};

// impact, range, stability, handling, reload speed, rpm, mag

const getDamageType = (raceHash: number): string => {
  switch (raceHash) {
    case 1847026933:
      return 'Solar';
    case 3373582085:
      return 'Kinetic';
    case 3454344768:
      return 'Void';
    case 2303181850:
      return 'Arc';
    case 151347233:
      return 'Stasis';
    case 3949783978:
      return 'Strand';
    default:
      return 'Unknown';
  }
};

const leftList = [11, 0, 1, 2, 8];
const rightList = [3, 4, 5, 6, 7];

const GuardianInventory = ({ character }: CharacterInventoryProps) => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (sectionName: any) => {
    setOpenSection(openSection === sectionName ? null : sectionName);
  }

  const isSectionOpen = (sectionName: any) => {
    return openSection === sectionName;
  }

  return (
    <GuardianInventoryContainer>
      <InventoryBox>
        <LeftColumn>
          <ItemImageContainer onClick={() => toggleSection('subclass')} style={{ position: 'relative', display: 'inline-block'}}>
            <ItemImageIcon src={`https://www.bungie.net${character.items[11].itemDetails.displayProperties.icon}`} alt={`${character.items[11].itemDetails.displayProperties.name}`}/>
            <ItemImageIcon style={{ position: 'absolute', top: 0, left: 0, }} src={`https://www.bungie.net${character.items[11].itemDetails.iconWatermark}`} alt="" />
            <TriangleHover className="trianglehover"></TriangleHover>
            <TriangleHover className="trianglehover"></TriangleHover>
            {isSectionOpen('subclass') && (
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
          <ItemImageContainer onClick={() => toggleSection('primary')} style={{ position: 'relative', display: 'inline-block'}}>
            <ItemImageIcon src={`https://www.bungie.net${character.items[0].itemDetails.displayProperties.icon}`} alt={`${character.items[0].itemDetails.displayProperties.name}`}/>
            <ItemImageIcon style={{ position: 'absolute', top: 0, left: 0, }} src={`https://www.bungie.net${character.items[0].itemDetails.iconWatermark}`} alt="" />
            <SquareHover></SquareHover>
            <SquareHover></SquareHover>
            {isSectionOpen('primary') && (
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
                <Statcolumn>
                {Object.keys(character.items[0].itemInstanceData.stats.data.stats).map((statKey) => {
                  const stat = character.items[0].itemInstanceData.stats.data.stats[statKey];
                  const data = [{ name: getWeaponStat(stat.statHash), value: stat.value }];
                  return (
                    <BarChart layout="vertical" width={180} height={20} data={data}>
                      <XAxis type="number" hide />
                      <YAxis type="category" width={60} dataKey="name" 
                      // tick={(props) => (
                      //   <text {...props} fontSize={10} />
                      // )}
                      />
                      <Bar dataKey="value" fill="#fff" barSize={15} />
                    </BarChart>
                  );
                })}
                {/* {Object.keys(character.items[0].itemInstanceData.stats.data.stats).map((statKey) => {
                  const stat = character.items[0].itemInstanceData.stats.data.stats[statKey];
                  return (
                    <Statrow key={stat.statHash}>
                      <ItemStatlabel>{getWeaponStat(stat.statHash)}: </ItemStatlabel>
                      <ItemStatvalue>{stat.value}</ItemStatvalue>
                    </Statrow>
                  );
                })} */}
                </Statcolumn>
              </ItemInformationCard>
            )}
          </ItemImageContainer>
          <ItemImageContainer onClick={() => toggleSection('special')} style={{ position: 'relative', display: 'inline-block'}}>
            <ItemImageIcon src={`https://www.bungie.net${character.items[1].itemDetails.displayProperties.icon}`} alt={`${character.items[1].itemDetails.displayProperties.name}`}/>
            <ItemImageIcon style={{ position: 'absolute', top: 0, left: 0, }} src={`https://www.bungie.net${character.items[1].itemDetails.iconWatermark}`} alt="" />
            <SquareHover></SquareHover>
            <SquareHover></SquareHover>
            {isSectionOpen('special') && (
              <ItemInformationCard>
                <img style={{overflow: 'hidden'}} src={`https://www.bungie.net${character.items[1].itemDetails.screenshot}`} alt={`${character.items[1].itemDetails.displayProperties.name}`} height="250"/>
                <ItemRowNameIcon>
                  <ItemName>{character.items[1].itemDetails.displayProperties.name}</ItemName>
                  {/* {character.items[1].itemInstanceData.instance.data.damageTypeHash === 1847026933 ? (
                    <ItemDamageType src="./assets/solaricon.png" height="15"/>
                  ) : character.items[1].itemInstanceData.instance.data.damageTypeHash === 3373582085 ? (
                    <ItemDamageType src="./assets/kineticicon.png" height="15"/>
                  ) : character.items[1].itemInstanceData.instance.data.damageTypeHash === 3454344768 ? (
                    <ItemDamageType src="./assets/voidicon.png" height="15"/>
                  ) : character.items[1].itemInstanceData.instance.data.damageTypeHash === 2303181850 ? (
                    <ItemDamageType src="./assets/arcicon.png" height="15"/>
                  ) : character.items[1].itemInstanceData.instance.data.damageTypeHash === 151347233 ? (
                    <ItemDamageType src="./assets/stasisicon.png" height="15"/>
                  ) : character.items[1].itemInstanceData.instance.data.damageTypeHash === 3949783978 ? (
                    <ItemDamageType src="./assets/strandicon.png" height="15"/>
                  ) : (
                    <span>test</span>
                  )} */}
                </ItemRowNameIcon>
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
                <Statcolumn>
                {Object.keys(character.items[1].itemInstanceData.stats.data.stats).map((statKey) => {
                  const stat = character.items[1].itemInstanceData.stats.data.stats[statKey];
                  return (
                    <Statrow key={stat.statHash}>
                      <ItemStatlabel>{getWeaponStat(stat.statHash)}: </ItemStatlabel>
                      <ItemStatvalue>{stat.value}</ItemStatvalue>
                    </Statrow>
                  );
                })}
                </Statcolumn>
              </ItemInformationCard>
            )}
          </ItemImageContainer>
          <ItemImageContainer onClick={() => toggleSection('heavy')} style={{ position: 'relative', display: 'inline-block'}}>
            <ItemImageIcon src={`https://www.bungie.net${character.items[2].itemDetails.displayProperties.icon}`} alt={`${character.items[2].itemDetails.displayProperties.name}`}/>
            <ItemImageIcon style={{ position: 'absolute', top: 0, left: 0, }} src={`https://www.bungie.net${character.items[2].itemDetails.iconWatermark}`} alt="" />
            <SquareHover></SquareHover>
            <SquareHover></SquareHover>
            {isSectionOpen('heavy') && (
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
                <Statcolumn>
                {Object.keys(character.items[2].itemInstanceData.stats.data.stats).map((statKey) => {
                  const stat = character.items[2].itemInstanceData.stats.data.stats[statKey];
                  return (
                    <Statrow key={stat.statHash}>
                      <ItemStatlabel>{getWeaponStat(stat.statHash)}: </ItemStatlabel>
                      <ItemStatvalue>{stat.value}</ItemStatvalue>
                    </Statrow>
                  );
                })}
                </Statcolumn>
              </ItemInformationCard>
            )}
          </ItemImageContainer>
          <ItemImageContainer onClick={() => toggleSection('ghost')} style={{ position: 'relative', display: 'inline-block'}}>
            <ItemImageIcon src={`https://www.bungie.net${character.items[8].itemDetails.displayProperties.icon}`} alt={`${character.items[8].itemDetails.displayProperties.name}`}/>
            <ItemImageIcon style={{ position: 'absolute', top: 0, left: 0, }} src={`https://www.bungie.net${character.items[8].itemDetails.iconWatermark}`} alt="" />
            <SquareHover></SquareHover>
            <SquareHover></SquareHover>
            {isSectionOpen('ghost') && (
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
            <ItemImageContainer onClick={() => toggleSection('helmet')} style={{ position: 'relative', display: 'inline-block'}}>
              <ItemImageIcon src={`https://www.bungie.net${character.items[3].itemDetails.displayProperties.icon}`} alt={`${character.items[3].itemDetails.displayProperties.name}`}/>
              <ItemImageIcon style={{ position: 'absolute', top: 0, left: 0, }} src={`https://www.bungie.net${character.items[3].itemDetails.iconWatermark}`} alt="" />
              <SquareHover></SquareHover>
              <SquareHover></SquareHover>
              {isSectionOpen('helmet') && (
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
            <ItemImageContainer onClick={() => toggleSection('gauntlets')} style={{ position: 'relative', display: 'inline-block'}}>
              <ItemImageIcon src={`https://www.bungie.net${character.items[4].itemDetails.displayProperties.icon}`} alt={`${character.items[4].itemDetails.displayProperties.name}`}/>
              <ItemImageIcon style={{ position: 'absolute', top: 0, left: 0, }} src={`https://www.bungie.net${character.items[4].itemDetails.iconWatermark}`} alt="" />
              <SquareHover></SquareHover>
              <SquareHover></SquareHover>
              {isSectionOpen('gauntlets') && (
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
            <ItemImageContainer onClick={() => toggleSection('chest')} style={{ position: 'relative', display: 'inline-block'}}>
              <ItemImageIcon src={`https://www.bungie.net${character.items[5].itemDetails.displayProperties.icon}`} alt={`${character.items[5].itemDetails.displayProperties.name}`}/>
              <ItemImageIcon style={{ position: 'absolute', top: 0, left: 0, }} src={`https://www.bungie.net${character.items[5].itemDetails.iconWatermark}`} alt="" />
              <SquareHover></SquareHover>
              <SquareHover></SquareHover>
              {isSectionOpen('chest') && (
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
            <ItemImageContainer onClick={() => toggleSection('legs')} style={{ position: 'relative', display: 'inline-block'}}>
              <ItemImageIcon src={`https://www.bungie.net${character.items[6].itemDetails.displayProperties.icon}`} alt={`${character.items[6].itemDetails.displayProperties.name}`}/>
              <ItemImageIcon style={{ position: 'absolute', top: 0, left: 0, }} src={`https://www.bungie.net${character.items[6].itemDetails.iconWatermark}`} alt="" />
              <SquareHover></SquareHover>
              <SquareHover></SquareHover>
              {isSectionOpen('legs') && (
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
            <ItemImageContainer onClick={() => toggleSection('classitem')} style={{ position: 'relative', display: 'inline-block'}}>
              <ItemImageIcon src={`https://www.bungie.net${character.items[7].itemDetails.displayProperties.icon}`} alt={`${character.items[7].itemDetails.displayProperties.name}`}/>
              <ItemImageIcon style={{ position: 'absolute', top: 0, left: 0, }} src={`https://www.bungie.net${character.items[7].itemDetails.iconWatermark}`} alt="" />
              <SquareHover></SquareHover>
              <SquareHover></SquareHover>
              {isSectionOpen('classitem') && (
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


