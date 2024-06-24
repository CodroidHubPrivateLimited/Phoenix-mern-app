import { Route, Routes } from "react-router-dom"
import Home from "../pages/users/01-home"
import AboutUs from '../pages/users/02-about-us';
import Scholarships from "../compoents/users/homePageComponents/03-scholarships"
import AdminLogin from "../compoents/admin/forms/login";
import SignUp from "../compoents/admin/forms/signup";


function ConditionalRoute() {


    return (<>
        <Routes>
            <Route path='/login' element={<AdminLogin />} />
            <Route path="/signin" element={<SignUp/>}/>
            <Route path='/' element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path='/Scholarships' element={<Scholarships />} />
        </Routes>
    </>)

}

export default ConditionalRoute

