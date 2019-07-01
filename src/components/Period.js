import React from "react";

const Period = (props) => {
const {period} = props
console.log("period", props);


let num;
switch (period.period_num) {
  case 1: num = `${period.period_num}st`;
  break;
  case 2: num = `${period.period_num}nd`;
  break;
  case 3: num = `${period.period_num}rd`;
  break;
  default: num = `${period.period_num}th`
}


return (
  <React.Fragment>
     {/*period.teacher.name*/}
     <br/>
  <div className="periodCard" onClick={()=>props.handleClick(props.period)}>
  <h4>
  <span> |{num}| </span>
  {' '}{' '}
  <span> {period.classname} </span>
  <span> {period.duration} min</span>
  <span> {!!period.students.length? `${period.students.length}students `: null} </span>
  </h4>
  </div>
  </React.Fragment>
)
}

export default Period
