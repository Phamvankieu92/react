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
        // this.setState({
        //     arrJobs: [...this.state.arrJobs,job]
        // })
        // console.log('check job from parent: ', job); 
        let currentJob = this.state.arrJobs
        currentJob.push(job)
        this.setState({ arrJobs:currentJob})
    }

    deleteAJob = (job) =>{
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter(item => item.id !== job.id)
        this.setState({ arrJobs: currentJobs})
    }
    
    componentDidUpdate(prevProps,prevState) {
        console.log('>>> run did update:','pre state: ' , prevState, ' current state: ' , this.state)
    }
    componentDidMount() {
        console.log('>>>Run component did mount')   
    }
    render() {
        console.log('>>> call render: ' ,  this.state)
        return (
            // <React.Fragment>
            <>
                <AddComponent addNewJob={this.addNewJob} />
                {/* addNewJob = {this.state.arrJobs.addNewJob} */}

                <ChildComponent 
                    arrJobs={this.state.arrJobs}
                    deleteAJob={this.deleteAJob}
                /> 
                {/* <ChildComponent name = {'abc'} age = {20} /> 
                <ChildComponent name = {'child three'} age = {23}/>         */}
            </>
            // </React.Fragment>
        )

    }
}

export default MyComponent;