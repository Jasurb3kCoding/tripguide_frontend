// @flow 
import * as React from 'react';
import {Hero} from "../../Components/Hotels/Home/Hero/Hero";
import {HeroSearch} from "../../Components/core/HeroSearch/HeroSearch";

type Props = {
    
};
export const Home = (props: Props) => {
    return (
        <div>
            <Hero/>
            <HeroSearch/>
        </div>
    );
};