import React from "react"
import './Login.css'

class AboutInclass extends React.Component{
  render(){
    return(
    <div className="about">
    <header className="info-details">
    <h1 className="title">In-class</h1>
  </header>
      <h3 class="category-titles">description</h3><hr/>
      <p class="category-description-main">

      In-Class is a classroom management app for teachers.
      <br/><br/>
      By using this app,
      teachers will be able to
      <ul>
      <li> add their classes, </li>
      <li>add students to each class, </li>
      <li>send to  each student bathroom, nurse or for other emergencies,</li>
      <li>measure time how long they have been out in class, and </li>
      <li>contact them, their parents or guardians or other teachers to help after a certain amount of time. </li>
      </ul>
      <br/>
      <br/>
      <h3 class="category-titles">Demo Account</h3><hr/>
      <p class="category-description-main">
      For demo, please use
      <br/> 
&nbsp; &nbsp; &nbsp; email : obi@tea.com
      <br/>
&nbsp; &nbsp; &nbsp; password: obi
      </p>
      <br/>
      <hr/>
     You can check the backend on
      https://peaceful-tundra-58711.herokuapp.com or
      https://github.com/1030tue/backend_inclass

      </p>



    </div>
    )
  }
}

export default AboutInclass
