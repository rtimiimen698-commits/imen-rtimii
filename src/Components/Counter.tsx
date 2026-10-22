import React, { Component } from 'react'; 

interface CounterState{
    count : number
}
interface propsCounter{
    name : string
}
class Counter extends Component<propsCounter, CounterState> { 
    state : CounterState = {
    count: 0
    };

    increment = () => { this.setState({ count: this.state.count + 1 })} 

    render() { 
        return( 
            <div> 
                <p>Count: {this.state.count}</p> 
                <button onClick={this.increment}>Increment</button> 
                <h4>{this.props.name}</h4>
            </div> 
        );
    }
 } 
export default Counter;