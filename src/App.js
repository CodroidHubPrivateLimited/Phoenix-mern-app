import "./App.css"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/users/01-home";
import NavBar from '../src/compoents/users/navigation/navbar';
import FacultiesMain from "./compoents/users/Faculties-homepage/Faculties-main/faculties-main01";
import Aboutus from "./compoents/users/About-us/about-us";
import Scholorship from "./compoents/users/Scholorship/scholorship";
import Nopage from "./compoents/users/Nopage/nopage";


function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={< Home/>}/>
        <Route path='/faculties' element={< FacultiesMain/>}/>
        <Route path='/aboutus' element={< Aboutus/>}/>
        <Route path='/sceloreship' element={< Scholorship/>}/>
        <Route path='*' element={< Nopage/>}/>

        
      </Routes>
    </>
  );
}

export default App;
