import React from "react";
import ChildComponent from "./ChildComponent";
class MyComponent extends React.Component {
    state = {
        firstname: "",
        lastname: "",
        arrJobs:[
            {id:'a123', title: 'Developers', salary:'500 $'},
            {id:'a124', title: 'Testers', salary:'400 $'},
            {id:'a125', title: 'Project Managers', salary:'1500 $'},
            
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
                <form>
                    <label htmlFor='fnname'>First name</label><br />
                    <input 
                        type="text" 
                        value={this.state.firstname} 
                        onChange={(event) => this.handleChangeFirstName(event)} 
                    />
                    <br />

                    <label htmlFor='lnname'>Last name</label><br />
                    <input type="text" value={this.state.lastName} 
                        onChange={(event) => this.handleChangeLastName(event)}
                    />
                    <br />
                    <input 
                        type="button" 
                        value="Submit"
                        onClick={()=>this.handleSubmit()}
                    />

                    <input 
                        type="submit" 
                        value="Submit 2" 
                        onClick={(event)=>this.handleSubmit_2(event)}
                    />
                </form>

                <ChildComponent name = {this.state.firstname} age = {18} arrJobs={this.state.arrJobs}/> 
                {/* <ChildComponent name = {'abc'} age = {20} /> 
                <ChildComponent name = {'child three'} age = {23}/>         */}
            </>
            // </React.Fragment>
        )

    }
}

export default MyComponent;