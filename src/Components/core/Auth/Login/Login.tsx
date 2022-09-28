// @flow 
import * as React from 'react';
import {FaFacebookF, FaGoogle} from "react-icons/fa";
import {Input} from "../Input/Input";
import {useRef} from "react";
import {toast} from "react-toastify";

type Props = {
    changeModal: any
};


export const Login = ({changeModal}: Props) => {

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const submitLogin = (e: any) => {
        e.preventDefault()

        const email = emailRef?.current?.value
        const password = passwordRef?.current?.value
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
                <Input title='Email address' innerRef={emailRef} type='email' placeholder='Enter your email'/>
                <Input title='Password' innerRef={passwordRef} type='password' placeholder='Enter your Password'/>
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