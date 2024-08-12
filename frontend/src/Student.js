import React, { useEffect, useState } from 'react'
import './Student.css'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Student = () => {
const [Student,setStudent]=useState([]);

useEffect(()=>{
    axios.get('http://localhost:8081/')
    .then(res=>setStudent(res.data))
    .catch(err=>console.log(err))
},[])


const HandleDelete=async(id)=>{
try{
  await axios.delete('http://localhost:8081/student/'+id)
  window.location.reload()
}
catch(err){
  console.log(err);
}
}
  return (
    <div className='Main-Container'>
     <div className='First-Div'>
        <Link to="/create" className='Butt'>Add+</Link>
         <table className='table'>
             <thead>
                <tr>
              <th>Name</th>
              <th>Email</th>  
              <th>Action</th>

              </tr>
             </thead>
             <tbody>
                {
                  Student.map((data,i)=> (
                    <tr key={i}>
                      <td>{data.name}</td>
                      <td>{data.email}</td>
                      <td>
                        <div className='ButtonContainer'>
                        <Link to={`update/${data.id}`} className='Update'>Update</Link>
                        <button className='Delete' onClick={e=>HandleDelete(data.id)}>Delete</button>
                        </div>
                        
                      </td>

                    </tr>
              ))
                }
             </tbody>
         </table>
     </div>
    </div>
  )
}

export default Student
