import { Route, Routes } from "react-router-dom"
import Home from "../pages/users/01-home"
import AboutUs from '../pages/users/02-about-us';
import Scholarships from "../compoents/users/homePageComponents/03-scholarships"
import AdminLogin from "../compoents/admin/forms/login";
import SignIn from "../compoents/admin/forms/sign_in";


function ConditionalRoute() {


    return (<>
        <Routes>
            <Route path='/admin-login' element={<AdminLogin />} />
            <Route path='/signin' element={<SignIn />} />

            <Route path='/' element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path='/Scholarships' element={<Scholarships />} />
        </Routes>
    </>)

}

export default ConditionalRoute

