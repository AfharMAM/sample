import React, {createContext, Context, useState} from 'react';
import Home from './component/home';

const con=createContext();

function App() {
  const [val, setVal] = useState("Afhar")
  return (
      <con.Provider value={val}>
        <h1>App</h1>
        <Home data={val}/>
      </con.Provider> 
  );
}

export default App;
