import React from "react";

class ChildComponent extends React.Component {
    state = {
        showJob: false,
    }
    handleShowHide = ()=>{
        this.setState({showJob: !this.state.showJob});
    }

    handelOnClickDelete = (job)=>{
        console.log(">>>handleClickDelete", job);
        this.props.deleteAJob(job);
    }

    render() {
        console.log('>>>Check data input: ', this.props)
        // let name = this.props.name;
        // let age = this.props.age;

        // let {name, age, arrJobs} = this.props;
        
        let arrJobs = this.props.arrJobs;
        let showJob = this.state.showJob;;
        let check =showJob === true ? 'showJob=true': 'showJob=false';
        console.log('>>> check condition: ', check)
        return (
            
            // <React.Fragment>
            
            <>
                {showJob === false ?
                    <div><button onClick={()=>this.handleShowHide()} >Show</button></div>
                :
                <>
                    <div className="job-lists">
                        {
                            arrJobs.map((item,index) => {
                                return (
                                    <>
                                        {
                                            <div key={item.id}>
                                                ID: {item.id} - Title: {item.title} - Salary: {item.salary} <></> 
                                                <span onClick={()=>this.handelOnClickDelete(item)}>X</span>
                                            </div>
                                        }
                                        
                                    </>
                                    
                                )
                            })
                        }
                    </div>
                    <div><button onClick={()=>this.handleShowHide()}>Hide</button></div>
                </>
                }
            </>
            // </React.Fragment>
        )
    }
}
 
export default ChildComponent