import React from "react";

class ChildComponent extends React.Component {
    state = {
        showJob: false,
    }
    handleShowHide = ()=>{
        this.setState({showJob: !this.state.showJob});
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
                <div className="job-lists">
                    {
                        arrJobs.map((item,index) => {
                            return (
                                <>
                                    {/* {showJob === false && <div><button onClick={()=>this.handleShowHide()} >Show</button></div>}
                                    {showJob &&
                                    <>
                                        <div key={item.id}>
                                            ID: {item.id} - Title: {item.title} - Salary: {item.salary}
                                        </div>
                                        <div><button onClick={()=>this.handleShowHide()}>Hide</button></div>
                                    </>} */}

                                    {showJob === false ?
                                        <div><button onClick={()=>this.handleShowHide()} >Show</button></div>
                                    :
                                        <>
                                            <div key={item.id}>
                                                ID: {item.id} - Title: {item.title} - Salary: {item.salary}
                                            </div>
                                            <div><button onClick={()=>this.handleShowHide()}>Hide</button></div>
                                        </>
                                    }
                                    
                                </>
                                 
                            )
                        })
                    }
                </div>

            </>
            // </React.Fragment>
        )
    }
}
 
export default ChildComponent