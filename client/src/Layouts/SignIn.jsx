import { Link } from 'react-router-dom'
import { useState } from 'react'

function SignIn() {

    const [formData, setFormData] = useState({
                                                email: '',
                                                password: ''
                                            })

    return ( 
        <div className="row my-5 justify-content-center">
            <div className="col-10 col-sm-8 col-md-7 col-lg-6 col-xl-4 mt-5">
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control border-1" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setFormData({...formData, email: e.target.value})}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => setFormData({...formData, password: e.target.value})}></input>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary px-3">Sign In</button>
                        <p className="my-2">Don't have an account? <Link to='/sign-up'>Sign Up</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignIn;