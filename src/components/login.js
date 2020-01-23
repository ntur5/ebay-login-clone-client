import React from 'react';

const Login = () => {
    return (
        <div>
            <div className="greating">
                <h1>Hello</h1>
                <div>sign in to eBay or <a>create an account</a></div>
            </div>
            <form>
            <div className="form-group">
                <input 
                    type="email" 
                    name="email"
                    placeholder="Your email"

                />
            </div>
            <div className="form-group">
                <input 
                    type="password" 
                    name="password"
                    placeholder="Your Password"
                
                />
            </div>
            <button>Sign in</button>
            <div>Text a temporary password</div>
            <div>Reset your password</div>
            </form>
        </div>
    )
}

export default Login