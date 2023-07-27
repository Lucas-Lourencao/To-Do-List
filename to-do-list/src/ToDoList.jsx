import React, {useState} from "react";
import './ToDoList.css';

function ToDoList(){
const[lista, setLista] = useState([]);
const[novoItem, setNovoItem] = useState("");

    return (
    <div>
        <h1>Lista de Tarefas</h1>
        <form action="">
            <input type="text" name="" id="" placeholder="Adicione uma tarefa"/>
            <button className="add-tarefa" type="submit">Add</button>
        </form>
    <div className="listaTarefas">
        <div className="item">
            <span>Tarefa de exemplo</span>
            <button className="del">Deletar</button>
        </div>
        <div className="itemCompleto">
            <span>Tarefa de exemplo</span>
            <button className="del">Deletar</button>
        </div>
        <button className="delAll">Deletar Todas</button>

    </div>
    </div>
    
    
    )
}

export default ToDoList