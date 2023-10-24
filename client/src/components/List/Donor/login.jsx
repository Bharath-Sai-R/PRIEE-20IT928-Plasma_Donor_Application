import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

const Login = () =>{
    const history=useHistory();
    const [login,setLogin]=useState([{
        username:"",
        password:"",
    }]);
    let ename,value;
    const handleInputs=(e)=>{
     
        ename=e.target.name;
        value=e.target.value;
        setLogin({...login, [ename] : value });
    }
    const CheckData = async(e) =>{
        e.preventDefault();
        const { username,password}= login;

        const res=await fetch("https://server-dot-priee-plasma-donor.el.r.appspot.com/plasma/checkdonor", {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            }, 
            body:JSON.stringify({
                username,password
            })
        });
        const data=await res.json();
        console.log(data.id);
        console.log(res.status);
        if(res.status === 422) 
        {
            alert("Incorrect Password");
        }
        else
        {
          //  alert("Registration successful");
            if(window.location.href.indexOf("loginanddelete") > -1)
            {
                
                const res1=await fetch(`https://server-dot-priee-plasma-donor.el.r.appspot.com/plasma/deletedonor/${data.id}`,{
                    method:"delete",
                })
                const data1=await res1.json();
                console.log(res1.status);
                if(res1.status === 422) 
                {
                    alert(data1.error);
                }
                else
                {
                    alert("User Deleted Successfully");
                    history.push("getdonors");
                }
            }
            else
            history.push("updatedonor");

        }
    }

return(
    <div className="signup-form">
        <h2 className="heading">Login</h2>

    <form method="POST" className="register-form" id="register-form">
    <div class="form-group">
    <span className="labels">Username *</span>
        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text">
                    <span class="fa fa-user"></span>
                </span>
            </div>
            <input 
            type="text" 
            class="form-control" 
            name="username" 
            value={login.username}
            onChange={handleInputs}
            placeholder="Enter your username" 
            required="required" />
        </div>
    </div>
    <div class="form-group">
    <span className="labels">Password *</span>
        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text">
                    <span class="fa fa-user"></span>
                </span>
            </div>
            <input 
            type="password" 
            class="form-control" 
            name="password" 
            values={login.password}
            onChange={handleInputs}
            placeholder="Enter password" 
            required="required" />
        </div>
    </div>
    <div class="form-group">
        <button type="submit" name="register" id="register" onClick={CheckData}  class="btn btn-primary btn-lg">Submit</button>
    </div>
    </form>
    </div>
    )}

    export default Login;