// @flow 
import * as React from 'react';
import {HeroSearch} from "../../../core/HeroSearch/HeroSearch";

type Props = {};
export const Hero = (props: Props) => {
    return (
        <div className='hero relative w-full h-[500px] bg-cover bg-no-repeat bg-center z-0 py-10 lg:py-32 w-full mb-28 md:mb-32'>
            <div className="text layout">
                <h1 className='text-[44px] lg:text-5xl font-bold lg:leading-snug font-poppins text-black w-full lg:w-1/3'>Book
                    With Us And Enjoy Your Journey!</h1>
            </div>
            {/*Blue layer*/}
            <div className="background absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary -z-10">
                <img className='w-full h-full object-cover' src="/media/Hotels/hero.jpg" alt=""/>
                <div
                    className="blue absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-400 opacity-40"></div>
            </div>
            <HeroSearch/>
        </div>
    );
};