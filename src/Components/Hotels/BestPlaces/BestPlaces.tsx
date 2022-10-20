// @flow 
import * as React from 'react';
import './style.css'
import {DestinationsCard} from "../Cards/DestinationsCard/DestinationsCard";

const locations = [
    {
        image: '/media/Hotels/Locations/img1.webp',
        location: 'Batu, East Java',
        number_of_destinations: 86,
        url: '/location/Batu',
    },
    {
        image: '/media/Hotels/Locations/img2.jpg',
        location: 'Kuta',
        number_of_destinations: 54,
        url: '/location/Kuta',
    },
    {
        image: '/media/Hotels/Locations/img3.webp',
        location: 'Surabaya, East Java',
        number_of_destinations: 14,
        url: '/location/Surabaya',
    },
    {
        image: '/media/Hotels/Locations/img4.png',
        location: 'Malang, London',
        number_of_destinations: 112,
        url: '/location/Malang',
    },
    {
        image: '/media/Hotels/Locations/img5.png',
        location: 'Deing, France',
        number_of_destinations: 2,
        url: '/location/Deing',
    },
    {
        image: '/media/Hotels/Locations/img6.png',
        location: 'Nusa Dua, Lombok',
        number_of_destinations: 112,
        url: '/location/NusaDua',
    },
    {
        image: '/media/Hotels/Locations/img7.png',
        location: 'Badung, China',
        number_of_destinations: 12,
        url: '/location/Badung',
    },
    {
        image: '/media/Hotels/Locations/img8.png',
        location: 'Wakatobi, Korea',
        number_of_destinations: 99,
        url: '/location/Wakatobi',
    },
]

type Props = {};

export const BestPlaces = (props: Props) => {
    return (
        <div className='text-center w-full'>
            <div className="layout">
                <h1 className='section-title'>Search a best place<br className='br-until-md'/> in the world</h1>
                <p className='section-description'>Looking for a place for a vacation? We are here to guide you and ease
                    your trips in advance.</p>
            </div>
            <div
                className="ml-[8.333333%] md:mx-auto md:w-10/12 places block md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10 overflow-x-scroll overflow-y-hidden md:overflow-visible gap-4 h-52 md:h-fit whitespace-nowrap">
                {locations.map(location =>
                    <DestinationsCard location={location}/>
                )}
            </div>
        </div>
    );
};