// @flow 
import * as React from 'react';
import {RefObject} from "react";

type Props = {
    title: string,
    placeholder: string,
    innerRef: RefObject<HTMLInputElement> | null,
    type: string | 'text'
};
export const Input = ({title, innerRef, placeholder, type}: Props) => {
    return (
        <div className='w-full'>
            <h6 className=''>{title}</h6>
            <input ref={innerRef} placeholder={placeholder} type={type} className='cursor-text mt-1 bg-input-gray w-full outline-none py-2.5 px-4 rounded-lg'/>
        </div>
    );
};