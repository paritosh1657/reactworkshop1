import React, {Component} from "react";

class Counter extends Component{
  constructor(){
    super();
    // this.intervalID;
    this.state={
      countValue: 0,
    };
  }

  // increamentCounter(){
  //   console.log("IncreamentCounter")
  //   this.setState({
  //     countValue: this.state.countValue +1
  //   })
  // };
  
  // decreamentCounter(){
  //   console.log("DecreamentCounter hitting");
  //   if(this.state.countValue > 0){
  //     this.setState({
  //       countValue: this.state.countValue -1
  //     })
  //   }
  // };

  componentDidMount(){
  
    this.intervalID= setInterval(()=>{
      console.log("Hitting")
      this.setState({
        countValue: this.state.countValue +1
      });

    }, 1000)
  }

  componentWillUnmount(){
    // if(this.state.countValue ===14){
    //   clearInterval(this.intervalID)
    // }
    clearInterval(this.intervalID)
  }

  render(){
    return (
      <>
      <div>Counter {this.state.countValue}</div>
      <button onClick={this.componentWillUnmount.bind(this)}>stop timer</button>
      {/* <button onClick={this.decreamentCounter.bind(this)}>-</button> */}
      </>
    )
  }
}

export default Counter