import { Route, Routes } from "react-router-dom"
import Home from "../pages/users/01-home"
import About from '../compoents/about/about';



function ConditionalRoute() {


    return (<>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/about" element={<About />}/>
        </Routes>
    </>)

}

export default ConditionalRoute

