import React from "react"
import './About.css'

class About extends React.Component{
  render(){
    return(
    <div className="about">
      <header className="info-details">
    <h1 className="title-name">Kate Kim</h1>
    <h2><a href="https://github.com/1030tue" target="_blank" className="nice-link"><i className="github square icon"></i></a>
    <a href="https://www.linkedin.com/in/katekim5809" target="_blank" className="nice-link"><i class="linkedin icon"></i></a></h2>
    <div class="contact-info">
      <a class="links" href="mailto:katekim5809@gmail.com">katekim5809@gmail.com</a>
    </div>
  </header>
      <h2 class="category-titles">Summary</h2><hr/>
      <p class="category-description-main">Full-stack web developer.
      Practical experience in Ruby on Rails, JavaScript, and React-Redux, with a background in learning technologies. While I discovered web development through teaching math with a program called GSP (Geometer’s Sketch Pad), I bring well-rounded skills from the meticulous study of web development at Flatiron School that will guide me to success.</p>

      <h2 class="category-titles">Skills</h2><hr/>
      <div class="category-description">
        <ul>
          <li>Html5 / CSS3</li>
          <li>JavaScript / React / Redux</li>
          <li>Heroku / AWS</li>
          <li>Git / GitHub</li>
          <li>Photoshop / Illustrator</li>
        </ul>
      </div>

  <div className="about-container">
    <h2 className="category-titles">Projects</h2>
    <hr/>
    <p><a href="https://github.com/1030tue/inclass_client" className="nice-link">In-Class </a></p>
    <p className="category-description">A classroom mmanagement tool for teachers, utilizing a Ruby on Rails backend and React-Redux frontend.</p>

    <p><a href="ArtMe  https://github.com/1030tue/ArtMe_project" className="nice-link">ArtMe</a></p>
    <p className="category-description">Art e-commerce site utilizing Ruby on Rails for both backend and frontend.</p>

    <p><a href="https://github.com/adamjgordon28/paws-up-frontend" className="nice-link">PawsUp</a></p>
    <p className="category-description">Pet adoption site for abandoned   animals using a Ruby on Rails backend and React frontend. </p>
    </div>
    <br/>


    </div>
    )
  }
}

export default About

// <div class="about-container">
//   <h2 class="category-titles">Professional Expirience</h2><hr/>
//
//   <p class="primary-titles prof-expirience">Good Company <span class="location">| New York, NY</span></p>
//   <p class="category-details">6/2019 - 10/2025 | Someposition </p>
//   <p class="category-description">
//     Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante. Nulla quam. Aenean laoreet. Vestibulum nisi lectus, commodo ac, facilisis ac, ultricies eu, pede. Ut orci risus, accumsan porttitor, cursus quis, aliquet eget, justo. Sed pretium blandit orci. Ut eu diam at pede suscipit sodales. Aenean lectus elit, fermentum non, convallis id, sagittis at, neque. Nullam mauris orci, aliquet et, iaculis et, viverra vitae, ligula. Nulla ut felis in purus aliquam imperdiet.
//   </p>
// </div>
