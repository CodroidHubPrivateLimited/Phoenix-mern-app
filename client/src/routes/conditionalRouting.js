import { Route, Routes } from "react-router-dom"
import Home from "../pages/users/01-home"
import Contact from "../pages/users/03-Contact"


function ConditionalRoute() {


    return (<>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/ContactUs' element={<Contact />} />
        </Routes>
    </>)

}

export default ConditionalRoute

