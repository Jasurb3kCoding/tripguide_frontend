// @flow 
import * as React from 'react';
import {Navigate, useParams} from "react-router-dom";
import {Input} from "../../Components/core/Auth/Input/Input";
import {useEffect, useRef, useState} from "react";
import {validatePassword} from "../../Components/core/Auth/validators";
import axios from "../../Api/axios";
import useAuth from "../../Hooks/useAuth";

type Props = {};
export const ResetPassword = (props: Props) => {
    const params = useParams()
    const uid = params.uid
    const {recoverPassword} = useAuth()

    const pwdRef = useRef<HTMLInputElement>(null);
    const matchPwdRef = useRef<HTMLInputElement>(null);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [focusPwd, setFocusPwd] = useState(false);
    const [errorMessagePwd, setErrorMessagePwd] = useState('');


    const [matchPwd, setMatchPwd] = useState('');
    const [validMatchPwd, setValidMatchPwd] = useState(false);
    const [focusMatchPwd, setFocusMatchPwd] = useState(false);
    const errorMessageMatchPwd = "Passwords doesn't match"

    const [readyToSubmit, setReadyToSubmit] = useState(false);
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        const validation = validatePassword(pwd)
        setValidPwd(validation.is_valid)
        setErrorMessagePwd(validation.message)

        setValidMatchPwd(pwd === matchPwd)
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('')
    }, [pwd, matchPwd]);

    useEffect(() => {
        setReadyToSubmit(validPwd && validMatchPwd)
    }, [validPwd, validMatchPwd])


    if (!uid) return Navigate({to: '/'})


    const handleSubmit = async (e: any) => {
        e.preventDefault()
        setReadyToSubmit(false)
        // If there are errors with the form
        if (!readyToSubmit) return setErrMsg("Please check your passwords and try again.")
        const result = await recoverPassword(uid, pwd)
        setErrMsg(result?.response?.data?.message)
        setReadyToSubmit(true)
    }


    return (
        <div className='layout'>
            <div className="py-10">
                <div className=" w-1/4 mx-auto ">
                    <h1 className='text-2xl font-bold'>Reset your password</h1>
                    <form className='mt-5' onSubmit={handleSubmit}>
                        <div aria-live='assertive'
                             className={`bg-red-200 text-red-800 rounded-lg px-5 py-4 my-2 ${!errMsg && 'hidden'}`}>
                            <h3>{errMsg}</h3>
                        </div>
                        <div>
                            <div className="space-y-3">
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
                        </div>
                        <div className="pt-2 mt-4">
                            <button disabled={!readyToSubmit}
                                    className={`${readyToSubmit ? 'blue-btn' : 'disabled-submit-btn'}`}>Sign up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};