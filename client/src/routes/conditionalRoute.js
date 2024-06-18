import { Route, Routes } from "react-router-dom"
import Home from "../pages/01-homePage"
import Services from "../pages/02-servicesPage"
import ContactUsPage from "../pages/03-contactUsPage"

function ConditionalRoute() {


    return (<>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/services' element={<Services />} />
            <Route path='/contact-us' element={<ContactUsPage />} />
        </Routes>
    </>)

}

export default ConditionalRoute

