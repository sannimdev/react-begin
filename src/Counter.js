import React, { Component } from "react";

class Counter extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     //단, this.state는 객체의 형태로서 존재해야 함
  //     counter: 0,
  //   };

  //   //바인드 작업
  //   // this.handleIncrease = this.handleIncrease.bind(this);
  //   // this.handleDecrease = this.handleDecrease.bind(this);
  // }

  state = {
    //class properties in babel plugin
    counter: 0,
    fixed: 1, // this.setState에는 업데이트하고자 하는 값만 넣어주면 나머지 값은 건드리지 않는다.
    updateMe: {
      toggleMe: false,
      dontChangeMe: 1,
    },
  };

  handleIncrease = () => {
    //class properties in babel plugin
    // console.log(this);
    // console.log("increarse");
    // this.setState({ counter: this.state.counter + 1 });
    // 즉시 한 메서드에서 여러 개의 setState를 이용하여 값을 즉시 변화시켜야 한다면 아래와 같이 선언해야 한다.
    this.setState((state) => ({
      counter: state.counter + 1,
    }));
    this.setState((state) => ({
      counter: state.counter + 1,
    }));
    this.setState((state) => ({
      counter: state.counter + 1,
    }));
  };

  handleDecrease = () => {
    //class properties in babel plugin
    // console.log("decrease");
    this.setState({ counter: this.state.counter - 1 }); //=> 상태가 바로 업데이트되는 것이 아니라 비동기적으로 업데이트가 일어난다.
    this.setState({ counter: this.state.counter - 1 }); //=> 상태가 바로 업데이트되는 것이 아니라 비동기적으로 업데이트가 일어난다.
    this.setState({ counter: this.state.counter - 1 }); //=> 상태가 바로 업데이트되는 것이 아니라 비동기적으로 업데이트가 일어난다.
    this.setState({ counter: this.state.counter - 1 }); //=> 상태가 바로 업데이트되는 것이 아니라 비동기적으로 업데이트가 일어난다.
  };

  handleToggle = () => {
    this.setState({
      updateMe: {
        //그러나 state 안에 있는 하위 객체의 경우에는 불변의 법칙을 지켜서 명시해야 한다.
        ...this.state.updateMe,
        toggleMe: !this.state.updateMe.toggleMe,
        // dontChangMe: this.state.updateMe.dontChangeMe
      },
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
        <p>고정된 값: {this.state.fixed}</p>
      </div>
    );
  }
}

// function reducer(state, action) {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//     default:
//       // return state;
//       throw new Error("Unhandled action");
//   }
// }

// function Counter() {
//   const [number, dispatch] = useReducer(reducer, 0); //useReducer(리듀서, 초깃값)
//   // const [number, setNumber] = useState(0);
//   // const numberState = useState(0);
//   //   const number = numberState[0];
//   //   const setNumber = numberState[1];
//   const onIncrease = () => {
//     dispatch({
//       type: "INCREMENT",
//     });
//     console.log("+1");
//   };
//   const onDecrease = () => {
//     dispatch({
//       type: "DECREMENT",
//     });
//     console.log("-1");
//   };
//   return (
//     <div>
//       <h1>{number}</h1>
//       <button onClick={onIncrease}>+1</button>
//       <button onClick={onDecrease}>-1</button>
//     </div>
//   );
// }

export default Counter;
