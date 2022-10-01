import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import '../Login/Login.css';
import { Button } from '../Button';
import {Link} from "react-router-dom";
import axios from 'axios';

function EmailError(props){

  return (
      <div className={props.display}>
        <a className="errorMessages">{props.errorMsg}</a>
      
      </div>
  ) 
  
}

class Login extends Component{
    constructor() {
    super();
    this.state = {
      username: '',
      email:'',
      password:'',
      password2:'',
      hasErrors: 'noError',
      fieldErrors: ''
      
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
    onSubmit = e => {
        e.preventDefault(); 
    const data = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      hasErrors: this.state.hasErrors,
      fieldErrors: this.state.fieldErrors
      
      
    };
    axios
      .post('http://localhost:8082/api/users/login', data)
      .then(res => {
         if(res.data === "Login Sucessful!"){
             alert("Logged in");
            this.props.history.push('/');
         }
         
           var badUser = false;
           var badEmail = false;
           var badPassword = false; 
           
           if(res.data._id === undefined){


            if(res.data.passwordincorrect === "Password incorrect" ){ 
                this.setState({
                  hasErrors: 'signUpError',
                  fieldErrors: res.data.passwordincorrect
                })
              
                badUser = true;
             }
             if(res.data.emailnotfound === "Email not found"){
              if(badUser){
                this.setState({
                  hasErrors: 'signUpError',
                  fieldErrors: this.state.fieldErrors + ", " +res.data.emailnotfound
                })
              }
              else{
                this.setState({
                  hasErrors: 'signUpError',
                  fieldErrors: res.data.emailnotfound
                })
              }
              
              badEmail = true;
             }
             if(res.data.email !== undefined){
              if(badEmail || badUser){
                this.setState({
                  hasErrors: 'signUpError',
                  fieldErrors: this.state.fieldErrors + ", " + res.data.email
                })
              }
              else{
                this.setState({
                  hasErrors: 'signUpError',
                  fieldErrors: res.data.email
                })
              }
              
              badPassword = true;
             }
             if(res.data.password !== undefined){
               if(badPassword || badEmail || badUser){
                this.setState({
                  hasErrors: 'signUpError',
                  fieldErrors: this.state.fieldErrors + ", " + res.data.password
                })
               }
               else{
                this.setState({
                  hasErrors: 'signUpError',
                  fieldErrors: res.data.password
                })
               }
             }
              
            

             
             
           }
           else{
            this.setState({
              username: '',
              email: '',
              password: '',
              password2: '',
              hasErrors: 'noError',
              fieldErrors: ''
              
            })
           }
       
      })
        .catch(err => {
          console.log(err); 
          alert(err);
        })
      
  };

    render(){
        return(
            
                <div className="SignUpPage">
                   <div className="SignUpBody">
                    <h className= "SignUpHeader">Login</h>
                    

                    <form className="SignUpForm" onSubmit={this.onSubmit}>
                      <EmailError display={this.state.hasErrors} errorMsg={this.state.fieldErrors}onChange={this.onChange}/>
                       
                       <input type="text" placeholder="Email Address" className="email"name="email"   value={this.state.email} onChange={this.onChange}/>
                       <input type="password" placeholder="Password" className="pword" name="password"  value={this.state.password} onChange={this.onChange}/>
                       
                          <input type ="submit" className="registerButton" value="Log in"></input>
                          <div className="resetPassword">
                                
                                
                                
                                <a className="agree"> Forgot your password? </a>
                                <a href="#" className="termsOfUse" >Reset Password </a> 
                                
                                
                       </div>
                      <div className="orDiv">
                        ────────────────────────── OR ──────────────────────────  
                      </div>
                      <div className="orDivMobile">
                        ───────────── OR ─────────────  
                      </div>
                      <Link to="/guest" className="guestLabel">
                          <button className="guestButton">Continue As Guest</button>
                      </Link>
                      <Link to="/signup" className="signUpLink">
                      <div className="noAccount">
                        New to the Runway? <a href="" className="loginURL">Sign Up</a>
                      </div>
                      </Link>
                       
                    </form>
                    
                   </div>

                  
                </div>



        )
    }
}

export default  Login


// Code below from https://stackoverflow.com/questions/44387318/linking-button-to-another-page





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
