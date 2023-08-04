import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

// importing script functions
import { postUser } from '../Scripts/users'

function SignIn() {

    const [formData, setFormData] = useState({
                                                email: '',
                                                password: ''
                                            })
    
    const [formMessages, setFormMessages] = useState({
                                                        generalMessage: '',
                                                        emailMessage: '',
                                                        passwordMessage: ''
                                                    })  

    const [showPw, setShowPw] = useState(false)

    const updateUser = async () => {
        // validating form inputs before checking if user exists in database
        let validData = true
        const validationMessages = {
                                        generalMessage: '',
                                        emailMessage: '',
                                        passwordMessage: ''
                                    }
        if(formData.email.trim(' ') === '' || !formData.email.includes('@') || !formData.email.includes('.') || formData.email.length < 10){
            validationMessages.emailMessage = 'Please enter a valid email address.'
            validData = false
        }
        if (formData.password.trim(' ') === '') {
            validationMessages.passwordMessage = 'Please enter a valid password.'
            validData = false
        }
        if(validData) {
            const foundUser = await postUser(`${process.env.REACT_APP_BACKEND_URL}/getUser`, {email:formData.email.toLowerCase(), password: formData.password})
            // if no user is returned then the email or password are incorrect
            if(!foundUser) {
                validationMessages.generalMessage = 'Incorrect username or password.'
            }
        }
        setFormMessages(validationMessages)
    }                                       
                                            
    return ( 
        <div className="row my-5 justify-content-center">
            <div className="col-10 col-sm-8 col-md-7 col-lg-6 col-xl-4 mt-5">
                <form>
                    <p className="text-danger text-center">{formMessages.generalMessage}</p>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control border-1" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setFormData({...formData, email: e.target.value})}></input>
                        <p className="text-danger mt-1">{formMessages.emailMessage}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <div className="password-container">
                            <input type={`${showPw ? 'text' : 'password'}`} className="form-control" id="exampleInputPassword1" onChange={(e) => setFormData({...formData, password: e.target.value})}></input>
                            <FontAwesomeIcon className={`show-pw-icon ${showPw ? 'd-none' : ''}`} icon={faEye} style={{color: "#000000",}} onClick={() => setShowPw(showPw => !showPw)}/>
                            <FontAwesomeIcon className={`show-pw-icon ${showPw ? '' : 'd-none'}`} icon={faEyeSlash} style={{color: "#000000",}} onClick={() => setShowPw(showPw => !showPw)}/>
                        </div>
                        <p className="text-danger mt-1">{formMessages.passwordMessage} </p>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary px-3" 
                        onClick={(e) => {
                                            e.preventDefault()
                                            updateUser()
                                        }}
                        >Sign In</button>
                        <p className="my-2">Don't have an account? <Link to='/sign-up'>Sign Up</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignIn;