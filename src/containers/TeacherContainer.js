import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Period from "../Components/Period"
import { setCurrentClass } from '../actions/bathroom'
import withAuth from '../hocs/withAuth'


class TeacherContainer extends React.Component {
  handleClick=(props)=>{
    this.props.setCurrentClass(props);
    this.props.history.push('/class')
  }

//Set link later
  renderPeriodCards=()=>{
      let periods= [...this.props.currentTeacher.periods].sort((a,b)=>{
        return a.period_num - b.period_num });
        return periods.map(p => <Period period={p} key={p.id}
      handleClick={this.handleClick}/>)
  }

  render(){
    return(
      <React.Fragment>
          <div className="period">{this.renderPeriodCards()}
              <br/> <br/>
            {this.props.currentClass? null:<Link to = "/class/new" > <button className="button" style={{width: "36.5em", margin: "auto", padding:".8em"}}> Create New Class </button> </Link>}
          </div>
      </React.Fragment>
      )
  }
}


const mapStateToProps = state => {
  return {
    currentTeacher: state.teacherReducer.teacher,
    currentClass: state.bathroomReducer.curr_class
  };
};


export default withAuth(connect(mapStateToProps,{ setCurrentClass })(withRouter(TeacherContainer)));
