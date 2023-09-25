import React from "react";
import MyNavbar from "../nav/Navbar";
import homepageLinks from "../nav/HomepageLinks";

function Layout({ children }) {
    return (
        <div>
            <header>
                <MyNavbar 
                title="Homepage"
                links={homepageLinks}/>
            </header>
            <main>
                {children}
            </main>
            <footer>Placeholder</footer>
        </div>
    )
}

export default Layout;