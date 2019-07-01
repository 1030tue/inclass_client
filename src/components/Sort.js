import React from "react";

const Sort = props => {
  return (
    <div id="filter">
        <div><input type="text" placeholder="Search Name..." onChange={(e)=>props.handleSearch(e.target.value)}/></div>
        <div>
          <div onChange={(e)=>props.handleSortFirst(e.target.value)}><input name="sort" type="radio" value="firstname"/>firstname<input name="sort" type="radio" value="lastname"/>lastname</div>
          </div>
        <select onChange={(e)=>props.handleSortSecond(e.target.value)}>
          <option label="Sort By"></option>
          <option value="atoz">A to Z</option>
          <option value="ztoa">Z to A</option>
        </select>

    </div>
  );
};

export default Sort;
