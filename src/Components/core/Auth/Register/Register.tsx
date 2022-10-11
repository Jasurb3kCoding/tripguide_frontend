// @flow
import * as React from 'react';
import {FaFacebookF, FaGoogle} from "react-icons/fa";
import {Input} from "../Input/Input";
import {useEffect, useRef, useState} from "react";
import {toast} from "react-toastify";
import {Link} from "react-router-dom";
import {validateEmail, validateName, validatePassword} from "../validators"
import axios from "../../../../Api/axios";

const REGISTER_URL = '/users/'


type RegisterDataResponse = {
    success: boolean,
    errors?: any,
    email?: string
}

type RegisterResponse = {
    data: RegisterDataResponse
}
type Props = {
    changeModal: any
    context: any
    setContext: any
};


export const Register = ({changeModal, context, setContext}: Props) => {
    const firstNameRef = useRef<HTMLInputElement>(null);
    const lastNameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const pwdRef = useRef<HTMLInputElement>(null);
    const matchPwdRef = useRef<HTMLInputElement>(null);
    const privacyRef = useRef<HTMLInputElement>(null);
    const errRef = useRef<HTMLInputElement>(null);

    const [firstName, setFirstName] = useState('');
    const [validFirstName, setValidFirstName] = useState(false);
    const [focusFirstName, setFocusFirstName] = useState(false);
    const [errorMessageFirstName, setErrorMessageFirstName] = useState('');

    const [lastName, setLastName] = useState('');
    const [validLastName, setValidLastName] = useState(false);
    const [focusLastName, setFocusLastName] = useState(false);
    const [errorMessageLastName, setErrorMessageLastName] = useState('');

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [focusEmail, setFocusEmail] = useState(false);
    const [errorMessageEmail, setErrorMessageEmail] = useState('');


    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [focusPwd, setFocusPwd] = useState(false);
    const [errorMessagePwd, setErrorMessagePwd] = useState('');


    const [matchPwd, setMatchPwd] = useState('');
    const [validMatchPwd, setValidMatchPwd] = useState(false);
    const [focusMatchPwd, setFocusMatchPwd] = useState(false);
    const errorMessageMatchPwd = "Passwords doesn't match"

    const [readRules, setReadRules] = useState(false);

    const [readyToSubmit, setReadyToSubmit] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        firstNameRef?.current?.focus()
    }, [])

    useEffect(() => {
        const validation = validateName(firstName)
        setValidFirstName(validation.is_valid)
        setErrorMessageFirstName(validation.message)
    }, [firstName]);

    useEffect(() => {
        const validation = validateName(lastName)
        setValidLastName(validation.is_valid)
        setErrorMessageLastName(validation.message)
    }, [lastName]);

    useEffect(() => {
        const validation = validateEmail(email)
        setValidEmail(validation.is_valid)
        setErrorMessageEmail(validation.message)
    }, [email]);

    useEffect(() => {
        const validation = validatePassword(pwd)
        setValidPwd(validation.is_valid)
        setErrorMessagePwd(validation.message)

        setValidMatchPwd(pwd === matchPwd)
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('')
    }, [firstName, lastName, email, pwd, matchPwd]);

    useEffect(() => {
        setReadyToSubmit(validFirstName && validLastName && validEmail && validPwd && validMatchPwd && readRules)
    }, [validFirstName, validLastName, validEmail, validPwd, validMatchPwd, readRules])


    const handleSubmit = async (e: any) => {
        e.preventDefault()

        // If there are errors with the form
        if (!readyToSubmit) return setErrMsg("We couldn't register you. Please check your information and try again")
        try {
            setReadyToSubmit(false)
            const response: RegisterResponse = await axios.post(REGISTER_URL, JSON.stringify({
                email: email,
                first_name: firstName,
                last_name: lastName,
                password: pwd
            }), {
                headers: {
                    'Content-Type': 'Application/json',
                },
                withCredentials: true
            })
            if (response.data.success) {
                setContext({
                    email: response.data.email
                })
                changeModal('email_verification_code')
            }
        } catch (err:any) {
            setReadyToSubmit(true)
            if (!err?.response) {
                setErrMsg('There was a problem with Server. Please try again later.')
            }else
            // TODO: Muhammadjon should turn the errors into list
            if (Object.keys(err.response?.data).length>0){
                const errors = err.response.data || {}
                console.log(Object.keys(errors))
                setErrMsg(errors[Object.keys(errors)[0]])
            }else{
                setErrMsg('Login Failed. Please try again later.')
            }
        }
    }

    return (
        <>
            <h1 className='text-4xl font-bold text-center'>Let's go</h1>

            <div className="socials flex mt-4 space-x-2">
                <div onClick={() => toast('Coming soon')}
                     className="google flex-1 bg-primary text-white mx-auto py-2.5 rounded-lg font-semibold flex items-center justify-center space-x-2
                            hover:ring ring-primary--40 cursor-pointer">
                    <p><FaGoogle/></p> <p>Sign in with Google</p>
                </div>
                <div onClick={() => toast('Coming soon')}
                     className="fb w-12 bg-[#3B3E45] rounded-lg flex items-center justify-center cursor-pointer ring-[#B9B9BC] hover:ring">
                    <FaFacebookF size={16}
                                 color='#fff'/></div>
            </div>
            <div className="continue flex gap-3 mt-4 text-gray-400">
                <div className="flex-1 border-b h-3.5"></div>
                <h6>or continue with</h6>
                <div className="flex-1 border-b h-3.5"></div>
            </div>
            <form className='mt-4 space-y-4' onSubmit={handleSubmit}>
                <div ref={errRef} aria-live='assertive'
                     className={`bg-red-200 text-red-800 rounded-lg px-5 py-4 ${!errMsg && 'hidden'}`}>
                    <h3>{errMsg}</h3>
                </div>
                <div className="flex space-x-3">
                    <Input title='First name'
                           innerRef={firstNameRef}
                           isValid={validFirstName}
                           errorMessage={errorMessageFirstName}
                           value={firstName}
                           type='text'
                           placeholder='First name'
                           onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
                           required
                           aria-invalid={validFirstName ? 'false' : 'true'}
                           onFocus={() => setFocusFirstName(true)}
                           onBlur={() => setFocusFirstName(false)}
                           is_focused={focusFirstName}
                    />
                    <Input title='Last name'
                           innerRef={lastNameRef}
                           isValid={validLastName}
                           errorMessage={errorMessageLastName}
                           value={lastName}
                           autoComplete='false'
                           type='text'
                           placeholder='Last name'
                           onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
                           required
                           aria-invalid={validLastName ? 'false' : 'true'}
                           onFocus={() => setFocusLastName(true)}
                           onBlur={() => setFocusLastName(false)}
                           is_focused={focusLastName}
                    />

                </div>
                <Input title='Email'
                       innerRef={emailRef}
                       isValid={validEmail}
                       errorMessage={errorMessageEmail}
                       value={email}
                       autoComplete='false'
                       type='text'
                       placeholder='Email'
                       onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                       required
                       aria-invalid={validEmail ? 'false' : 'true'}
                       onFocus={() => setFocusEmail(true)}
                       onBlur={() => setFocusEmail(false)}
                       is_focused={focusEmail}
                />
                <div className="flex space-x-3">
                    <Input title='Password'
                           innerRef={pwdRef}
                           isValid={validPwd}
                           errorMessage={errorMessagePwd}
                           value={pwd}
                           autoComplete='false'
                           type='password'
                           placeholder='Password'
                           onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPwd(e.target.value)}
                           required
                           aria-invalid={validPwd ? 'false' : 'true'}
                           onFocus={() => setFocusPwd(true)}
                           onBlur={() => setFocusPwd(false)}
                           is_focused={focusPwd}
                    />
                    <Input title='Confirm Password'
                           innerRef={matchPwdRef}
                           isValid={validMatchPwd}
                           errorMessage={errorMessageMatchPwd}
                           value={matchPwd}
                           autoComplete='false'
                           type='password'
                           placeholder='Confirm Password'
                           onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMatchPwd(e.target.value)}
                           required
                           aria-invalid={validMatchPwd ? 'false' : 'true'}
                           onFocus={() => setFocusMatchPwd(true)}
                           onBlur={() => setFocusMatchPwd(false)}
                           is_focused={focusMatchPwd}
                    />
                </div>

                <div className="div flex items-start cursor-pointer space-x-2 text-gray-600">
                    <input
                        ref={privacyRef}
                        type="checkbox"
                        id='policyRead'
                        className='mt-1'
                        checked={readRules}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setReadRules(e.target.checked)}
                    />
                    <label htmlFor='policyRead'>I've read and accept <Link to="">Terms of Service</Link> and <Link
                        to="">Privacy Policy</Link></label>
                </div>
                <div className="pt-2">
                    <button disabled={!readyToSubmit}
                            className={`${readyToSubmit ? 'blue-btn' : 'disabled-submit-btn'}`}>Sign up
                    </button>
                </div>
            </form>
            <h4 className='mt-6 text-center text-gray-700'>Already have an account? <span
                onClick={() => changeModal('login')}
                className='link'>Sign in</span>
            </h4>
        </>
    );
};