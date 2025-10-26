
import './App.css'
import Developer from "./Management/Developer"


import React from 'react';

const App = () => {
  return (
    <div className='my-10 px-10'>
     

      <Developer
          name={"Nayem sir"}
          roll={"01"}
          hometown={"Barguna"}
          department={"cst"}
      
      />


      <Developer
          name={"Mezba"}
          roll={"639086"}
          hometown={"Bogura"}
          department={"cst"}
      
      />


      <Developer
          name={"MMM"}
          roll={"0000"}
          hometown={"Joypurhat"}
          department={"Honurs-economics"}
      
      />
      
    </div>
  );
};

export default App;
