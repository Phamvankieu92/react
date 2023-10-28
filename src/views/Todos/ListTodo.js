import React from "react";
import "./ListTodo.scss"
import AddTodo from "./AddTodo.js";
import { ToastContainer, toast } from 'react-toastify';


class ListTodo extends React.Component {
    state = {
        listTodos:[
            {id: 'todo1', title: 'Doing homework'},
            {id: 'todo2', title: 'Making videos'},
            {id: 'todo3', title: 'Fixing bugs'}
        ],
        editTodo:{

        }
    }

    addNewTodo=(todo) => {
        // let currentListTodo = this.state.listTodos;
        // currentListTodo.push(todo);
        // this.setState({listTodos: currentListTodo});

        this.setState({
            listTodos: [...this.state.listTodos,todo]
        })

        toast.success('Todo successfully added');
    }

    handleDeleteTodo = (todo) => {
        console.log('>>> check delete todo: ',todo)
        let currentTodos = this.state.listTodos;
        currentTodos=currentTodos.filter(item => item.id !==todo.id);
        this.setState({listTodos: currentTodos});
        toast.success('Todo deleted successfully');
    }
    handleEditTodo = (todo) => {
        let {editTodo,listTodos} = this.state;
        let isEmptyObj = Object.keys(editTodo).length===0;
        if (isEmptyObj===false && editTodo.id===todo.id) {
            // save
            let listTodosCopy = [...listTodos];
            let objIndex = listTodosCopy.findIndex((item=>item.id===todo.id));
            listTodosCopy[objIndex].title = editTodo.title;
            this.setState({
                listTodos: listTodosCopy,
                editTodo: {}
            });
            toast.success('Edit Todo successfully')
            return;
        } else {
            // edit
            this.setState({editTodo: todo});
        }
        
    }
    handleOnChangeEditTodo = (event) => {
        let editTodoCopy = {...this.state.editTodo};
        editTodoCopy.title = event.target.value;
        this.setState({editTodo: editTodoCopy});
    }
    render() {
        let {listTodos,editTodo} = this.state;
        // let listTodos = this.state.listTodos;
        let isEmptyObj = Object.keys(editTodo).length===0;
        console.log('>>> Check empty object', isEmptyObj);
        return (
            <div className="list-todo-container">
                <AddTodo
                    // truyền phương thức sang child component;
                    addNewTodo={this.addNewTodo}
                />
                
                <div className="list_todo_content">
                    {
                        listTodos && listTodos.length>0 && listTodos.map((item, index) => {
                          return (
                            <div className="todo-child" key={item.id}>
                                <div className="todo-info">
                                    {(isEmptyObj === false && editTodo.id===item.id) ?
                                        <span>
                                            {index+1} - <input 
                                            value={editTodo.title}
                                            onChange={(event)=> this.handleOnChangeEditTodo(event)}
                                            ></input>
                                        </span>
                                        
                                    :
                                        <span>{index+1} - {item.title}</span>
                                        
                                    }
                                    
                                    
                                </div>
                                <div className="todo-actions">
                                    <button className="edit" onClick={()=>this.handleEditTodo(item)}>
                                        {isEmptyObj===false && editTodo.id===item.id ? 'Save' : 'Edit'}
                                    </button>
                                    <button className="delete" onClick={()=>this.handleDeleteTodo(item)} >Delete</button>
                                </div>   
                            </div>
                          )
                        })
                    }

                </div>
            </div>
        )
        
    }
}

export default ListTodo;
