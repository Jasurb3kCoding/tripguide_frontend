// @flow
import * as React from 'react';
import {Input} from "../Input/Input";
import {useEffect, useRef, useState} from "react";
import {validateEmail} from "../validators";
import axios from "../../../../Api/axios";


type Props = {
    changeModal: any
    context: any
    setContext: any
};


export const Forget = ({changeModal, context, setContext}: Props) => {
    const emailRef = useRef<HTMLInputElement>(null);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [focusEmail, setFocusEmail] = useState(false);
    const [errorMessageEmail, setErrorMessageEmail] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        setErrMsg('')
    }, [email]);

    const [readyToSubmit, setReadyToSubmit] = useState(false);

    useEffect(() => {
        setReadyToSubmit(validEmail)
    }, [validEmail])

    useEffect(() => {
        const validation = validateEmail(email)
        setValidEmail(validation.is_valid)
        setErrorMessageEmail(validation.message)
    }, [email]);

    useEffect(()=>{
        emailRef?.current?.focus()
    }, [])

    const submitForgetEmail = async (e: any) => {
        e.preventDefault()
        setReadyToSubmit(false)
        const GET_EMAIL_ENDPOINT = 'password-recovery-send-email/'
        if (!readyToSubmit) return setErrMsg("Please check your passwords and try again.")

        axios.post(GET_EMAIL_ENDPOINT, {
            email: email
        }).then(response => {
            changeModal('password_reset_link_sent')
        }).catch(err=>{
            setErrMsg(err.message)
            setReadyToSubmit(true)
        })

    }
    return (
        <>
            <h1 className='Auth-title'>Password recovery</h1>
            <h6 className='text-regular text-center text-gray-400 mt-2'>Enter your email to recover your password</h6>
            <form className='mt-8 space-y-4' onSubmit={submitForgetEmail}>
                <Input title='Email'
                       innerRef={emailRef}
                       isValid={validEmail}
                       errorMessage={errorMessageEmail}
                       value={email}
                       type='email'
                       placeholder='Email'
                       onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                       required
                       aria-invalid={validEmail ? 'false' : 'true'}
                       onFocus={() => setFocusEmail(true)}
                       onBlur={() => setFocusEmail(false)}
                       is_focused={focusEmail}
                />
                <div className="pt-2">
                    <button className={`${readyToSubmit ? 'blue-btn' : 'disabled-submit-btn'}`}>Recover Email</button>
                </div>
            </form>

        </>
    );
};