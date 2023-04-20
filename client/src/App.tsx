import React, { useState } from 'react';
import { DataContext } from './utils/DataContext';
import GuardianPage from './pages/GuardianPage';
import SearchBar from './components/Search-Bar';

function App() {
  const [data, setData] = useState(null);
  return (
    <div className="App">
      <DataContext.Provider value={{ data, setData }}>
        <SearchBar />
        <GuardianPage />
        {/* other components that need access to the data */}
      </DataContext.Provider>
    </div>
  );
}

export default App;
