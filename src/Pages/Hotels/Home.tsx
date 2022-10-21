// @flow 
import * as React from 'react';
import {Hero} from "../../Components/Hotels/Home/Hero/Hero";
import {HeroSearch} from "../../Components/core/HeroSearch/HeroSearch";
import {BestPlaces} from "../../Components/Hotels/BestPlaces/BestPlaces";
import {Featured} from "../../Components/Hotels/Featured/Featured";

type Props = {
    
};
export const Home = (props: Props) => {
    return (
        <div>
            <Hero/>
            <BestPlaces/>
            <Featured/>
        </div>
    );
};