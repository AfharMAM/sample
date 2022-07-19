import React, {useContext,createContext, Context} from 'react';

const datas=createContext();

function Sample() {
    const val = useContext(createContext())
    return (
      <div>
        <h1>Sample {val}</h1>
      </div> 
  );
}

export default Sample;
