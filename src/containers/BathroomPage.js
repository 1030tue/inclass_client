import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import withAuth from '../hocs/withAuth'


class BathroomPage extends React.Component {


  

  render(){
    console.log("bath props",this.props.bathroomStudents);
    return(
      <React.Fragment>
        Put students here
      </React.Fragment>
      )
  }
}

const mapStateToProps = state => {
  return {
    bathroomStudents: state.bathroomReducer.students
  };
};
export default withAuth(connect(mapStateToProps)(BathroomPage));

// export default BathroomPage;
