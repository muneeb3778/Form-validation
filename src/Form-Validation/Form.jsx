import React, { useEffect, useState } from "react"
import "./Form.css"

// muneeb ur rehman

function Form() {

const initialvalue={username:"",email:"",password:""}  

const [formvalue,setformvalue]=useState(initialvalue)
const [formerrors,setformerrors]=useState({})
const [issubmit,setissubmit]=useState(false)



function handlechange(e){

if(e.target.placeholder=="Username"){
setformvalue({...formvalue,username:e.target.value})    
}else if(e.target.placeholder=="Email"){
setformvalue({...formvalue,email:e.target.value})    
}else if(e.target.placeholder=="Password"){
setformvalue({...formvalue,password:e.target.value})    
}
}

function submit(){

setformerrors(validate(formvalue))
setissubmit(true)
} 


const validate=(values)=>{
const errors={}
const regex=/^[^\s@]+@[^\s\d@]{2,5}\.[^\s\d@]{2,}$/i

console.log(regex.test(values.email))

if(values.username==""){
errors.username="Username is requirred"
}
if(values.email==""){
errors.email="Email is requirred"
}else if(regex.test(values.email)==false){
errors.email="Incorrect email" 
}
if(values.password==""){
errors.password="Password is requirred"
}else if(values.password.length<8){
errors.password="mimimum character should be 8"
}else if(values.password.length>12){
errors.password="maximum character should be 12"
}

return errors

}



useEffect(()=>{

if(Object.keys(formerrors).length==0 && issubmit){
  console.log(formvalue)
}

},[formerrors])




  return (
    <>
    

<div className="container">

{Object.keys(formerrors).length==0 && issubmit?<div className="signinsuccessfully">Sign in successfully</div>:(
     <pre>{JSON.stringify(formvalue,undefined,2)}</pre>
)}

    <div className="formbox">
        <div className="div1">
          <h1 className="h1">Sign Up</h1>
          <div className="underline"></div>
         </div>

            <div className="inputgroup">
               <div className="inputfild inputfild1">
               <i className="fa-solid fa-user"></i>
               <input type="text" placeholder="Username" value={formvalue.username} onChange={(e)=>{handlechange(e)}}/>
               </div>
               <div className="incorrectdetails">{formerrors.username}</div>

                <div className="inputfild">
                <i className="fa-solid fa-at"></i>   
                <input type="email" placeholder="Email" value={formvalue.email} onChange={(e)=>{handlechange(e)}} />
                </div>
                <div className="incorrectdetails">{formerrors.email}</div>
                <div className="inputfild">
                <i className="fa-solid fa-key"></i>    
                <input type="password" placeholder="Password" value={formvalue.password} onChange={(e)=>{handlechange(e)}}/>
                </div>
                <div className="incorrectdetails">{formerrors.password}</div>                 
                <p id="p">Passwordsuggetions<a href="#"> ClickHere</a></p>
            </div>

            <div className="div2">
              <button className="btn signup" onClick={()=>{submit()}}>Sign Up</button><button className=" signin btn disable">Sign In</button>
            </div> 
    
    </div>
</div>
    


    </>
  )
}

export default Form
