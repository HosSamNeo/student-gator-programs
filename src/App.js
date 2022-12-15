import React from 'react';
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import UnderConstruction from './Components/UnderConstruction/UnderConstruction';
import Navbar from './Components/Navbar/Navbar';
import Programs from './Components/Programs/Programs';
import Footer from './Components/Footer/Footer';
import ProgramPage from './Components/ProgramPage/ProgramPage';



const App = () => {
  return (
    <Router>
    <Navbar />
    <Routes>
    <Route path='/programs' exact element={<Programs />} />

      <Route path='/' element={<UnderConstruction />} />
      <Route path='/home' element={<UnderConstruction />} />
      <Route path='/about' element={<UnderConstruction />} />
      <Route path='/programs/:id' element={<ProgramPage />} />
      <Route path='/blog' element={<UnderConstruction />} />
      <Route path='*' element={<UnderConstruction />} />
    </Routes>
    <Footer />
  </Router>
  )
}

export default App;