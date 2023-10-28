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
        ]
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
    render() {
        let {listTodos} = this.state;
        // let listTodos = this.state.listTodos;
        
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
                                    <span>{index+1} - {item.title}</span>
                                </div>
                                <div className="todo-actions">
                                    <button className="edit" >Edit</button>
                                    <button className="delete">Delete</button>
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
