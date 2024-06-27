import React from "react"

const NavBar = () => {

    return (
        <>
            <div
                class="navbar"
            >
                <div
                    class="logo-container"
                ><h2>LOGO</h2></div>

                <div
                    class="links-container"
                >
                    <a href="/">Home</a>
                    <a href="/about-us">About us</a>
                    <a href="/faculties">Faculties</a>
                    <a href="/scholarships">Scholarships</a>
                    <a href="/news">News</a>
                    <a href="/contact-us">Contact us</a>
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