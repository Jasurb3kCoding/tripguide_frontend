// @flow 
import * as React from 'react';
import {HotelLgCard} from "../Cards/HotelLgCard/HotelLgCard";

const searchResultsData = [
    {
        title: 'Hotel of Mumbai',
        image: '/media/Hotels/Hotel/img1.png',
        rating: {
            score: 4.8,
            number_of_votes: 122,
        },
        location: 'Zuich town, Switzerland',
        amenities: ['free wifi', 'free parking', 'special offer', 'website', 'Safety measures'],
        price: {
            cost: 320,
            for_people: 2,
        }
    },
    {
        title: 'Hotel of Mumbai',
        image: '/media/Hotels/Hotel/img2.png',
        rating: {
            score: 4.8,
            number_of_votes: 122,
        },
        location: 'Zuich town, Switzerland',
        amenities: ['free wifi', 'free parking', 'special offer', 'website', 'Safety measures'],
        price: {
            cost: 320,
            for_people: 2,
        }
    },
    {
        title: 'Hotel of Mumbai',
        image: '/media/Hotels/Hotel/img3.png',
        rating: {
            score: 4.8,
            number_of_votes: 122,
        },
        location: 'Zuich town, Switzerland',
        amenities: ['free wifi', 'free parking', 'special offer', 'website', 'Safety measures'],
        price: {
            cost: 320,
            for_people: 2,
        }
    },
]

type Props = {};
export const SearchHotelResults = (props: Props) => {
    return (
        <div className='w-full space-y-4'>
            {searchResultsData.map(hotel =>
                <HotelLgCard data={hotel}/>
            )}
        </div>
    );
};