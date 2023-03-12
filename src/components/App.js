import React from "react";

class App extends React.Component {
  state = {
    second: 0,
    minut: 0,
    hours: 0,
    btnDizabled: false,
    btnintervaldiz:true,
    clearInterv:"",
    intervalStorege: []
  };
  stopClick = () => {
    clearInterval(this.state.clearInterv);
    this.setState({
      btnDizabled:false,
      btnintervaldiz:true
    })
      };

  startClick = () => {
    this.setState({
      btnDizabled: true,
      btnintervaldiz:false
    });
   const timer= setInterval(() => {
      const { second, minut, hours } = this.state;
      if (minut === 59 && second === 59) {
        this.setState({
          second: 0,
          minut: 0,
          hours: hours + 1,
        });
      } else {
        if (second === 59) {
          this.setState({
            second: 0,
            minut: minut + 1,
          });
        } else {
          this.setState({
            second: second + 1,
          });
        }
      }
    }, 16.666667);
  this.setState({
    clearInterv:timer
  })
  };

  intervalClick=()=>{
    const {hours, minut, second, intervalStorege}=this.state;
    intervalStorege.push(`${hours}  : ${minut}  : ${second} `)
    this.setState({
      intervalStorege:intervalStorege
    })
  }
  clearAll=()=>{
    this.stopClick()
  this.setState({
    intervalStorege: [],
    second: 0,
    minut: 0,
    hours: 0,
  })
  }


  render() {
    const { second, minut, hours, btnDizabled, intervalStorege } = this.state;
    return (
      <div>
        <div className="container-watch">
          <h2 className="title">
     <span>Online</span> Stopwatch
          </h2>
          <div className="timer-col">
            <p className="timer-hours">{hours}</p>
            <p className="timer-label">Minut</p>
          </div>

          <div className="timer-col">
            <p className="timer-minuts">{minut}</p>
            <p className="timer-label">Secund</p>
          </div>

          <div className="timer-col">
            <p className="timer-sekund">{second}</p>
            <p className="timer-label">Millisecund</p>
          </div>
        </div>
        <div className="container-watch res-container">
          <div className="timer-btn">
            <button
              onClick={this.startClick}
              className="btn btn-success"
              disabled={btnDizabled}
            >
              Start
            </button>
          </div>
          <div className="timer-btn">
            <button onClick={this.stopClick} className="btn btn-danger">
              Stop
            </button>
          </div>
          <div className="timer-btn">
            <button className="btn btn-secondary" onClick={this.intervalClick} disabled={this.state.btnintervaldiz}>Interval</button>
          </div>
          <div className="timer-btn">
            <button onClick={this.clearAll} className="btn btn-warning">Clear</button>
          </div>
        </div>
        <div className="container-watch interval">
{intervalStorege.map((item,index)=><p>{index+1} →  {item}</p>)}
        </div>
      </div>
    );
  }
}
export default App;
