import React from "react";



const Form = (props) =>{

const handleChange = (event) =>{
    const {name, value} = event.target
    props.change(name,value)
}

const handleSubmit = (event) =>{
  event.preventDefault()
  props.submit()
}

return(
<div id="createTeamMember">
        <form onSubmit={handleSubmit}>
          <label> First Name </label>
            <input
              type="text"
              name="fname"
              placeholder='First Name'
              value={props.values.fname}
              onChange={handleChange}
            />
          <label> Last Name </label>
            <input
              type="text"
              name="lname"
              placeholder='Last Name'
              value={props.values.lname}
              onChange={handleChange}
            />
          <label> Job </label>
            <select name="job" onChange={handleChange} value={props.values.job}>
              <option value="0">{props.jobsArray[0]}</option>
              <option value="1">{props.jobsArray[1]}</option>
              <option value="2">{props.jobsArray[2]}</option>
              <option value="3">{props.jobsArray[3]}</option>
              <option value="4">{props.jobsArray[4]}</option>
              <option value="5">{props.jobsArray[5]}</option>
            </select>
          <br></br>
          <input type="submit" value="Add to your team"></input>
        </form>
      </div>

)}
export default Form