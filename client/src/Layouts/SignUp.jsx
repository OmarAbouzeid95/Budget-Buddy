import { Link } from 'react-router-dom'
import { useState } from 'react'

function SignUp() {

    const [formData, setFormData] = useState({
                                                firstName: '',
                                                lastName: '',
                                                email: '',
                                                password: '',
                                                repassword: ''
                                            })

    return ( 
        <div className="row my-5 justify-content-center">
            <div className="col-10 col-sm-8 col-md-7 col-lg-6 col-xl-4">
                <form>
                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="firstName" onChange={(e) => setFormData({...formData, firstName: e.target.value})}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="lastName" onChange={(e) => setFormData({...formData, lastName: e.target.value})}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={(e) => setFormData({...formData, email: e.target.value})}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" onChange={(e) => setFormData({...formData, password: e.target.value})}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="repassword" className="form-label">Re-enter Password</label>
                        <input type="password" className="form-control" id="repassword" onChange={(e) => setFormData({...formData, repassword: e.target.value})}></input>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary px-3">Sign Up</button>
                        <p className="my-2">Already have an account? <Link to='/sign-in'>Sign In</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;