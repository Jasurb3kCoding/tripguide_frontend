// @flow
import * as React from 'react';
import {Input} from "../Input/Input";
import {useEffect, useRef, useState} from "react";
import {validateEmail} from "../validators";


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

    const [readyToSubmit, setReadyToSubmit] = useState(false);

    useEffect(() => {
        setReadyToSubmit(validEmail)
    }, [validEmail])

    useEffect(() => {
        const validation = validateEmail(email)
        setValidEmail(validation.is_valid)
        setErrorMessageEmail(validation.message)
    }, [email]);

    const submitForgetEmail = (e: any) => {
        e.preventDefault()
        const email = emailRef?.current?.value

        changeModal('password_reset_link_sent')
    }
    return (
        <>
            <h1 className='text-4xl font-bold text-center'>Password recovery</h1>
            <h6 className='text-regular text-center text-gray-400 mt-2'>Enter your email to recover your password</h6>
            <form className='mt-8 space-y-4' onSubmit={submitForgetEmail}>
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
                <div className="pt-2">
                    <button className={`${readyToSubmit ? 'blue-btn' : 'disabled-submit-btn'}`}>Recover Email</button>
                </div>
            </form>

        </>
    );
};