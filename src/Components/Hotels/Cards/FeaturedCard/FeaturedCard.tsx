// @flow 
import * as React from 'react';
import {Link} from "react-router-dom";

type FeaturedProps = {
    title: string,
    rating: number,
    number_of_destinations: number,
    image: string,
    url: string
}

type Props = {
    data: FeaturedProps
};
export const FeaturedCard = ({data: {title, rating, number_of_destinations, image, url}}: Props) => {
    return (
        <Link to={url}
              className="featured-grid-item relative rounded-lg border-gray-500 w-full h-52 bg-center bg-cover bg-no-repeat "
              style={{backgroundImage: `url(${image})`}}>
            <div
                className="black-shadow absolute bg-gradient-to-t from-black via-transparent  inset-0 rounded-lg z-10"></div>
            <div className="content z-20 relative text-white w-full h-full flex flex-col">
                <div className="flex-1">
                    <div className="rating bg-white inline-block px-4 py-0 rounded-full mt-3 ml-3 shadow">
                        <h6 className='text-orange-500 font-semibold'>{rating}</h6>
                    </div>
                </div>
                <div className="bottom px-5 pb-4 drop-shadow-sm">
                    <h1 className='text-2xl font-semibold'>{title}</h1>
                    <p className='opacity-75'>{number_of_destinations} destinations</p>
                </div>
            </div>
        </Link>
    );
};