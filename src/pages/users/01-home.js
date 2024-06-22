import React from 'react'
import NavBar from '../../compoents/users/navigation/navbar';
import AboutUs from '../../compoents/users/homePageComponents/02-aboutUs';
import Faculties from '../../compoents/users/Faculties-homepage/faculties';

function Home() {
    return (
        <div>
             <NavBar />
            <AboutUs />
            <Faculties/>
        </div>
    )
}

export default Home;