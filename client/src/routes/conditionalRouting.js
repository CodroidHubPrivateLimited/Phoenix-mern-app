import { Route, Routes } from "react-router-dom"
import Home from "../pages/users/01-home"
import About from '../compoents/about/about';
import Scholarships from "../compoents/users/homePageComponents/03-scholarships"


function ConditionalRoute() {


    return (<>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/about" element={<About />}/>
            <Route path='/Scholarships' element={<Scholarships/>} />
        </Routes>
    </>)

}

export default ConditionalRoute

