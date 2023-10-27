import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
    state = {
        arrJobs:[
            {id:'a123', title: 'Developers', salary:'500'},
            {id:'a124', title: 'Testers', salary:'400'},
            {id:'a125', title: 'Project Managers', salary:'1500'},
            
        ]
    }

    addNewJob = (job) =>{
        this.setState({
            arrJobs: [...this.state.arrJobs,job]
        })
        console.log('check job from parent: ', job); 
    }

    render() {
        console.log('>>> call render1: ' ,  this.state)
        return (
            // <React.Fragment>
            <>
                <AddComponent addNewJob={this.addNewJob} />
                {/* addNewJob = {this.state.arrJobs.addNewJob} */}

                <ChildComponent arrJobs={this.state.arrJobs}/> 
                {/* <ChildComponent name = {'abc'} age = {20} /> 
                <ChildComponent name = {'child three'} age = {23}/>         */}
            </>
            // </React.Fragment>
        )

    }
}

export default MyComponent;