import React, { Component } from "react";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

import { connect } from "react-redux";

class Counter extends Component {
  render() {
    return (
      <div>
        {/* after connecting our state to rdeux use props instead of state */}
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 5" clicked={this.props.onAddToCounter} />
        <CounterControl
          label="Subtract 10"
          clicked={this.props.onSubstractFromCounter}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ctr: state.counter };
};

// don t forget to add dispatch functions to reducer
const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: "INCREMENT" }),
    onDecrementCounter: () => dispatch({ type: "DECREMENT" }),
    onAddToCounter: () => dispatch({ type: "ADD", payload: 5 }),
    onSubstractFromCounter: () => dispatch({ type: "SUBSTRACT", payload: 10 }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
