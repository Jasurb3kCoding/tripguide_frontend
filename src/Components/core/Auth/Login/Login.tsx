// @flow 
import * as React from 'react';
import {FaFacebookF, FaGoogle} from "react-icons/fa";
import {Input} from "../Input/Input";
import {useEffect, useRef, useState} from "react";
import {toast} from "react-toastify";
import {validateEmail, validatePassword} from "../validators";

type Props = {
    changeModal: any
};


export const Login = ({changeModal}: Props) => {

    const emailRef = useRef<HTMLInputElement>(null);
    const pwdRef = useRef<HTMLInputElement>(null);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [focusEmail, setFocusEmail] = useState(false);
    const [errorMessageEmail, setErrorMessageEmail] = useState('');


    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [focusPwd, setFocusPwd] = useState(false);
    const [errorMessagePwd, setErrorMessagePwd] = useState('');

    useEffect(() => {
        const validation = validateEmail(email)
        setValidEmail(validation.is_valid)
        setErrorMessageEmail(validation.message)
    }, [email]);

    useEffect(() => {
        const validation = validatePassword(pwd)
        setValidPwd(validation.is_valid)
        setErrorMessagePwd(validation.message)
    }, [pwd])

    const submitLogin = (e: any) => {
        e.preventDefault()

        const email = emailRef?.current?.value
        const password = pwdRef?.current?.value
    }

    return (
        <>
            <h1 className='text-4xl font-bold text-center'>Welcome Back!</h1>

            <div className="socials flex mt-4 space-x-2">
                <div onClick={() => toast('Coming soon')}
                     className="google flex-1 bg-primary text-white mx-auto py-3 rounded-lg font-semibold flex items-center justify-center space-x-2
                            hover:ring ring-primary--40 cursor-pointer">
                    <p><FaGoogle/></p> <p>Sign in with Google</p>
                </div>
                <div onClick={() => toast('Coming soon')}
                     className="fb w-12 bg-[#3B3E45] rounded-lg flex items-center justify-center cursor-pointer ring-[#B9B9BC] hover:ring">
                    <FaFacebookF size={20}
                                 color='#fff'/></div>
            </div>
            <div className="continue flex gap-3 mt-4 text-gray-400">
                <div className="flex-1 border-b h-3.5"></div>
                <h6>or continue with</h6>
                <div className="flex-1 border-b h-3.5"></div>
            </div>
            <form className='mt-4 space-y-4' onSubmit={submitLogin}>
                <Input title='Email'
                       innerRef={emailRef}
                       isValid={validEmail}
                       errorMessage={errorMessageEmail}
                       value={email}
                       autoComplete={false}
                       type='text'
                       placeholder='Email'
                       onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                       required
                       aria-invalid={validEmail ? 'false' : 'true'}
                       onFocus={() => setFocusEmail(true)}
                       onBlur={() => setFocusEmail(false)}
                       is_focused={focusEmail}
                />
                <Input title='Password'
                       innerRef={pwdRef}
                       isValid={validPwd}
                       errorMessage={errorMessagePwd}
                       value={pwd}
                       autoComplete={false}
                       type='password'
                       placeholder='Password'
                       onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPwd(e.target.value)}
                       required
                       aria-invalid={validPwd ? 'false' : 'true'}
                       onFocus={() => setFocusPwd(true)}
                       onBlur={() => setFocusPwd(false)}
                       is_focused={focusPwd}
                />
                <p onClick={() => changeModal('forget')}
                   className='cursor-pointer text-primary text-right text-md'>Forgot your
                    password?</p>
                <div className="pt-2">
                    <button className='blue-btn'>Sign in</button>
                </div>
            </form>
            <h4 className='mt-6 text-center text-gray-700'>Don't have an account? <span
                onClick={() => changeModal('register')}
                className='link'>Sign Up</span>
            </h4>
        </>
    );
};