import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import { NavLink } from "react-router-dom";
import './styles.css';
const Home = () => {
  const [getuserData, setuserData] = useState([]);
  console.log(getuserData);
  
  
  const getData = async(e)=>{
    // e.preventDefault();

    const res = await fetch("/getdata",{
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      },
     
    });

    const data = await res.json();
    console.log(data);

    if(res.status === 404 || !data){
      alert('error');
      
    }else{
      setuserData(data);
     
      console.log("get Data");

    }

  }

  useEffect(()=>{
    getData();

  },[]);
  return (
    <>

    <div className="mt-5">
      <div className="container">
        <div className="add_btn mt-3">
          <NavLink to="/register" className="btn btn-primary changemargin">Add Student</NavLink>
        </div>

        <Table className="table changemargin">
      <thead>
        <tr className="table-dark">
          <th scope="col">id</th>
          <th scope="col">Name</th>
          <th scope="col">Department</th>
          <th scope="col">Email</th>
          <th scope="col">Mobile</th>
          <th scope="col">Address</th>
        </tr>
      </thead>
      <tbody>
       {
        getuserData.map((elem,index)=>{
          return (
            <>
            <tr>
        <th scope="row">{index+1}</th>
          <td >{elem.name}</td>
          <td>{elem.dept}</td>
          <td>{elem.email}</td>
          <td>{elem.contact}</td>
          <td>{elem.address}</td>
        </tr>
            </>
          )
        })
       }
     
      
      </tbody>
    </Table>
      </div>
    </div>
    </>
  );
};

export default Home;
