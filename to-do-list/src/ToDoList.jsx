import { useState, useEffect } from "react";
import './ToDoList.css';
import Icone from './assets/icon.webp'

function ToDoList(){
    // Pegando uma lista existente armazenada no Local Storage;
    const listaLocalStorage = localStorage.getItem('ListaDeTarefas');

    // Lista de itens que será alimentada dinâmicamente;
    const[lista, setLista] = useState(listaLocalStorage ? JSON.parse(listaLocalStorage) : []);

    // Item que será adicionado a lista;
    const[novoItem, setNovoItem] = useState("");
    
    // UseEffect
    useEffect(() => {
        localStorage.setItem('ListaDeTarefas', JSON.stringify(lista));
    }, [lista])

    // Função para adicionar itens à lista de tarefa
    function adicionaItem(form){
        form.preventDefault();
        if(!novoItem){
            return;
        }
        // setLista adiciona novoItem ao que já estiver na lista, verificando se a tarfa foi realizada;
        // Por padrão, ao adicionar o item, é considerado que a tarefa não foi realizada;
        setLista([...lista, {text: novoItem, isCompleted: false}]);

        // Limpando o campo input e retornando o foco para ele;
        setNovoItem("");
        document.getElementById('inputEntrada').focus();
    }

    // Função para marcar com um risco as tarefas executadas        
    function tarefaFeita(index){
        //Cria uma lista auxiliar para manipulação
        const listaAuxiliar = [...lista];

        // Verifica se a tarefa está cumprida alterando o parâmetro inCompleted
        listaAuxiliar[index].isCompleted = !listaAuxiliar[index].isCompleted;

        // atualiza a lista principal
        setLista(listaAuxiliar);
    }

    // Função para deletar uma tarefa específica
    function deletaItem(index){
        const listaAuxiliar = [...lista];
        listaAuxiliar.splice(index, 1);
        setLista(listaAuxiliar);
    }

    // Função apra deletar todas as tarefas;
    function deletaTudo(){
        setLista([]);
    }

    return (
    <div>
        <h1>Lista de Tarefas</h1>
        <form onSubmit={adicionaItem}>
            <input 
            type="text" 
            value={novoItem} 
            // Função para inserir o "novoItem" conforme o value do campo input;
            onChange={(e)=>{setNovoItem(e.target.value)}}
            name="" 
            id="inputEntrada" 
            placeholder="Adicione uma tarefa"/>
            <button className="add-tarefa" type="submit">Add</button>
        </form>
        {/* Perceba na div abaixo como é a sintaxe para add um estilo css deireto no elemento react: {{propriedadeCssEm CamelCase:'caracteristica entre aspas como uma string'}} */}
    <div className="listaTarefas">
        {
            // Show list
            // Se a lista é vazia
            lista.length < 1 
            ? 
            // mostra a imagem
            <img className="iconeCentral" src={Icone} /> 
            : 
            //senão, mostrar as tarefas percorrendo o array lista
            lista.map((item, index) => (
            <div
            key={index}
            className={item.isCompleted ? "itemCompleto" : "item"}
            >
                <span onClick={()=>tarefaFeita(index)}>{item.text}</span>
                <button onClick={()=>deletaItem(index)} className="del">Deletar</button>
            </div>
            ))

        }
        {
            lista.length > 0 &&
            <button onClick={() => { deletaTudo() }} className="delAll">Deletar Todas</button>
        }
        
    </div>
    </div>
    
    
    )
}

export default ToDoList