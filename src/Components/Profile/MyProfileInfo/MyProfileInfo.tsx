// @flow 
import * as React from 'react';
import {ProfileInfo} from "../types";
import {HiLocationMarker, HiPhone} from "react-icons/hi";
import {IoMdMail, IoMdCamera} from "react-icons/io";
import useAuth from "../../../Hooks/useAuth";
import { BiLogOut, BiEditAlt } from 'react-icons/bi';


type Props = {
    profileInfo: ProfileInfo
};
export const MyProfileInfo = () => {
        const {user, logoutUser} = useAuth()
        const {
            id,
            first_name,
            last_name,
            email,
            date_joined,
            profile_photo,
            background_photo,
            phone_number,
            address
        } = user
        return (
            <div>
                <div className="flex justify-between">
                    <h2 className='text-3xl font-semibold'>My Profile</h2>
                    <h3 onClick={logoutUser} className='border-bg-btn-red'><BiLogOut className='mr-2'/>Log Out</h3>
                </div>
                <div className="card w-full flex bg-white shadow-xl mt-6 rounded-xl">
                    <div className="bg-photo w-80 h-80 rounded-l-xl bg-gray-400 relative">
                        <img className="object-cover w-full h-full rounded-l-xl" src={background_photo} alt=""/>
                        <div
                            className="change-photo-btn ">
                            <IoMdCamera className='inline mr-2'/>Change Photo
                        </div>
                    </div>
                    <div className="info pl-20 pr-10 py-8 flex-1">
                        <div className="main-info flex justify-between items-center">
                            <div className="-ml-32 photo-name flex space-x-8 justify-center items-center">
                                <div
                                    className="relative photo-wrapper w-24 h-24 shadow-2xl rounded-full z-10 ">
                                    {user.profile_photo
                                        //If user has pic
                                        ?
                                        <img className="object-fit w-full h-full rounded-full border-red-400"
                                             src={profile_photo}
                                             alt=""/>
                                        :
                                        <div
                                            className='font-bold text-2xl bg-white w-full h-full rounded-full flex items-center justify-center text-gray-600'>
                                            <h1>{user?.first_name?.charAt(0)}{user?.last_name?.charAt(0)}</h1>
                                        </div>
                                    }
                                </div>
                                <div className="name-joined">
                                    <h5 className='font-semibold text-2xl'>{first_name} {last_name}</h5>
                                    <p className='text-gray-400'>{date_joined}</p>
                                </div>
                            </div>
                            <div className="border-bg-btn-gray">
                                <BiEditAlt className='mr-2'/>
                                Edit Profile
                            </div>
                        </div>
                        <div
                            className="secondary-info px-8 py-5 rounded-xl border border-gray-200 w-full space-y-8 text-gray-400">
                            <div className="address flex flex-1 space-x-2">
                                <div className="">
                                    <HiLocationMarker size={23}/>
                                </div>
                                <div className="">
                                    <div className="text-gray-800 font-semibold">{address}</div>
                                    <p className='mt-0.5'>Address</p>
                                </div>
                            </div>
                            <div className="contact flex">
                                <div className="address flex flex-1 space-x-2">
                                    <div className="">
                                        <HiPhone size={23}/>
                                    </div>
                                    <div className="">
                                        <div className="text-gray-800 font-semibold">{phone_number}</div>
                                        <p className='mt-0.5'>Phone Number</p>
                                    </div>
                                </div>
                                <div className="email flex flex-1 space-x-2">
                                    <div className="">
                                        <IoMdMail size={23}/>
                                    </div>
                                    <div className="">
                                        <div className="text-gray-800 font-semibold">{email}</div>
                                        <p className='mt-0.5'>Email</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
;