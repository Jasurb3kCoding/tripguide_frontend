// @flow
import * as React from 'react';
import {FaFacebookF, FaGoogle} from "react-icons/fa";
import {Input} from "../Input/Input";
import {useRef} from "react";
import {toast} from "react-toastify";
import {Link} from "react-router-dom";

type Props = {
    changeModal: any
};


export const Register = ({changeModal}: Props) => {

    const firstNameRef = useRef<HTMLInputElement>(null);
    const lastNameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const submitRegister = (e: any) => {
        e.preventDefault()

        const firstName = firstNameRef?.current?.value
        const lastName = lastNameRef?.current?.value
        const email = emailRef?.current?.value
        const password = passwordRef?.current?.value
    }

    return (
        <>
            <h1 className='text-4xl font-bold text-center'>Let's go</h1>

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
            <form className='mt-4 space-y-4' onSubmit={submitRegister}>

                <div className="flex space-x-3">
                    <Input title='First name' innerRef={firstNameRef} type='text' placeholder='First name'/>
                    <Input title='Last name' innerRef={lastNameRef} type='text' placeholder='Last name'/>
                </div>
                <Input title='Email' innerRef={emailRef} type='email' placeholder='Enter your email'/>
                <Input title='Password' innerRef={passwordRef} type='password' placeholder='Enter your Password'/>

                <div className="div flex items-start cursor-pointer space-x-2">
                    <input type="checkbox" id='policyRead' className='mt-2'/>
                    <label htmlFor='policyRead'>I've read and accept <Link to="">Terms of Service</Link> and <Link to="">Privacy Policy</Link></label>
                </div>
                <div className="pt-2">
                    <button className='blue-btn'>Sign in</button>
                </div>
            </form>
            <h4 className='mt-6 text-center text-gray-700'>Already have an account? <span
                onClick={() => changeModal('login')}
                className='link'>Sign in</span>
            </h4>
        </>
    );
};