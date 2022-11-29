import React, { useState } from 'react';
import {NavLink} from "react-router-dom";


const Registered = () => {
    const [input, setInput] = useState({
        name:"",
        email:"",
        dept:"",
        contact:"",
        address:""

    });

    function handleInput(e){
        // console.log(e.target.value)

        const {name,value}= e.target;

       setInput((input)=>{
        return {
            ...input , [name]: value 
        }
       })

   


    }

    const addinputdata = async(e)=>{
      e.preventDefault();

      const {name,email,dept,contact,address} = input;

      
      const res = await fetch("/register",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          name,email,dept,contact,address

        })
      });

      const data = await res.json();
      console.log(data);

      if(res.status === 404 || !data){
        alert('error');
        console.log("error")
      }else{
        alert("data added");
        console.log("data added");
      }

    }
  
  return (
    <>

    <div className='container'>
    <NavLink to="/">Home</NavLink>


    <form className='mt-5'>

    <div className="row">

  <div className="mb-3 col-lg-6 col-md-6 col-12">
    <label for="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" onChange={handleInput} value={input.name} name='name' className="form-control" id="exampleInputEmail1"  />
  </div>
  <div className="mb-3 col-lg-6 col-md-6 col-12">
    <label for="exampleInputPassword1" className="form-label">Email</label>
    <input type="email" name='email' value={input.email} onChange={handleInput} className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3 col-lg-6 col-md-6 col-12">
    <label for="exampleInputPassword1" className="form-label">Department</label>
    <input type="text"  name='dept' value={input.dept} onChange={handleInput} className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3 col-lg-6 col-md-6 col-12">
    <label for="exampleInputPassword1" className="form-label">Contact</label>
    <input type="number"  name='contact' value={input.contact} onChange={handleInput} className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3 col-lg-6 col-md-6 col-12">
    <label for="exampleInputPassword1" className="form-label">Address</label>
    <input type="text"  name='address' value={input.address} onChange={handleInput} className="form-control" id="exampleInputPassword1" />
  </div>
  <div>


  <button type="submit" onClick={addinputdata} className="btn btn-primary">Submit</button>
  </div>
 
    </div>
    
</form>
</div>
    </>
  )
}

export default Registered;
