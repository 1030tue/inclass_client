import React from "react";
import "./popup.css"

class ShowPopup extends React.Component {
// state = {
//         active: false,
//         content: ""
//       }

    // componentDidMount() {
    //   window.Popup = this;
    //    if (this.props.onready && typeof this.props.onready == "function") {
    //      this.props.onready.call();
    //    }
    // }

    // open() {
    //   this.setState({
    //     active: true,
    //     content: 'hey'
    //   });
    // }
    // close() {
    //   this.setState({
    //     active: false
    //   });
    // }
    // update(content) {
    //   this.setState({
    //     content: content
    //   });
    // }
    render() {
      console.log(this.props);
      return (
        <div className="popup" onClick={()=>this.props.close()}>
        <div id="popup" className="in">
            <img style={{width: "6em", height: "6em"}} src="https://upload.wikimedia.org/wikipedia/en/4/4f/Under_construction.JPG" alt={"uc"} />
            <p>A certian part of the site (the tracker part) is under construction. </p>
            <p>If you want to try this website nonetheless,<br/> you can create a new account or use the demo account. </p>
            <table>
            <tr>
            <th>Email</th>
            <td>obi@tea.com</td>
            </tr>
            <th>
            Password
            </th>
            <td>obi</td>
            </table>
            <br/>
            <button className="close" onClick={()=>this.props.close()}>close</button>
        </div>
        </div>
      );
    }

}

export default ShowPopup
