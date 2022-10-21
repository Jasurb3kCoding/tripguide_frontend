// @flow 
import * as React from 'react';
import {HotelMdCard} from "../Cards/HotelMdCard/HotelMdCard";

const hotels = [
    {
        image: '/media/Hotels/Hotel/img1.png',
        rating: 4.9,
        title: 'Comfort Space',
        price: '$210',
        distance_from_town_center: 1.2,
        location: 'Marmaris, Turkey',
        rooms_available: 375,
        url: '/'
    },
    {
        image: '/media/Hotels/Hotel/img2.png',
        rating: 4.5,
        title: 'Comfort Space',
        price: '$351',
        distance_from_town_center: 1.2,
        location: 'Marmaris, Turkey',
        rooms_available: 375,
        url: '/'
    },
    {
        image: '/media/Hotels/Hotel/img3.png',
        rating: 3.9,
        title: 'Comfort Space',
        price: '$122',
        distance_from_town_center: 1.2,
        location: 'Marmaris, Turkey',
        rooms_available: 375,
        url: '/'
    },
    {
        image: '/media/Hotels/Hotel/img4.png',
        rating: 4.2,
        title: 'Comfort Space',
        price: '$27',
        distance_from_town_center: 1.2,
        location: 'Marmaris, Turkey',
        rooms_available: 375,
        url: '/'
    },
]

type Props = {};
export const ExploreTheWorld = (props: Props) => {
    return (
        <div className='layout mt-12'>
            <h1 className='section-title'>Explore The World</h1>
            <p className='section-description'>10,788 beautiful places</p>
            <div className="hotels grid grid-cols-1  lg:grid-cols-4 gap-5 mt-4">
                {hotels.map(hotel =>
                    <HotelMdCard data={hotel}/>
                )}
            </div>
        </div>
    );
};