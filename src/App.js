import React, { useState } from 'react';
import './App.css';

function App() {

    const [toDo, setToDo] = useState('');
    const [toDos, setToDos] = useState([]);

    return (
        <div className="app">
            <div className="mainHeading">
                <h1>ToDo List</h1>
            </div>
            <div className="subHeading">
                <br />
                <h2>Whoop, it's Sunday ☕ </h2>
            </div>
            <div className="input">
                <input value={toDo} onChange={(e) => setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
                <i className="fas fa-plus" onClick={() => setToDos([...toDos, { id: Date.now(), text: toDo, status: false }])}></i>
            </div>
            {
                toDos.map((obj, index) => {
                    return (
                        <div className="todos">
                            <div className="todo">
                                <div className="left">
                                    <input onChange={(e) => {
                                        // console.log(e.target.value)
                                        // console.log(obj)
                                        setToDos(toDos.filter(obj2 => {
                                            if (obj.id === obj2.id) {
                                                obj2.status = e.target.checked
                                            }
                                            return obj2
                                        }))
                                    }} value={obj.status} type="checkbox" name="" id={obj.id} />
                                    <p>{obj.text}</p>
                                </div>
                                <div className="right">
                                    <i className="fas fa-times" onClick={(e)=>{
                                        // console.log(obj.text)
                                        setToDos(toDos.filter(obj2=>{
                                            if (obj.id !== obj2.id) {
                                                return obj2
                                            }
                                            return null
                                        }))
                                    }}></i>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <br />
            <br />
            {
                toDos.map((obj) => {
                    if (obj.status) {
                        return (
                            <h3 style={{ color: '#fff' }}>{obj.text}</h3>
                        )
                    }
                    return null
                })
            }
        </div>
    );
}

export default App;