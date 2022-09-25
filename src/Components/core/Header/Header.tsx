// @flow 
import * as React from 'react';

type Props = {
    showAuthComponent: any
};
export const Header = ({showAuthComponent}: Props) => {
    return (
        <div className='w-full bg-white h-16 flex items-center px-28 shadow-b-header justify-between'>
            <div className="logo-wrapper w-36">
                <img src="/media/core/logo-transparent.png" alt=""/>
            </div>
            <div onClick={showAuthComponent} className='border border-gray-400 py-2 px-4 rounded hover:bg-gray-50 cursor-pointer'>LogIn</div>
        </div>
    );
};