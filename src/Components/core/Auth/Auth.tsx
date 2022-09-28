// @flow 
import * as React from 'react';
import {useEffect, useState} from "react";
import {Login} from "./Login/Login";
import {Register} from "./Register/Register";
import {Forget} from "./Forget/Forget";
import {ForgetCode} from "./ForgetCode/ForgetCode";

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


    const [activePage, setActivePage] = useState('forgetCode');

    const modals: Modal[] = [
        {
            name: 'login',
            element: <Login changeModal={setActivePage}/>
        },
        {
            name: 'register',
            element: <Register changeModal={setActivePage}/>
        },
        {
            name: 'forget',
            element: <Forget changeModal={setActivePage}/>
        },
        {
            name: 'forgetCode',
            element: <ForgetCode changeModal={setActivePage}/>
        }
    ]
    const activePageElement = modals.find(modal => modal.name === activePage)

    return (
        <div onClick={hideAuthComponent} className='w-full h-screen fixed top-0 left-0 z-10'>
            {/*Black Screen behind the Modal*/}
            <div className="relative w-full h-full flex items-center justify-center">
                <div
                    className="bg-black opacity-10 w-full h-full absolute top-0 left-0 -z-10"></div>
                <div className="modal bg-white px-14 pt-14 pb-10 w-112 rounded-2xl"
                     onClick={event => event.stopPropagation()}>
                    {activePageElement?.element}
                </div>
            </div>
        </div>
    );
};