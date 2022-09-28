import {useState} from "react";

function ToDoList() {
    const [toDo, setToDo] = useState("")
    const [toDos, setToDos] = useState([])
    const onChange = (event) => setToDo(() => event.target.value)
    const onSubmit = (event) => {
        event.preventDefault();
        if (toDo === "") return
        setToDos((prevState => {
            return [toDo, ...toDos]
        }))
        setToDo("")
    }
    return (
        <div>
            <h1>My To-Do List ({toDos.length})</h1>

            <form onSubmit={onSubmit}>
                <input
                    type="text" value={toDo} placeholder="type what to do"
                    onChange={onChange}
                />
                <button>add</button>
            </form>
            <hr/>
            <ul>
                {toDos.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList