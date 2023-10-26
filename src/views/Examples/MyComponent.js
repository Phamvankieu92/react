import React from "react";
import ChildComponent from "./ChildComponent";
class MyComponent extends React.Component {
    state = {
        firstname: "",
        lastname: ""
    }

    handleChangeFirstName =(event) => {
        this.setState({ firstName: event.target.value });
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
        console.log('>>> call render: ' ,  this.state)
        return (
            // <React.Fragment>
            <>
                <form>
                    <label htmlFor='fnname'>First name</label><br />
                    <input 
                        type="text" 
                        value={this.state.firstName} 
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

                <ChildComponent name = {'child one'}/> 
                <ChildComponent name = {'child two'}/> 
                <ChildComponent name = {'child three'}/>        
            </>
            // </React.Fragment>
        )

    }
}

export default MyComponent;