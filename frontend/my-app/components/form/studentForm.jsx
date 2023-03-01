import React,{useState} from 'react'

// name ,     
//  register_no,                 
// year (should in drop down list [ 1 Year , 2 Year , 3 Year , 4 Year) ,    
    //   Batch ,          Department should in drop-down list [ Information Technology ,
    //  Computer Science, ])


function StudentForm() {

  const [studentName, setstudentName] = useState('')
  const [registerNo, setregisterNo] = useState('') 
  const [year, setyear] = useState('')
  const [studentDepartment, setStudentDepartment] = useState('') 
  const studentnameinputhandler = (e) =>{
    setstudentName(e.target.value)
    console.log(studentName)
  } 
  const registerNoHandler = (e) =>{
    setregisterNo(e.target.value)
    console.log(registerNo)
  } 
  const yearhandler = (e) =>{
    setyear(e.target.value)
    console.log(year)
  }
  const departmenthandler = (e) =>{
    setStudentDepartment(e.target.value)
    console.log(studentDepartment)
  }
  const studentFormSubmiHandler = (e)=>{
    e.preventDefault()
  }
  return (
    <form onSubmit={studentFormSubmiHandler}>
           <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        placeholder="enter your Name"
        required
        minLength={3}
        maxLength={15}
        onChange={studentnameinputhandler}
        value={studentName}
      />
      <label htmlFor="register_no">Employee Id</label>
      <input
        type="text"
        placeholder="enter your register no"
        id="register_no"
        required
        minLength={4}
        maxLength={12}
        onChange={registerNoHandler}
        value={registerNo}
      />
      <select onChange={yearhandler}>
        <option value="">1 Year</option>
        <option value="">2 Year</option>
        <option value="">3 Year</option>
        <option value="">4 Year</option>
      </select>
      <select onChange={departmenthandler}>
        <option value="it">Informaation Technology</option>
        <option value="cs">Computer Science</option>
        <option value="ece">Eclectronics and communication</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  )
}

export default StudentForm