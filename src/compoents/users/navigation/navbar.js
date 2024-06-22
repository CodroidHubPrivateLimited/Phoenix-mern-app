

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
                    <a href="/home">Home</a>
                    <a href="/aboutus">About us</a>
                    <a href="/faculties">Faculties</a>
                    <a href="/sceloreship">Scholarships</a>
                    <a>News</a>
                    <a>Contact us</a>
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