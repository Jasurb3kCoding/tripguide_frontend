// @flow 
import * as React from 'react';
import {useEffect, useState} from "react";
import {Login} from "./Login/Login";
import {Register} from "./Register/Register";
import {Forget} from "./Forget/Forget";
import {EmailVerificationCode} from "./EmailVerificationCode/EmailVerificationCode";
import {AiOutlinePlus} from "react-icons/ai";
import {PasswordResetLinkSent} from "./PasswordResetLinkSent/PasswordResetLinkSent";
import './style.css'

interface Modal {
    name: string,
    element: any
}

type Props = {
    hideAuthComponent: any
};
export const Auth = ({hideAuthComponent}: Props) => {
    // Prevent scrolling when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'visible';
        };
    });

    const [activePage, setActivePage] = useState('login');
    const [context, setContext] = useState({})
    const modals: Modal[] = [
        {
            name: 'login',
            element: <Login changeModal={setActivePage} context={context} setContext={setContext}/>
        },
        {
            name: 'register',
            element: <Register changeModal={setActivePage} context={context} setContext={setContext}/>
        },
        {
            name: 'forget',
            element: <Forget changeModal={setActivePage} context={context} setContext={setContext}/>
        },
        {
            name: 'email_verification_code',
            element: <EmailVerificationCode changeModal={setActivePage} context={context} setContext={setContext}/>
        },
        {
            name: 'password_reset_link_sent',
            element: <PasswordResetLinkSent changeModal={setActivePage} context={context} setContext={setContext}/>
        }
    ]
    const activePageElement = modals.find(modal => modal.name === activePage)

    return (
        <div onClick={hideAuthComponent} className='w-full h-screen fixed top-0 left-0 z-10 text-sm '>
            <div className="relative w-full h-full flex items-center justify-center">
                {/*Black Screen behind the Modal*/}
                <div
                    className="bg-black opacity-20 w-full h-full absolute top-0 left-0 -z-10"></div>
                <div
                    className="modal bg-white px-9 lg:px-14 pt-10 lg:pt-14 pb-5 lg:pb-10 w-96 lg:w-112 rounded-2xl relative"
                    onClick={event => event.stopPropagation()}>
                    <div onClick={hideAuthComponent}
                         className="w-10 h-10 absolute -right-3 -top-3 bg-gray-200 flex items-center justify-center rotate-45 rounded-full border border-gray-300 cursor-pointer">
                        <AiOutlinePlus size={25}/>
                    </div>
                    {activePageElement?.element}
                </div>
            </div>
        </div>
    );
};