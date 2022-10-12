// @flow 
import * as React from 'react';
import useAuth from "../../../Hooks/useAuth";
import {Link} from "react-router-dom";
import {AiOutlineUser} from "react-icons/ai";

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
                //If user is logged in
                ?
                <Link to='/profile'  className='flex space-x-4 items-center'>
                    <div
                         className='w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center border cursor-pointer border-transparent hover:border-gray-500'>
                        {user.profile_photo
                            //If user has pic
                            ?
                            <img className='object-contain rounded-full' src={user.profile_photo} alt=""/>
                            :
                            <div className='font-bold text-gray-600'>{user?.first_name?.charAt(0)}{user?.last_name?.charAt(0)}</div>
                        }
                    </div>
                </Link>
                :
                //If user is not logged in
                <div onClick={showAuthComponent}
                     className='w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center border cursor-pointer border-transparent hover:border-gray-500'>
                    <AiOutlineUser size={19} className='text-gray-500'/>
                </div>
            }
        </div>
    );
};