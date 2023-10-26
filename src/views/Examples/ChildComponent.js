import React from "react";

class ChildComponent extends React.Component {
    
    render() {
        console.log('>>>Check data input: ', this.props)
        // let name = this.props.name;
        // let age = this.props.age;

        let {name, age} = this.props
        return (
            // <React.Fragment>
            
            <>
                <div>
                    child component name: {name} - {age} - KDE
                </div>
                
            </>
            // </React.Fragment>
        )
    }
}

export default ChildComponent