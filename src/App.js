import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Form from './Form';



function App() {
  const jobsArray=["classified","Team Leader","Tech Expert", "Seduction Specialist", "Demolition Doctor","Wall of Meat" ]

  const [teamMembers, setTeamMembers] = useState([])
  const [values, setValues] =useState({
    fname:"",
    lname:"",
    job:"",
  })

  const onSubmit = () =>{
    setTeamMembers([values, ...teamMembers])
  }
  const onChange = (name, value) =>{
    setValues({...values, [name]: value})
  } 

const displayJob = (i) =>{
  return jobsArray[i]
}

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcom to MI6</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Build a Team:</p>
        <Form values={values} submit={onSubmit} change={onChange} jobsArray={jobsArray}></Form>
        <div>
          {teamMembers.map((member, idx)=>{
            return(
              <div key={idx}>
                {member.fname} {member.lname}: {displayJob(member.job)}
              </div>
            )
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
