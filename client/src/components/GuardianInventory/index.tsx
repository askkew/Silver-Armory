// import React, { useContext } from 'react';
// import { DataContext } from '../../utils/DataContext';
// import { GuardianInventoryContainer } from './GuardianInventoryStyles';
export {}
// interface InventoryItem {
//   itemInstanceId: string;
//   itemDetails?: {
//     displayProperties?: {
//       name: string;
//       // Add other properties here as needed
//     };
//     // Add other properties here as needed
//   };
//   // Add other properties here as needed
// }

// interface Inventory {
//   items: InventoryItem[];
//   // Add other properties here as needed
// }

// interface Guardian {
//   inventorys?: Record<string, Inventory>;
//   // Add other properties here as needed
// }

// const GuardianInventory: React.FC = () => {
//   const { data } = useContext(DataContext);
//   console.log('Data:', data);

//   return (
//     <GuardianInventoryContainer>
//       {data.inventorys &&
//         Object.entries<Guardian['inventorys']>(data.inventorys).map(
//           ([characterId, inventory]) => (
//             <div key={characterId}>
//               <h3>Character ID: {characterId}</h3>
//               <ul>
//                 {inventory.items.map((item: InventoryItem) => (
//                   <li key={item.itemInstanceId}>
//                     <h4>Item Name: {item.itemDetails?.displayProperties?.name}</h4>
//                     {/* Render other properties for each item */}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )
//         )}
//     </GuardianInventoryContainer>
//   );
// };

// export default GuardianInventory;
