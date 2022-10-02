import {useState} from "react";
import ToDoList from "../ToDoList";
import CoinTracker from "../CoinTracker";
import Movie from "../Movie";
import PropTypes from "prop-types";

function Home() {
    const [menu, setMenu] = useState("0")
    const onMenuChange = (event) => {
        setMenu(() => event.target.value)
    }
    return (
        <div>
            <div>
                <select value={menu} onChange={onMenuChange}>
                    <option value={"0"}> select menu </option>
                    <option value={"1"}> To-Do List </option>
                    <option value={"2"}> Coin Tracker </option>
                    <option value={"3"}> Movie App </option>
                </select>
            </div>
            <SwitchMenu menu={menu}  />
        </div>
    )
}

const SwitchMenu = ({menu}) => {
    switch (menu) {
        case "0":
            return <h3>메뉴를 선택하세요</h3>
        case "1":
            return <ToDoList />
        case "2":
            return <CoinTracker />
        case "3":
            return <Movie />
        default :
            return null
    }
}

SwitchMenu.propTypes = {
    menu: PropTypes.string.isRequired
}

export default Home