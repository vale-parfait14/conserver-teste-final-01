import React from 'react';
import "./Signin.css";
import HeadingCompSignin from './HeadingCompSignin';

const Signin = () => {
    return (
        <div className='signup'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 column d-flex justify-content-center align-items-center">
                        <div className=" flex-column d-flex  w-100 ">
                            <input className='p-2 my-3 input-signin'
                                type="email"
                                name='email'
                                placeholder='Enter Your Email'
                                required
                            />

                            <input className='p-2 my-3 input-signin'
                                type="password"
                                name='password'
                                placeholder='Enter Your password'
                                required
                            />

                            <button className='btn-signup p-2'>Signin</button>
                        </div>
                    </div>
                    <div className="col-lg-4  column col-left d-flex justify-content-center align-items-center">
                        <HeadingCompSignin first="Sign" second="In"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin;