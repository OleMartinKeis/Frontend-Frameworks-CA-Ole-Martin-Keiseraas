import React from "react";

function MyNavbar({ title, links }) {
    return (
        <nav>
            <h1>{title}</h1>
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.url}>{link.label}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default MyNavbar;