// @flow 
import * as React from 'react';

type Props = {};
export const SubscribeBanner = (props: Props) => {
    return (
        <div className='absolute text-white inset-x-0 rounded-xl bg-primary px-10 lg:px-24 py-10 md:py-20 top-0 -translate-y-1/2'>
            <div className="flex flex-col lg:flex-row">
                <div className="text flex-1">
                    <h1 className='text-2xl lg:text-4xl font-bold'>Save time, save money!</h1>
                    <p className='opacity-75 mt-2 lg:mt-4'>Sign up and we'll send the best deals to you.</p>
                </div>
                <div className="email flex-1 flex items-end lg:pl-20 mt-4">
                    <div className="relative w-full">
                        <input placeholder='Enter Email'
                               className="w-full rounded-md py-4 md:py-5 px-6 text-black outline-none"></input>
                        <button
                            className='absolute bg-black rounded-md py-2 px-4 md:py-3 md:px-6 font-semibold right-3 top-1/2 -translate-y-1/2'>Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};