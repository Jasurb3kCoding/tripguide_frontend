// @flow 
import * as React from 'react';
import {Hero} from "../../Components/Hotels/Home/Hero/Hero";
import {BestPlaces} from "../../Components/Hotels/BestPlaces/BestPlaces";
import {Featured} from "../../Components/Hotels/Featured/Featured";
import {ExploreTheWorld} from "../../Components/Hotels/ExploreTheWorld/ExploreTheWorld";

type Props = {
    
};
export const Home = (props: Props) => {
    return (
        <div>
            <Hero/>
            <BestPlaces/>
            <Featured/>
            <ExploreTheWorld/>
        </div>
    );
};