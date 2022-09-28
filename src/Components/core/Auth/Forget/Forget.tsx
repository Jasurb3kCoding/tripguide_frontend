// @flow
import * as React from 'react';
import {FaFacebookF, FaGoogle} from "react-icons/fa";
import {Input} from "../Input/Input";
import {Link} from "react-router-dom";
import {useRef} from "react";

type Props = {
    changeModal: any
};


export const Forget = ({changeModal}: Props) => {
    const emailRef = useRef<HTMLInputElement>(null);
    const submitForgetEmail = (e: any) => {
        e.preventDefault()
        const email = emailRef?.current?.value
    }
    return (
        <>
            <h1 className='text-4xl font-bold text-center'>Password recovery</h1>
            <h6 className='text-regular text-center text-gray-400 mt-2'>Enter your email to recover your password</h6>
            <form className='mt-8 space-y-4' onSubmit={submitForgetEmail}>
                <Input title='Email' innerRef={emailRef} type='email' placeholder='Enter your email'/>
                <div className="pt-2">
                    <button className='blue-btn' onClick={()=>changeModal('forgetCode')}>Recover Email</button>
                </div>
            </form>

        </>
    );
};