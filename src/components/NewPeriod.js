import React from "react";
import withAuth from '../hocs/withAuth'
import { connect } from "react-redux";
// import { Link } from 'react-router-dom'
import {withRouter} from 'react-router'


class NewPeriod extends React.Component{
  state={

  }

  capitalize = (s) => {
   if (typeof s !== 'string'){ return ''}
   else{
     let splitStr = s.split(' ');
    for (let i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' '); }
  }


  capitalize = (s) => {
   if (typeof s !== 'string'){ return ''}
   else{return s.charAt(0).toUpperCase() + s.slice(1)}
 }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: this.capitalize(e.target.value)
    })

  }

  handleSubmit=(e)=>{
    e.preventDefault()
    this.addNewPeriod(this.state)
  }

  addNewPeriod = (input) => {
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/periods`,
      {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
         Accept: 'application/json'
      },
      body: JSON.stringify({
        teacher_id: !!this.props.currentTeacher? this.props.currentTeacher.id : null,
        classname: this.capitalize(input.classname),
        duration: input.duration,
        date: input.date,
        period_num: input.period_num
      })
    })
    .then(res=>res.json())
    .then(data => {this.props.history.push('/teacher')
                    window.location.reload();})
  }


  render(){
    // console.log("ADDINGNewPeriod", this.props);
    console.log(this.props)
    return(
      <form onChange={this.handleChange}>
      <h3>Add New Class</h3>

        <div className="form-elem">
        Class name: <input
              className="input"
              type="text"
              name="classname"
              placeholder="Class name"
              required/>
        </div>
        <div className="form-elem">
        Date: <input
                className="input"
                type="date"
                name="date"
                placeholder="date"
                required
              />
            </div>
            <div className="form-elem">
                Class Period:  <input
                          className="input"
                          type="number"
                          name="period_num"
                          placeholder="Class period"
                          required
                          />
            </div>
            <div className="form-elem">
                Duration:  <input
                      className="input"
                      type="number"
                      name="duration"
                      placeholder="Minutes"
                      required
                    />
            </div>
          <br/>
          <input type="submit" onClick={this.handleSubmit}/>
        </form>
    )
  }
}


const mapStateToProps = state => {
  return {
    currentTeacher: state.teacherReducer.teacher
  };
};


export default withAuth(connect(mapStateToProps)(withRouter(NewPeriod)));

// export default NewPeriod;
