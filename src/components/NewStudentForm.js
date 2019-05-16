import React from "react";


class NewStudentForm extends React.Component{
  state={
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
    this.props.AddNewStudent(this.state)
  }



  render(){
    console.log(this.state);
    return(
      <form onChange={this.handleChange}>
      <h2>New Student</h2>

      <h3>Student Information </h3>

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
          <input type="submit" className="StudentCard" onClick={this.handleSubmit}/>

        </form>
    )
  }
}

export default NewStudentForm;

// <h3>Add Class to Student </h3>
// <div className="form-elem">
// <input
//     className="input"
//     type="dropdown"
//     name="periods"
// />
// </div>
