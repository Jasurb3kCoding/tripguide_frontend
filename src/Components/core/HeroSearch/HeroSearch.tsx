// @flow 
import * as React from 'react';
import './style.css'
import {RiFlightTakeoffFill, RiHotelBedFill, RiTaxiFill} from "react-icons/ri";
import {Hero} from "../../Hotels/Home/Hero/Hero";
import {HeroLocationInput} from "./HeroInput/HeroLocationInput/HeroLocationInput";
import {HeroDateInput} from "./HeroInput/HeroDateInput/HeroDateInput";

type Props = {};
export const HeroSearch = (props: Props) => {
    return (
        <div className='layout -translate-y-1/2'>
            <div className="w-full  px-10 py-5 flex bg-white rounded-lg drop-shadow-xl">
                <div className="left flex-1">
                    <div className="upper ">
                        <div className="flex justify-between border-b-2 border-gray-100">
                            <div className="flex space-x-3">
                                <div className="hero-search-tab active">
                                    <RiHotelBedFill className='icon'/><p>Hotel</p>
                                </div>
                                <div className="hero-search-tab hover:text-black">
                                    <RiFlightTakeoffFill className='icon'/><p>Flight</p>
                                </div>
                                <div className="hero-search-tab">
                                    <RiTaxiFill className='icon'/><p>Car Rental</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="py-3 px-3 hover:bg-gray-100">
                                    Round Trip
                                </div>
                                <div className="py-3 px-3 hover:bg-gray-100">
                                    1 passenger
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lower grid grid-cols-2 pt-4 gap-4">
                        <HeroLocationInput/>
                        <HeroDateInput/>
                    </div>
                </div>
                <div className="right pl-8 flex items-end cursor-pointer">
                    <div className="btn bg-primary px-8 py-4 rounded-lg font-semibold text-white">Search</div>
                </div>
            </div>
        </div>
    );
};