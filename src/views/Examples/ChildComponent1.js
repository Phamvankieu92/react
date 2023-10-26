import React from "react";

class ChildComponent extends React.Component {
    
    render() {
        console.log('>>>Check data input: ', this.props)
        // let name = this.props.name;
        // let age = this.props.age;

        // let {name, age, arrJobs} = this.props;
        
        let arrJobs = this.props.arrJobs;
        
        return (
            // <React.Fragment>
            
            <>
                <div><button>Show</button></div>
                <div className="job-lists">
                    {
                        arrJobs.map((item,index) => {
                            return (
                                <div key={item.id}>
                                    ID: {item.id} - Title: {item.title} - Salary: {item.salary}
                                </div>
                            )
                        })
                    }
                </div>
                <div><button>Hide</button></div>

            </>
            // </React.Fragment>
        )
    }
}
 
export default ChildComponent