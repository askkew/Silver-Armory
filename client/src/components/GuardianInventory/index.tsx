import { GuardianInventoryContainer, ItemImageContainer, LeftColumn, RightColumn, SquareHover, TriangleHover } from './GuardianInventoryStyles';

type CharacterInventoryProps = {
  character: any;
};

const GuardianInventory = ({ character }: CharacterInventoryProps) => {
  return (
    <GuardianInventoryContainer>
      <LeftColumn>
        <ItemImageContainer style={{ position: 'relative', display: 'inline-block'}}>
          <img src={`https://www.bungie.net${character.items[11].itemDetails.displayProperties.icon}`} alt={`${character.items[11].itemDetails.displayProperties.name}`}/>
          <img style={{ position: 'absolute', top: 0, left: 0, }} src={`https://www.bungie.net${character.items[11].itemDetails.iconWatermark}`} alt="" />
          <TriangleHover className="trianglehover"></TriangleHover>
          <TriangleHover className="trianglehover"></TriangleHover>
        </ItemImageContainer>
        <ItemImageContainer style={{ position: 'relative', display: 'inline-block'}}>
          <img src={`https://www.bungie.net${character.items[0].itemDetails.displayProperties.icon}`} alt={`${character.items[0].itemDetails.displayProperties.name}`}/>
          <img style={{ position: 'absolute', top: 0, left: 0, }} src={`https://www.bungie.net${character.items[0].itemDetails.iconWatermark}`} alt="" />
          <SquareHover></SquareHover>
          <SquareHover></SquareHover>
        </ItemImageContainer>
        <ItemImageContainer style={{ position: 'relative', display: 'inline-block'}}>
          <img src={`https://www.bungie.net${character.items[1].itemDetails.displayProperties.icon}`} alt={`${character.items[1].itemDetails.displayProperties.name}`}/>
          <img style={{ position: 'absolute', top: 0, left: 0, }} src={`https://www.bungie.net${character.items[1].itemDetails.iconWatermark}`} alt="" />
          <SquareHover></SquareHover>
          <SquareHover></SquareHover>
        </ItemImageContainer>
        <ItemImageContainer style={{ position: 'relative', display: 'inline-block'}}>
          <img src={`https://www.bungie.net${character.items[2].itemDetails.displayProperties.icon}`} alt={`${character.items[2].itemDetails.displayProperties.name}`}/>
          <img style={{ position: 'absolute', top: 0, left: 0, }} src={`https://www.bungie.net${character.items[2].itemDetails.iconWatermark}`} alt="" />
          <SquareHover></SquareHover>
          <SquareHover></SquareHover>
        </ItemImageContainer>
        <ItemImageContainer style={{ position: 'relative', display: 'inline-block'}}>
          <img src={`https://www.bungie.net${character.items[8].itemDetails.displayProperties.icon}`} alt={`${character.items[8].itemDetails.displayProperties.name}`}/>
          <img style={{ position: 'absolute', top: 0, left: 0, }} src={`https://www.bungie.net${character.items[8].itemDetails.iconWatermark}`} alt="" />
          <SquareHover></SquareHover>
          <SquareHover></SquareHover>
        </ItemImageContainer>
      </LeftColumn>
      <RightColumn>
        <ItemImageContainer style={{ position: 'relative', display: 'inline-block'}}>
          <img src={`https://www.bungie.net${character.items[3].itemDetails.displayProperties.icon}`} alt={`${character.items[3].itemDetails.displayProperties.name}`}/>
          <img style={{ position: 'absolute', top: 0, left: 0, }} src={`https://www.bungie.net${character.items[3].itemDetails.iconWatermark}`} alt="" />
          <SquareHover></SquareHover>
          <SquareHover></SquareHover>
        </ItemImageContainer>
        <ItemImageContainer style={{ position: 'relative', display: 'inline-block'}}>
          <img src={`https://www.bungie.net${character.items[4].itemDetails.displayProperties.icon}`} alt={`${character.items[4].itemDetails.displayProperties.name}`}/>
          <img style={{ position: 'absolute', top: 0, left: 0, }} src={`https://www.bungie.net${character.items[4].itemDetails.iconWatermark}`} alt="" />
          <SquareHover></SquareHover>
          <SquareHover></SquareHover>
        </ItemImageContainer>
        <ItemImageContainer style={{ position: 'relative', display: 'inline-block'}}>
          <img src={`https://www.bungie.net${character.items[5].itemDetails.displayProperties.icon}`} alt={`${character.items[5].itemDetails.displayProperties.name}`}/>
          <img style={{ position: 'absolute', top: 0, left: 0, }} src={`https://www.bungie.net${character.items[5].itemDetails.iconWatermark}`} alt="" />
          <SquareHover></SquareHover>
          <SquareHover></SquareHover>
        </ItemImageContainer>
        <ItemImageContainer style={{ position: 'relative', display: 'inline-block'}}>
          <img src={`https://www.bungie.net${character.items[6].itemDetails.displayProperties.icon}`} alt={`${character.items[6].itemDetails.displayProperties.name}`}/>
          <img style={{ position: 'absolute', top: 0, left: 0, }} src={`https://www.bungie.net${character.items[6].itemDetails.iconWatermark}`} alt="" />
          <SquareHover></SquareHover>
          <SquareHover></SquareHover>
        </ItemImageContainer>
        <ItemImageContainer style={{ position: 'relative', display: 'inline-block'}}>
          <img src={`https://www.bungie.net${character.items[7].itemDetails.displayProperties.icon}`} alt={`${character.items[7].itemDetails.displayProperties.name}`}/>
          <img style={{ position: 'absolute', top: 0, left: 0, }} src={`https://www.bungie.net${character.items[7].itemDetails.iconWatermark}`} alt="" />
          <SquareHover></SquareHover>
          <SquareHover></SquareHover>
        </ItemImageContainer>
      </RightColumn>
      {/* {character.items.map((item: any) => (
        <div style={{ position: 'relative', display: 'inline-block'}} key={item.itemInstanceId}>
          <img src={`https://www.bungie.net${item.itemDetails.displayProperties.icon}`} alt={`${item.itemDetails.displayProperties.name}`} />
          <img style={{ position: 'absolute', top: 0, left: 0, }} src={`https://www.bungie.net${item.itemDetails.iconWatermark}`} alt="" />
        </div>
      ))} */}
    </GuardianInventoryContainer>
  );
};

export default GuardianInventory