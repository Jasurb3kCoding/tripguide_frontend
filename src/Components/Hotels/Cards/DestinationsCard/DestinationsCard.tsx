// @flow 
import * as React from 'react';
import {Link} from "react-router-dom";
import './style.css'

type LocationProps = {
    image: string,
    location: string,
    number_of_destinations: number
    url: string
};

type Props = {
    location: LocationProps
}
export const DestinationsCard = ({location: {image, location, number_of_destinations, url}}: Props) => {
    return (
        <Link to={url}
              className='whitespace-pre-wrap card border rounded-lg w-52 h-full md:h-auto md:w-auto inline-flex flex-col text-center md:text-left px-6 py-6 bg-white hover:border-gray-400 mr-4 md:mr-0'>
            <div className="img w-16 h-16 mx-auto md:ml-0">
                <img className='w-full h-full object-cover rounded-lg' src={image} alt={location}/>
            </div>
            <h3  className='font-semibold text-xl mt-4 inline-block break-words '>{location}</h3>
            <p className='text-gray-500 mt-3'>{number_of_destinations} destinations</p>
        </Link>
    );
};