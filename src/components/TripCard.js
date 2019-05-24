import React from "react";
import Timer from './Timer'

// import { connect } from "react-redux";
// import { btnDisabled } from '../actions/bathroom';


class TripCard extends React.Component {



  renderStudent=(student)=>{
      let destination = this.props.student.trips[this.props.student.trips.length-1].destination
      let btnStyle={
        backgroundColor: 'transparent',
        borderColor: 'transparent'
      }

      let tripCardstyle;
          switch (destination) {
            case "Emergency":
              tripCardstyle = {backgroundColor: 'rgb(232, 132, 119)'}
              break;
            default:
              tripCardstyle = {backgroundColor: 'rgb(220, 234,162)'}
          }

      return (
        <div className="TripCard" style={tripCardstyle}>
            <span className="tripStudent">
              {destination==="Emergency"? "⛔️":destination}{student.firstname}{' '}{student.lastname.charAt(0)}.{' '}
              has been out for <Timer/>
            </span>
            {' '}
            <span>
              {destination==="Emergency"? <button>🚩ASK HELP</button>:null}
            </span>
            <button data-id={this.props.student.id} onClick={(e) => {
              this.props.cancelTimer(parseInt(e.target.dataset.id))

            } }>Cancel</button>
        </div>
      )
  }




  render(){
    if(!this.props.student.trips) return null 
    return(
      <React.Fragment>
      {this.renderStudent(this.props.student)}
      </React.Fragment>
    )
  }

}

// export default connect(null,{ btnDisabled })(TripCard);
export default TripCard
