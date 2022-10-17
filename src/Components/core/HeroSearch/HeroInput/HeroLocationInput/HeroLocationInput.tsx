// @flow
import * as React from 'react';

type Props = {};
export const HeroLocationInput = (props: Props) => {
    return (
        <div className='relative col-span-1 w-full'>
            <h2 className='inner-text'>Location</h2>
            <input className='hero-input' placeholder='Where are you headed?'/>
        </div>
    );
};