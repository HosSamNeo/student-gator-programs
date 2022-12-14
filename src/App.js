import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import Programs from './Components/Programs/Programs';
import ProgramsList from './Components/ProgramsList/ProgramsList';

const App = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <Programs />
    </div>
  )
}

export default App