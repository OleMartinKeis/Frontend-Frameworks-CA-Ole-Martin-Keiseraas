import React from "react";
import MyNavbar from "../nav/Navbar";
import homepageLinks from "../nav/HomepageLinks";
import styles from "../../scss/footer/Footer.module.scss"

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
            <footer className={styles.footer}>This is not a real store. This is a task created for Noroff by <a href="https://github.com/OleMartinKeis"> Ole Martin Keiseraas</a></footer>
        </div>
    )
}

export default Layout;