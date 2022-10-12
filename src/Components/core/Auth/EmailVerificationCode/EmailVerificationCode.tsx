// @flow
import * as React from 'react';
import {useEffect, useRef, useState} from "react";
import './style.css'
import axios from "../../../../Api/axios";
import useAuth from "../../../../Hooks/useAuth";

type Props = {
    changeModal: any
    context: any
    setContext: any
};


export const EmailVerificationCode = ({changeModal, context, setContext}: Props) => {
    const CODE_LENGTH = 4
    const [digits, setDigits] = useState('');
    const [isElementActive, setIsElementActive] = useState(false);
    const [isRequestSent, setIsRequestSent] = useState(false)
    const [errMsg, setErrMsg] = useState<string | undefined>('')

    const emailRef = useRef<HTMLInputElement>(null);
    const digitsRef = useRef<HTMLInputElement>(null);

    const {verifyUser} = useAuth()

    const verifyCode = async (email:string, code:string) => {
        setIsRequestSent(true)
        const {success, message} = await verifyUser(email, code)
        if (!success){
            setIsRequestSent(false)
            setDigits('')
            setErrMsg(message)
        }
    }

    const EnterDigit = (event: any) => {
        const new_value = event.target.value
        const new_char = new_value.slice(-1)
        if (new_value.length > CODE_LENGTH) return
        if (!/(?=.*\d)/.test(new_char) && new_value !== '') return
        setDigits(new_value)
    }

    useEffect(() => {
        if (digits.length !== 4) return
        const email = context.email
        const code = digits
        verifyCode(email, code)
    }, [digits])
    // Focus on hidden input when opened
    const FocusInput = () => {
        digitsRef?.current?.focus()
    }


    useEffect(() => {
        FocusInput()
    });

    return (
        <div onClick={FocusInput} aria-disabled={!isElementActive}>
            <h1 className='text-4xl font-bold text-center'>Email Verification</h1>
            <h6 className='text-regular text-gray-400 mt-2'>We have sent the verification code to your
                email {context?.email}</h6>
            <form className='mt-8 space-y-4'>
                <div
                     className={`bg-red-200 text-red-800 rounded-lg px-5 py-4 ${!errMsg && 'hidden'}`}>
                    <h3>{errMsg}</h3>
                </div>
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