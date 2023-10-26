import React from "react";

class ChildComponent extends React.Component {
    
    render() {
        console.log('>>> call render: ' ,  this.state)
        return (
            // <React.Fragment>
            <>
                <label htmlFor='fnname'>child component: {this.props.name}</label><br />
                
            </>
            // </React.Fragment>
        )
    }
}

export default ChildComponent