import React, { Component } from 'react'
import {MenuContents} from "./MenuContents"
import './Navbar.css'
import {Button} from "../Button"
import {Link} from "react-router-dom";
class Navbar extends Component{
    state = {isClicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
                <nav className="NavbarContents">
                    <Link to="/"><h1 className="navbar-logo"></h1></Link>
                    <div className="menu-icon" onClick={this.handleClick}>
                        <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                        
                    </div>
                    <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                        {MenuContents.map((item,index)=>{
                            return(
                                <li className={`list${index}`}><Link to={item.url} className={item.cName}>{item.title}</Link>
                                    </li>      
                            )
                        })}
                        
                    </ul>
                         <Link to="/login" className="loginButton"><a className="nav-linksLogin" href="">Login</a></Link>
                                    
                                   
                         <Link to="/signup"><Button>Sign Up</Button></Link>
                </nav>
            


        )
    }
}

export default Navbar