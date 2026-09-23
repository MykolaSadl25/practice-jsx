import { Component } from "react";

class InputInfo extends Component{
    state={
        info:"",
    }

    handleInput = (evt) =>{
        this.setState({
            info:evt.target.value,
        })
        this.props.onFilter(this.state.info)
    }

    render(){
        
        return(
            <>
                <input type="text" placeholder="Enter Name" value={this.state.info} onChange={this.handleInput}/>
            </>
        )
    }
}

export default InputInfo