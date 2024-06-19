import { Route, Routes } from "react-router-dom"
import Home from "../pages/users/01-home"


function ConditionalRoute() {


    return (<>
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
    </>)

}

export default ConditionalRoute

