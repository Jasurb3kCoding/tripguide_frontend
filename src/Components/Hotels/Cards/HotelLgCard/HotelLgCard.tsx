// @flow 
import * as React from 'react';
import {FaRegFlag, FaStar} from 'react-icons/fa';

type HotelLgCardProps = {
    title: string,
    image: string,
    rating: {
        score: number,
        number_of_votes: number,
    },
    location: string,
    amenities: String[],
    price: {
        cost: number,
        for_people: number,
    }
}

type Props = {
    data: HotelLgCardProps
};
export const HotelLgCard = ({data: {title, image, price, amenities, location, rating}}: Props) => {
    return (
        <div className='w-full border rounded-xl flex h-64'>
            <div className="img-wrapper w-2/5 bg-red-400 rounded-xl">
                <img className='rounded-l-xl w-full h-full object-cover' src={image} alt={title}/>
            </div>
            <div className="data p-5 flex-1 h-full flex flex-col">
                <h3 className='text-3xl font-semibold'>{title}</h3>
                <div className="flex mt-2">
                    <div className="rating flex gap-4 text-gray-500">
                        <div className="flex items-center gap-2">
                            <FaStar className='text-amber-300'/>
                            <p className='text-black'>{rating.score}</p>
                            <p>({rating.number_of_votes} reviews)</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaRegFlag/>
                            <p>{location}</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-1">
                    <div className="aminities flex-1">
                            
                    </div>
                    <div className="price flex flex-col w-48 space-y-2 justify-end mt-top">
                        <div className="w-full py-2 rounded-full bg-gray-100 flex items-center justify-center px-4 text-gray-500"><p className='font-semibold text-2xl mr-2 text-black'>${price.cost}</p> <p>For {price.for_people} people</p></div>
                        <div className="w-full bg-primary text-white  py-2 font-semibold text-center rounded-full">Book Now</div>
                    </div>
                </div>
            </div>
        </div>
    );
};