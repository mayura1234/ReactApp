
import React from 'react';
import './login.css';
import {Link} from 'react-router-dom';

function Login()
{
    return(
        <div>
            <center>
            <div class="container-md">
                <form>
                    <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LOGIN</h1>
                    <div class="form-group">
                        <input 
                        type="text"
                        class="form-control"
                        placeholder="userName" 
                        id="username"
                        required
                        />
                    </div>
                    <br />
                    <div class="form-group">
                        <input 
                        type="password"
                        class="form-control"
                        placeholder="Password" 
                        id="password"
                        required
                        />
                    </div>
                    <br />
                    <input type="submit" value="LOGIN" /><br />
                        
                    <div className="check">
                        <label>
                            <input class="form-check-input" type="checkbox" />
                            &nbsp; Remember me
                            <br />
                        </label>
                    </div>
                    <br />
                    <div>
                        Don't have an account ? <Link to='/signup'>Create it.</Link>
                    </div>
                    <br />
                </form>
            </div>
            </center>
        </div>

    )
}

export default Login