import React from 'react'
import './Home.scss'

import Logo from '../images/user_icon.png'
import Logo1 from '../images/password.png'
export const Home = () => {
    return (
        <div className="containers">
    
        <form action="#">
          <div className="form-content">
            <div className="login-form">
           
              <div className="title">Login</div>
              <div className="input-boxes">
                <div className="input-box">
               
          
                <img src={Logo}/>
                  <input type="text" placeholder="Username" style={{fontFamily:'Roboto ,sans-serif'}} required></input>
                </div>
                <div className="input-box">
                <img src={Logo1}/>
                  <input type="password" placeholder="Password" style={{fontFamily:'Roboto ,sans-serif'}} required></input>
                </div>
                <div className="text"><a href="#" style={{fontFamily:'Roboto ,sans-serif'}}>Forgot password?</a></div>
                <div >
               <button className="button"><a href="/tab" style={{textDecoration:'none',color:'white',fontSize:'initial',fontFamily:'Roboto ,sans-serif'}}>Submit</a></button>
                </div>
                
              </div>
            </div>
           
           
          </div>
        </form>
      </div>
    )
}