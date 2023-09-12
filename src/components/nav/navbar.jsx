import React from "react";
import { Link } from "react-router-dom";

function MyNavbar({ title, links }) {
    return (
        <nav>
            <h1>{title}</h1>
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <Link to={link.url}>{link.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default MyNavbar;