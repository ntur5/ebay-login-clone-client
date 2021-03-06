import React, { Component } from 'react';

import logo from '../../static/assets/images/ebay-logo.jpg'
import adChoice from '../../static/assets/images/adChoice.png'
import checkBox from '../../static/assets/images/checkbox.png'

const divStyle = {
   
  };

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            ererrorText: ''
        }

        this.handleChange = this.handleChange.bind(this)
        // this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            errorText: ''
        })
    }
    
    render() {
        return (
            <div className="page-container">
            <div className="header">
                <a href="https://www.ebay.com/">
                    <img style={divStyle}
                        src={logo}
                        // src="https://ir.ebaystatic.com/rs/v/fxxj3ttftm5ltcqnto1o4baovyl.png" 
                        alt="eBay Logo">
                    </img>
                </a>
            </div>
            <div className="welcome-container">
                <div className="greeting">
                    <h1 className="heading">Hello</h1>
                    <div className="sub-heading">Sign in to eBay or <a href="https://reg.ebay.com/reg/PartialReg?siteid=0&co_partnerId=0&UsingSSL=1&rv4=1&ru=https%3A%2F%2Fwww.ebay.com%2F&signInUrl=https%3A%2F%2Fwww.ebay.com%2Fsignin%3Fsgn%3Dreg%26siteid%3D0%26co_partnerId%3D0%26UsingSSL%3D1%26rv4%3D1%26ru%3Dhttps%253A%252F%252Fwww.ebay.com%252F">create an account</a></div>
                </div>
            </div>
            <div className="signin-container">
                <form className="auth-form-wrapper">
                    <div className="form-group">
                            <lable className="label">Email or username</lable>
                            <input 
                                type="email" 
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                    </div>
                    <div className="form-group">
                        <label className="label">Password</label>
                        <input 
                            type="password" 
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button className="signin-btn">Sign in</button>
                    <div className="password-reset">
                        <div className="password-reset-link-1">
                            <a href="#">Text a temporary password</a>
                        </div>
                        <div className="password-reset-link-2">
                            <a href="#">Reset your password</a>
                        </div>
                    </div>
                </form>
                
                <div className="signin-separator" >
                    <div className="separator-top animate"></div>
                    <div className="or-seperator">or</div>
                    <div className="separator-bottom animate"></div>
                </div>
                <div className="signin-buttons">
                    <button className="fb-btn"><img className="facebook-image" src="https://ir.ebaystatic.com/rs/c/sgninui-src-static-images-FB-f-Logo__white_29-Nm8L0bDZ.png" />Sign in with Facebook</button>
                    <button className="google-btn"><img className="google-image" src="https://ir.ebaystatic.com/rs/c/sgninui-src-static-images-google-logo-icon-PNG-Transparent-Background-Z_TFsqo3.png" />Sign in with Google</button>
                    {/* <button className="google-btn">Sign in with Google</button> */}
                </div>
                {/* <div className="social-buttons-container">
                    <button className="fb-btn">Sign in with Facebook</button>
                    <button className="google-btn">Sign in with Google</button>
                </div> */}
            </div>
            <div className="stay-signed-in-container">
                <div className="checkbox-container">
                    <img src={checkBox} />
                    {/* <input id="csi" className="checkbox-control" type="checkbox" checked="" value="1" /> */}
                    <label for="csi">Stay signed in</label>
                </div>
                <div className="privacy-text">
                    <div className="privacy-text-divs">
                        Using a public or shared device?
                    </div>
                    <div className="privacy-text-divs">
                        Uncheck to protect your account. 
                    <a href="#" className="learn-more-link" role="button" aria-label="Learn more about stay signed in." >&nbsp;Learn more</a>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="footer-links">
                    Copyright © 1995-2020 eBay Inc. All Rights Reserved. 
                    <a href="https://www.ebayinc.com/accessibility/">Accessibility,</a>
                    <a href="https://pages.ebay.com/help/policies/user-agreement.html">User Agreement,</a>
                    <a href="https://pages.ebay.com/help/policies/privacy-policy.html">Privacy,</a>
                    <a href="https://pages.ebay.com/help/account/cookies-web-beacons.html">Cookies,</a>
                    and <a href="https://www.ebay.com/adchoice">AdChoice<img className="adChoice-image" src={adChoice} alt="adChoice" /></a>
                </div>
                <img className="norton-image" src="https://ir.ebaystatic.com/rs/v/f5uxsy10bmz05dtrtrqybl5qquv.png"></img>
            </div>
        </div>
        )
    }
}