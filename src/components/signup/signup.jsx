import React from 'react';
import {Link} from 'react-router-dom';
import './signup.css';

function Signup()
{
    return(
        <div>
        <div class="container-md">
            <center>
            <form>
                <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SIGNUP</h1>
                <div class="form-group">
                    <label class="form-label">Username :</label>
                    <input type="text"
                    class="form-control"
                    // placeholder="username"
                    id="username"
                    required
                    />
                </div>
                <br />
                <div class="form-group">
                    <label class="form-label">Email :</label>
                    <input type="text"
                    class="form-control"
                    // palceholder="email"
                    id="email"
                    required
                     />
                </div>
                <br />
                <div class="form-group">
                     <label class="form-label">Password :</label>
                        <input 
                        type="password"
                        class="form-control"
                        // placeholder="Password" 
                        id="password"
                        required
                        />
                    </div>
                    <br />
                    <div class="form-group">
                     <label class="form-label">Re-enter Password :</label>
                        <input 
                        type="password"
                        class="form-control"
                        // placeholder="Password" 
                        id="password"
                        required
                        />
                    </div>
                    <br />
                    <input type="submit" value="SIGNUP" /><br />
                    <div className="check">
                        <label>
                            <input class="form-check-input" type="checkbox" />
                            &nbsp; Remember me
                            <br />
                        </label>
                    </div>
                    <br />
                    <div>
                        Do you have an account ? <Link to='/login'>Login Here</Link>
                    </div>
                    <br />
                </form>
                </center>
                </div>
                </div>
    )
}
export default Signup