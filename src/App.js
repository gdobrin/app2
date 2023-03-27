import Navbar from './ContextAPI/Navbar';
import ReducerBasics from './useReducer/UseReducer';
import UseRefBasics from './references/UseRefBasics';
import Redux from './redux/Redux';
import Portals from './portals/Portals';
import Boundaries from './boundaries/Boundaries';
import './App.css';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    
      <Routes>
        <Route path="/contextapi" element={ <Navbar/>} />
        <Route path="/usereducer" element={ <ReducerBasics /> } />
        <Route path="/references" element={ <UseRefBasics/> } />
        <Route path="/redux" element={ <Redux/> } />
        <Route path="/portals" element={ <Portals/> } />
        <Route path="/boundaries" element={ <Boundaries name1="test1" name2="test2"/> } />
      </Routes>
    
  );
}

export default App;
