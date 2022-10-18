// @flow
import * as React from 'react';

type Props = {
    changeModal: any
    context: any
    setContext: any
};


export const PasswordResetLinkSent = ({changeModal}: Props) => {
    return (
        <div>
            <h1 className='Auth-title'>Check your email</h1>
            <h6 className='text-regular text-gray-400 mt-2'>An email with the link to reset your password has been sent
                to your email.</h6>
        </div>
    );
};