import React from 'react'
import AboutUs from '../../compoents/users/homePageComponents/02-aboutUs'
import Scholarships from '../../compoents/users/homePageComponents/03-scholarships'
import Carousel from "../../compoents/users/homePageComponents/01-carousel"

function Home() {
    return (
        <div>
            <Carousel />
            <AboutUs />
            <Scholarships />
        </div>
    )
}

export default Home