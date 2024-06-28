import React from "react"
import { useNavigate } from 'react-router-dom'
import "./navbar.css"
const NavBar = () => {
    const navigate = useNavigate()
    return (
        <>
            <div
                class="navbar"
            >
                <div
                    class="logo-container"><img src="./logo.jpg"></img></div>

                <div class="links-container">
                    <p onClick={() => navigate("/")}> Home</p>
                    <p onClick={() => navigate("/about-us")}> AboutUs</p>
                    <p onClick={() => navigate("/scholarships")}>Scholarships</p>
                    <p onClick={() => navigate("/faculties")}>faculties</p>
                    <p onClick={() => navigate("/news")}>news</p>
                    <p onClick={() => navigate("/contact-us")}>ContactUs</p>
                </div>

                <div
                    class="button-container"
                >
                    <button>Enroll now</button>
                </div>
            </div>
        </>
    )
}

export default NavBar