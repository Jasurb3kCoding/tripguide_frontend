// @flow
import * as React from 'react';
import {FaFacebookF, FaGoogle} from "react-icons/fa";

type Props = {};
export const Forget = (props: Props) => {
    return (
        <div className="modal bg-white px-10 py-16 w-112 rounded-xl" onClick={event => event.stopPropagation()}>
            <h1 className='text-4xl font-bold text-center'>Forget!</h1>
            <div className="socials flex mt-4 space-x-2">
                <div
                    className="google flex-1 bg-primary text-white mx-auto py-3 rounded-lg font-semibold flex items-center justify-center space-x-2
                            hover:ring ring-primary--40 cursor-pointer">
                    <p><FaGoogle/></p> <p>Sign in with Google</p>
                </div>
                <div
                    className="fb w-12 bg-[#3B3E45] rounded-lg flex items-center justify-center cursor-pointer ring-[#B9B9BC] hover:ring">
                    <FaFacebookF size={20}
                                 color='#fff'/></div>
            </div>
            <div className="continue flex gap-3 mt-4 text-gray-400">
                <div className="flex-1 border-b h-3.5"></div>
                <h6>or continue with</h6>
                <div className="flex-1 border-b h-3.5"></div>
            </div>

        </div>
    );
};