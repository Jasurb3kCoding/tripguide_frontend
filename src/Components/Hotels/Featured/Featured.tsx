// @flow 
import * as React from 'react';
import './style.css'
import {FeaturedCard} from "../Cards/FeaturedCard/FeaturedCard";
const featured_cities = [
    {
        image: '/media/Hotels/City/img1.png',
        rating: 3.5,
        title: 'Batu, East Java',
        number_of_destinations: 86,
        url: '/location/Batu',
    },
    {
        image: '/media/Hotels/City/img2.png',
        rating: 3.5,
        title: 'Kuta',
        number_of_destinations: 54,
        url: '/location/Kuta',
    },
    {
        image: '/media/Hotels/City/img3.png',
        rating: 3.5,
        title: 'Surabaya, East Java',
        number_of_destinations: 14,
        url: '/location/Surabaya',
    },
    {
        image: '/media/Hotels/City/img4.png',
        rating: 3.5,
        title: 'Malang, London',
        number_of_destinations: 112,
        url: '/location/Malang',
    },
    {
        image: '/media/Hotels/City/img5.png',
        rating: 3.5,
        title: 'Deing, France',
        number_of_destinations: 2,
        url: '/location/Deing',
    },
    {
        image: '/media/Hotels/City/img6.png',
        rating: 3.5,
        title: 'Nusa Dua, Lombok',
        number_of_destinations: 112,
        url: '/location/NusaDua',
    }
]

type Props = {};
export const Featured = (props: Props) => {
    return (
        <div className='layout mt-12'>
            <h1 className='section-title'>Featured<br className='br-until-md'/> Destnations</h1>
            {/*TODO: Your country instead of Indonesia*/}
            <p className='section-description'>Popular destinations open to visit to visitors from Indonesia</p>
            <div className="grid grid-cols-1 grid-rows-6 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-3 gap-4 mt-5">
                {featured_cities.map((featured)=>
                    <FeaturedCard data={featured}/>
                )}
            </div>
        </div>
    );
};