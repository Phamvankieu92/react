import React from "react";

class AddComponent extends React.Component {
    state = {
        title:'',
        salary:'',
    }
    handleChangetitle =(event) => {
        this.setState({ title: event.target.value });
    }

    handleChangeSalary =(event) => {
        this.setState({ salary: event.target.value });
    }
    handleSubmit = (event) => {
        event.preventDefault();

        if (!this.state.salary || !this.state.title) {
            alert('Missing required parameters');
            return;
        }
        console.log('>>> Check data input: ', this.state)
        this.props.addNewJob({
            id: Math.floor(Math.random()*1000),
            title: this.state.title,
            salary: this.state.salary
        })

        this.setState({
            title: '',
            salary: ''
        }
        )
    }
    render() {
        return (
            <form>
                    <label htmlFor='fnname'>Title Job</label><br />
                    <input 
                        type="text" 
                        value={this.state.title}  
                        onChange={(event) => this.handleChangetitle(event)} 
                    />
                    <br />

                    <label htmlFor='lnname'>Salary</label><br />
                    <input type="text" value={this.state.salary}  
                        onChange={(event) => this.handleChangeSalary(event)}
                    />

                    <br />
                    <input 
                        type="button" 
                        value="Submit"
                        onClick={(event)=>this.handleSubmit(event)}
                    />
                </form>
            )
    }
}

export default AddComponent;
