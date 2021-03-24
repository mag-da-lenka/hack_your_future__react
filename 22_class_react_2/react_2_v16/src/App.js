import './App.css';

import Header from './c_header.js'
import Counters from './c_counter_2ways.js'
import CounterWithEffect from './c_counter_eff.js';
import Pokemon1 from './c_pokemon_1.js';
import Pokemon2 from './c_pokemon_2.js';
import WatchCount1 from './c_watch_count_1.js'
import WatchCount2 from './c_watch_count_2.js'
import WatchCount3 from './c_watch_count_3.js'


function App() {
  return (
    <>
      <Header /> <br />
      <Counters /> <br />
      <CounterWithEffect /> <br />
      <Pokemon1 /> <br />
      <Pokemon2 /> <br />
      <WatchCount1 /> <br />
      <WatchCount2 /><br />
      <WatchCount3 />
    </>
  );
}

export default App;