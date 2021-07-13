import './App.css';

import TFTData from './components/TFTData';
import ValorantData from './components/ValorantData';
import Home from './components/Home';
import MatchHistory from './components/MatchHistory';

import { Route } from 'react-router-dom';

import { createContext, useState } from 'react';

export const DataContext = createContext();

function App() {

  const [puuid, setPuuid] = useState('');
  // const [redirect, setRedirect] = useState(false)

  const proxy = 'https://whispering-coast-90137.herokuapp.com/';
  const key = 'api_key=RGAPI-11362960-4fb8-4744-a04a-4b46f266523b';

  // if(redirect) {
  //   return <Redirect to='/' />
  // }

  return (
    <DataContext.Provider value ={{proxy, key, puuid}}>
      <div className="App">
        {/* <nav><button onClick={() => {setRedirect(true)}}>HOME</button></nav> */}
        <h1>Riot Games Match History Finder</h1>
        <Route path='/' exact render={() => <Home />} />
        <Route path='/tft-data' exact render={() => <TFTData setPuuid={setPuuid}/>} />
        <Route path='/valorant-data' exact render={() => <ValorantData />} />
        <Route path='/match-history' exact render={() => <MatchHistory puuid={puuid} />} />


      </div>
    </DataContext.Provider>
  );
}

export default App;
