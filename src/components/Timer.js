import React from "react";

class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      elapsedTime: null,
      second: null,
      running : true
    };
    this.countUp = this.countUp.bind(this);
    this.startCounting = this.startCounting.bind(this);

    this.countSec = this.countSec.bind(this);
    this.startSec=this.startSec.bind(this);

  }

  //Pause
    handleClick=()=>{
        console.log("hi");
        this.stopSec()
  }


//Minutes
  startCounting() {
    this.setState({minuteCounter: setInterval(this.countUp, 1000)})
  }
  countUp() {
    if(this.state.running){
      this.setState(({ elapsedTime }) => ({ elapsedTime: elapsedTime + 1 }));
    }
  }


//Seconds
  countSec() {
    this.setState(({ second }) => ({ second: second + 1 }));
  }
  startSec() {
    this.setState({ secondCounter: setInterval(this.countSec, 1000) });
  }

  // stopSec(){
  //   console.log("hi");
  //   this.setState({
  //     running: false
  //   });
  // }



  componentDidMount(){
    this.startCounting();
    this.startSec()
  }

  componentWillUnmount() {
    clearInterval(this.state.minuteCounter)
    clearInterval(this.state.secondCounter)
  }




  minutes=()=>{
      return `${Math.floor(this.state.elapsedTime/60)}`
  }

  seconds=()=>{
    if(!this.state.second){
      return "0"
    }else if(this.state.second<60){
      return this.state.second
    }else{
      this.setState({
        second: 0
      })
    }
  }

  render() {
    return (
    <React.Fragment>
        <span className="timer">
           {this.minutes()}:{this.seconds()}
           </span>
           {/*<button style={{backgroundColor:'transparent',borderColor: 'transparent'}} onClick={this.stopSec}>⏸</button>*/}
    </React.Fragment>
    );
  }
}

export default Timer
