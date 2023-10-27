import React from "react";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {
    state = {
        firstname: "",
        lastname: "",
        arrJobs:[
            {id:'a123', title: 'Developers', salary:'500'},
            {id:'a124', title: 'Testers', salary:'400'},
            {id:'a125', title: 'Project Managers', salary:'1500'},
            
        ]
    }

    handleChangeFirstName =(event) => {
        this.setState({ firstname: event.target.value });
    }

    handleChangeLastName =(event) => {
        this.setState({ lastName: event.target.value });
    }

    handleSubmit = () => {
        alert('Click me')
    }

    handleSubmit_2 = (event) => {
        event.preventDefault()
        alert('Click me')
    }

    render() {
        console.log('>>> call render1: ' ,  this.state)
        return (
            // <React.Fragment>
            <>
                <ChildComponent name = {this.state.firstname} age = {18} arrJobs={this.state.arrJobs}/> 
                {/* <ChildComponent name = {'abc'} age = {20} /> 
                <ChildComponent name = {'child three'} age = {23}/>         */}
            </>
            // </React.Fragment>
        )

    }
}

export default MyComponent;