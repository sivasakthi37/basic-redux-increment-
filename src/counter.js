import React, { Component } from 'react';
import { increment } from "./store/action"
import { connect } from 'react-redux';

class Counter extends Component {

    // state = {
    //     counter: 0
    // }


    increment = () => {
        this.props.increment([])
        // this.setState({ counter: this.state.counter + 1 })
    }
    decrement = () => {
        // this.setState({ counter: this.state.counter - 1 })
    }
    reset = () => {
        // this.setState({ counter: 0 })
    }

    render() {
        return (
            <div className="App">
                <div>{this.props.counter}</div>
                <div>
                    <button onClick={this.increment}>INCREMENT BY 1</button>
                </div>
                <div>
                    <button onClick={this.decrement}>DECREMENT BY 1</button>
                </div>
                <button onClick={this.reset}>RESET</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log("state", state);
    return {
        counter: state.count
    };
};

export default connect(mapStateToProps, {
    increment
})(Counter);
