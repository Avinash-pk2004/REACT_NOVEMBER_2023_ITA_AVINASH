
import './App.css';
import Webpage from './components/webpage';
import Login from './components/Login';
import Reg from './components/Reg';

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route exact path='/' element={<Webpage/>}></Route>
          <Route exact path='/Login' element={<Login/>}></Route>
          <Route exact path='/Reg' element={<Reg/>}></Route>
        </Routes>
      </Router> 
      
       
    </div>
  );
}

export default App;
