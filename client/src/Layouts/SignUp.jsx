import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

// importing script functions
import { postUser } from '../Scripts/users'

function SignUp() {

    const [formData, setFormData] = useState({
                                                firstName: '',
                                                lastName: '',
                                                email: '',
                                                password: '',
                                                repassword: ''
                                            })

    const [formMessages, setFormMessages] = useState({
                                                generalMessage: '',
                                                firstNameMessage: '',
                                                lastNameMessage: '',
                                                emailMessage: '',
                                                passwordMessage: '',
                                                repasswordMessage: ''
                                            })

    const [showPw, setShowPw] = useState(false)

    // password regex
    const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    const isValidPassword = (str) => passwordRules.test(str)
    
    // names regex
    const alphaRules = /^[a-zA-Z]*$/
    const isAlpha = (str) => alphaRules.test(str)

    const updateUser = async () => {

        let validInputs = true
        let formErrors = {
                            generalMessage: '',
                            firstNameMessage: '',
                            lastNameMessage: '',
                            emailMessage: '',
                            passwordMessage: '',
                            repasswordMessage: ''
                        }
        // validating inputs
        if (formData.firstName.trim(' ') === '' || !isAlpha(formData.firstName)) {
            formErrors.firstNameMessage = 'Please enter a valid name.'
            validInputs = false
        }

        if (formData.lastName.trim(' ') === '' || !isAlpha(formData.lastName)) {
            formErrors.lastNameMessage = 'Please enter a valid name.'
            validInputs = false
        }

        if (!isValidPassword(formData.password)) {
            formErrors.passwordMessage = 'Please enter a valid password.'
            validInputs = false
        }

        if (!isValidPassword(formData.repassword)) {
            formErrors.repasswordMessage = 'Please enter a valid password.'
            validInputs = false
        }

        if (formData.email.trim(' ') === '' || !formData.email.includes('@') || !formData.email.includes('.')) {
            formErrors.emailMessage = 'Please enter a valid email.'
            validInputs = false
        }

        // if all inputs are valid check passwords are matching then call postUser function to add to the Database
        if (validInputs) {
            
            if (formData.password !== formData.repassword) {
                console.log('pw doesnt match')
                formErrors.generalMessage = 'Passwords do not match.'
                console.log(formErrors)
            } else {
               // check if this email is already in use by another user
               const takenUser = await postUser(`${process.env.REACT_APP_BACKEND_URL}/getUser`, {email: formData.email}) 
               if (takenUser) {
                    formErrors.generalMessage = 'This email is already in use.'
               } else {
                // add user to the DB
                const addedUser = await postUser(`${process.env.REACT_APP_BACKEND_URL}/addUser`, {...formData, email: formData.email.toLowerCase()})
                if (addedUser) {
                    formErrors.generalMessage = 'Success!'
                } else {
                    formErrors.generalMessage = 'Something went wrong, please try again.'
                }
               }
            }
        }

        setFormMessages(formErrors)

    }

    return ( 
        <div className="row my-5 justify-content-center">
            <div className="col-10 col-sm-8 col-md-7 col-lg-6 col-xl-4 mt-5">
                <form>
                    <p className="text-center text-danger">{formMessages.generalMessage}</p>
                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="firstName" onChange={(e) => setFormData({...formData, firstName: e.target.value})}></input>
                        <p className="text-danger">{formMessages.firstNameMessage}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="lastName" onChange={(e) => setFormData({...formData, lastName: e.target.value})}></input>
                        <p className="text-danger">{formMessages.lastNameMessage}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={(e) => setFormData({...formData, email: e.target.value})}></input>
                        <p className="text-danger">{formMessages.emailMessage}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <div className="password-container">
                            <input type={`${showPw ? 'text' : 'password'}`} className="form-control" id="password" onChange={(e) => setFormData({...formData, password: e.target.value})}></input>
                            <FontAwesomeIcon className={`show-pw-icon ${showPw ? 'd-none' : ''}`} icon={faEye} style={{color: "#000000",}} onClick={() => setShowPw(showPw => !showPw)}/>
                            <FontAwesomeIcon className={`show-pw-icon ${showPw ? '' : 'd-none'}`} icon={faEyeSlash} style={{color: "#000000",}} onClick={() => setShowPw(showPw => !showPw)}/>
                        </div>
                        <p className="text-danger">{formMessages.passwordMessage}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="repassword" className="form-label">Re-enter Password</label>
                        <div className="password-container">
                            <input type={`${showPw ? 'text' : 'password'}`} className="form-control" id="repassword" onChange={(e) => setFormData({...formData, repassword: e.target.value})}></input>
                            <FontAwesomeIcon className={`show-pw-icon ${showPw ? 'd-none' : ''}`} icon={faEye} style={{color: "#000000",}} onClick={() => setShowPw(showPw => !showPw)}/>
                            <FontAwesomeIcon className={`show-pw-icon ${showPw ? '' : 'd-none'}`} icon={faEyeSlash} style={{color: "#000000",}} onClick={() => setShowPw(showPw => !showPw)}/>
                        </div>
                        <p className="text-danger">{formMessages.repasswordMessage}</p>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary px-3" onClick={(e) => {
                            e.preventDefault()
                            updateUser()
                        } }>Sign Up</button>
                        <p className="my-2">Already have an account? <Link to='/sign-in'>Sign In</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;