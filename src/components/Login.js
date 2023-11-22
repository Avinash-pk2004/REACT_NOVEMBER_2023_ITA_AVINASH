import{useState} from 'react';
import './Login.css';
import * as React from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function Login(){
    
    return ( 
       

<div className="container">
    <div className="image">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMV6cMkGZ-QDd-GRhm9faWFcI7uqothTqo-A&usqp=CAU" alt="Avatar"></img>
    </div>
    
    <pre id="f"><h1><b>Ready to adopt?</b></h1></pre>
    
    <label for="uname"><h3><b>Username or Email</b></h3></label>
    <TextField id="textbox" variant="outlined" placeholder='Enter Username or Email' />
    <br></br>
    <label for="psw"><h3><b>Password</b></h3></label>
    <TextField id="textbox" variant="outlined" placeholder='Enter Password' />
                
        <br></br>
        <div className="forgot"><h3><a href="#">Forgot Passoword?</a></h3></div>
        
    
        <Button id="button"variant="contained">Login</Button>
</div>

     );
}
 
export default Login;