import React from "react";

const Period = (props) => {
const {period} = props

return (
  <React.Fragment>
     {period.teacher.name}
  <div className="periodCard" onClick={()=>props.handleClickPeriod(period)}>
  <span> {period.period_num}period </span>
  <span> {period.classname} </span>
  <span> {period.duration} min</span>
  <span> {period.students.length} students </span>
  </div>
  </React.Fragment>
)
}

export default Period
