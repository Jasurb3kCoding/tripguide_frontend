// @flow
import * as React from 'react';
import {FaFacebookF, FaGoogle} from "react-icons/fa";
import {Input} from "../Input/Input";
import {Link} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import './style.css'

type Props = {
    changeModal: any
};


export const ForgetCode = ({changeModal}: Props) => {
    const CODE_LENGTH = 4
    const [digits, setDigits] = useState('12');
    const active = digits.indexOf(' ')

    const emailRef = useRef<HTMLInputElement>(null);
    const digitsRef = useRef<HTMLInputElement>(null);

    const submitForgetEmail = (e: any) => {
        e.preventDefault()
        const email = emailRef?.current?.value
    }

    const EnterDigit = (event: any) => {
        const new_value = event.target.value
        if (new_value.length > CODE_LENGTH) return
        setDigits(new_value)
    }

    // Focus on hidden input when opened
    const FocusInput = () => {
        digitsRef?.current?.focus()
    }


    useEffect(() => {
        FocusInput()
    });

    return (
        <div onClick={FocusInput}>
            <h1 className='text-4xl font-bold text-center'>Email Verification</h1>
            <h6 className='text-regular text-gray-400 mt-2'>We have sent the verification code to your email.</h6>
            <form className='mt-8 space-y-4' onSubmit={submitForgetEmail}>
                <div className="flex justify-between w-4/5 mx-auto">
                    {/*Filled Digits*/}
                    {digits.split('').map(digit =>
                        <div className={`digitInput filled`}>{digit}</div>
                    )}
                    {/*Active Digit*/}
                    {digits.length < CODE_LENGTH && <div className={`digitInput active`}></div>}
                    {/*    Not-filled Not-active digits*/}
                    {CODE_LENGTH - digits.length - 1 > 0 && [...Array(CODE_LENGTH - digits.length - 1)].map(_ =>
                        <div className={`digitInput`}></div>
                    )}
                </div>
                <div className="pt-2">
                    <input type="text" ref={digitsRef} className='h-0 w-0' value={digits} onChange={EnterDigit}/>
                    <button className='blue-btn' onClick={() => changeModal('forgetCode')}>Verify Account</button>
                </div>
                <h4 className='pt-2 text-center text-gray-700'>Don't Recieve Code? <span className='link'>Resend</span>
                </h4>
            </form>

        </div>
    );
};