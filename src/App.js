import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./routes/Home"
import Detail from "./routes/Detail";

function App() {
    return (
        <div>
            <header>
                <nav>
                    <a href="/"><h1>home</h1></a>
                    <ul>
                        <li><a href="/">To-Do List</a></li>
                        <li><a href="/">Coin Tracker</a></li>
                        <li><a href="/">Movie Top 20</a></li>
                    </ul>
                </nav>
            </header>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies/:id" element={<Detail />} />
            </Routes>
        </Router>
        </div>
    )
}


export default App;
