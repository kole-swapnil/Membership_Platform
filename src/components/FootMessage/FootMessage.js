import React, {Component} from 'react'
import {Button} from "../Button"
import './FootMessage.css'

class FootMessage extends Component{
    
    
    render(){
        return(
                
                            
                <div>        
                <div className="footMessage">
                        <h className="messageFoot">See why models all over the world are using The Runway</h>
                        </div> 
                        
                    
                <div className="custom">
                <Button className="custom" display="block" >Get Started</Button>  
                </div>
                </div>


        )
    }
}

export default FootMessage

