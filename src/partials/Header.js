import React from "react";

function Header() {
    return (
        <header>
            <nav>
                <a href="/"><h1>home</h1></a>
                <ul>
                    <li><a href="/todolist">To-Do List</a></li>
                    <li><a href="/coin">Coin Tracker</a></li>
                    <li><a href="/movies">Movie Top 20</a></li>
                </ul>
            </nav>
        </header>

    )
}

export default Header