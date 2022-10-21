// @flow 
import * as React from 'react';
import { FaStar } from 'react-icons/fa';
import {HiOutlineLocationMarker, HiOutlineOfficeBuilding } from 'react-icons/hi';
import {Link} from "react-router-dom";
type HotelMdProps = {
    image: string,
    rating: number,
    title: string,
    price: string,
    distance_from_town_center: number,
    location: string,
    rooms_available: number,
    url: string,
}

type Props = {
    data: HotelMdProps
};
export const HotelMdCard = ({
                                data: {
                                    image,
                                    distance_from_town_center,
                                    location,
                                    rating,
                                    rooms_available,
                                    price,
                                    title,
                                    url
                                }
                            }: Props) => {
    return (
        <Link to={url} className='w-full border p-3 rounded-lg hover:border-gray-500'>
            <div className="img-wrapper h-44">
                <img className="rounded-lg w-full h-full object-cover" src={image} alt=""/>
            </div>
            <div className="rating flex gap-1 mt-2 items-center"><FaStar className='text-amber-300'/><p className='text-sm pt-1'>{rating}</p></div>
            <div className="main flex">
                <h5 className='flex-1 font-semibold text-xl'>{title}</h5>
                <div className="bg-primary--20 px-2 py-1 rounded-lg font-semibold text-primary">{price}</div>
            </div>
            <h5 className="mt-1 text-sm text-gray-400">{distance_from_town_center} km to Town Center</h5>
            <div className="location flex mt-2 text-sm text-gray-400 items-center gap-2"><HiOutlineLocationMarker size={18}/>{location}</div>
            <div className="rooms flex mt-2 text-sm text-gray-400 items-center gap-2"><HiOutlineOfficeBuilding size={18}/>{rooms_available} Rooms are available</div>
        </Link>
    );
};