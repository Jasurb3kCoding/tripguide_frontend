// @flow 
import * as React from 'react';
import useAuth from "../../../Hooks/useAuth";
import {Link} from "react-router-dom";
import {log} from "util";

type Props = {
    showAuthComponent: any
};
export const Header = ({showAuthComponent}: Props) => {
    const {user, logoutUser} = useAuth()
    return (
        <div className='w-full bg-white h-16 flex items-center px-28 shadow-b-header justify-between'>
            <Link to='/' className="logo-wrapper w-36">
                <img src="/media/core/logo-transparent.png" alt=""/>
            </Link>
            {user
                ?
                <div className='flex space-x-4 items-center'>
                    <div className="">
                        {user?.full_name}
                    </div>
                    <div onClick={logoutUser}
                         className='border border-gray-400 py-2 px-4 rounded hover:bg-gray-50 cursor-pointer'>Log Out
                    </div>
                </div>
                :
                <div onClick={showAuthComponent}
                     className='border border-gray-400 py-2 px-4 rounded hover:bg-gray-50 cursor-pointer'>LogIn
                </div>
            }
        </div>
    );
};