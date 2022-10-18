// @flow
import * as React from 'react';

type Props = {};
export const HeroGuestsInput = (props: Props) => {
    return (
        <div className='relative col-span-1 w-full'>
            <h2 className='inner-text'>1 Guest</h2>
            <input className='hero-input' placeholder='Where are you headed?'/>
        </div>
    );
};