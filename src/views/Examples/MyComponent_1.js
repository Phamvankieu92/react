import React from "react";

class MyComponent extends React.Component {
    state = {
        name: 'Kiểu Phạm',
        company: 'KDE'
    }

    handleOnChangeName = (event) => {
        // this.state.name = event.target.value;  // không nên dùng kiểu này
        this.setState({
            name: event.target.value
        });
    }

    handleClickButton = () => {
        console.log('hit the button');
        alert('Click me');
    }
    render() {
        let name = 'Kiểu'
        return (
            // <React.Fragment>
            <>
                <div className="name"> 
                    {console.log('My name is ' + name)}
                    Hello my Component. My name is {name}
                </div>
                <div className="name2"> 
                    {console.log('My name is ' + name)}
                    Bạn có muốn tôi giúp gì không?
                </div>

                <div className="stagename">
                    <input type="text" value={this.state.name} onChange={(event) => this.handleOnChangeName(event)} />
                    Tôi tên là {this.state.name}
                </div>
                <div className="company">
                    Tôi làm việc tại {this.state['company']}
                </div>


                <div className="button">
                    <button type="button" onClick={()=> this.handleClickButton()}>Click me</button>
                </div>
            </>
                
            // </React.Fragment>
            
        )
    }
}

export default MyComponent;