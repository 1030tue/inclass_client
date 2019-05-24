import React from "react";
import withAuth from '../hocs/withAuth'
import { connect } from "react-redux";



class NewStudentForm extends React.Component{
  state={
  }

  AddNewStudent=(input)=>{
    debugger
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/students`, {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          period_id: this.props.currentClass.id,
          firstname: input.firstname,
          lastname: input.lastname,
          email: input.email,
          age: input.age,
          grade: input.grade,
          gender: input.gender,
          guardians_name: input.guardians_name,
          relationship_to_student: input.relationship_to_student,
          guardians_email: input.guardians_email,
          guardians_phone: input.guardians_phone
        })
      })

  }


  capitalize = (s) => {
   if (typeof s !== 'string') return ''
   return s.charAt(0).toUpperCase() + s.slice(1)
 }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: this.capitalize(e.target.value)
    })

  }

  handleSubmit = () => {
    this.AddNewStudent(this.state)
    
  }



  render(){
    console.log(this.props);
    return(
      <React.Fragment>
      <form onSubmit={this.handleSubmit}>
      <h2>New Student</h2>

      <h3>Student Information </h3>
      <div onChange={this.handleChange}>
        <div className="form-elem">
        Name:<input
              className="input"
              type="text"
              name="firstname"
              placeholder="Firstname"/>
              <input
                className="input"
                type="text"
                name="lastname"
                placeholder="Lastname"
              />
            </div>
            <div className="form-elem">
          Email:  <input
              className="input"
              type="text"
              name="email"
              placeholder="email"
            />
          </div>
          <div className="form-elem">
          Age:  <input
              className="input"
              name="age"
              type="number"
            />
          </div>
          <div className="form-elem">
          Grade:  <input
              className="input"
              name="grade"
              type="number"
            />
          </div>

          <div className="form-elem">
            <div>
              <input name="gender" type="radio" value="female"/>
              female
            </div>
            <div>
              <input name="gender" type="radio" value="male"/>
              male
            </div>
          </div>

          <h3>Parent/Guardian Information </h3>
          <div className="form-elem">
            Fullname: <input
                className="input"
                type="text"
                name="guardians_name"
                placeholder="Fullname"
              />
            </div>
          <div className="form-elem">
            Relationship to Student: <input
                className="input"
                type="text"
                name="relationship_to_student"
                placeholder="ex)Parent, Guardian etc."
              />
          </div>
          <div className="form-elem">
          Email:  <input
              className="input"
              type="text"
              name="guardians_email"
              placeholder="email"
            />
          </div>
          <div className="form-elem">
          Phone:  <input
              className="input"
              type="text"
              name="guardians_phone"
              placeholder="phone"
            />
          </div>
          <br/>
          <input type="submit" className="button" />
        </div>
        </form>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  console.log("inside mapstate", state.bathroomReducer);
  return {
    currentTeacher: state.teacherReducer.teacher,
    currentClass: state.bathroomReducer.curr_class
  };
};


export default withAuth(connect(mapStateToProps)(NewStudentForm));


// export default NewStudentForm;
