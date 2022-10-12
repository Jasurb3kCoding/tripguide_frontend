// @flow 
import * as React from 'react';

type Props = {

};
export const Hero = (props: Props) => {
    return (
        <div className='hero relative w-full h-[500px] bg-cover bg-no-repeat bg-center z-0 py-32 w-full'>
            <div className="text layout">
                <h1 className='text-5xl font-black leading-snug font-[Tahoma] text-black'>Book With Us<br/>And Enjoy Your<br/>Journey!</h1>
            </div>
            {/*Blue layer*/}
            <div className="background absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary -z-10">
                <img className='w-full h-full object-cover' src="/media/Hotels/hero.jpg" alt=""/>
                <div className="blue absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-400 opacity-40"></div>
            </div>
        </div>
    );
};