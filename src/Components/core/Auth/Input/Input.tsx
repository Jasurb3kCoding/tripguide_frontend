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
        const showError = !isValid && rest.value && !is_focused
    return (
        <div className='w-full'>
            <h6 className='text-sm'>{title}</h6>
            <input {...rest} ref={innerRef}
                   className={`cursor-text mt-1 w-full outline-none py-2.5 px-4 rounded-lg border
                   ${showError ? 'border-red-500' : 'border-gray-400'}
                   ${(showError || is_focused) ? 'bg-white' : 'bg-input-gray'}
                   `}/>
            { showError &&
                <p className='error text-red-500 mt-1'><BiError className='inline mr-1'/>{errorMessage}</p>
            }
        </div>
    );
};