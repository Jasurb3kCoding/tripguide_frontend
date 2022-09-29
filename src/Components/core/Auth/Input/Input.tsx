// @flow 
import * as React from 'react';
import {RefObject, useRef, useState} from "react";
import {BiError} from "react-icons/bi";

type Props = {
    title: string,
    innerRef: RefObject<HTMLInputElement> | null,
    isValid: boolean,
    errorMessage?: string,
    is_focused: boolean,
    [x: string]: any
};
export const Input = ({title, innerRef, isValid, errorMessage, is_focused, ...rest}: Props) => {
    return (
        <div className='w-full'>
            <h6 className='text-sm'>{title}</h6>
            <input {...rest} ref={innerRef}
                   className='cursor-text mt-1 bg-input-gray w-full outline-none py-2.5 px-4 rounded-lg'/>
            {!isValid && rest.value && !is_focused &&
                <p className='error text-red-500 mt-1'><BiError className='inline mr-1'/>{errorMessage}</p>
            }
        </div>
    );
};