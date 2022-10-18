// @flow 
import * as React from 'react';
import './style.css'
import {RiFlightTakeoffFill, RiHotelBedFill, RiTaxiFill} from "react-icons/ri";
import {Hero} from "../../Hotels/Home/Hero/Hero";
import {HeroLocationInput} from "./HeroInput/HeroLocationInput/HeroLocationInput";
import {HeroDateInput} from "./HeroInput/HeroDateInput/HeroDateInput";
import {HeroGuestsInput} from "./HeroInput/HeroGuestsInput/HeroGuestsInput";

type Props = {};
export const HeroSearch = (props: Props) => {
    return (
        <div className='layout -translate-y-64 lg:-translate-y-1/2'>
            <div className="w-full px-7 lg:px-10 py-5 flex flex-col lg:flex-row bg-white rounded-lg drop-shadow-xl">
                <div className="left flex-1">
                    <div className="upper">
                        <div className="flex flex-1 justify-between border-b-2 border-gray-100">
                            <div className="flex space-x-3 flex-1">
                                <div className="hero-search-tab active">
                                    <RiHotelBedFill className='icon'/><p>Hotel</p>
                                </div>
                                <div className="hero-search-tab hover:text-black">
                                    <RiFlightTakeoffFill className='icon'/><p>Flight</p>
                                </div>
                            </div>
                            <div className="lg:flex hidden">
                                <div className="py-3 px-3 hover:bg-gray-100">
                                    Round Trip
                                </div>
                                <div className="py-3 px-3 hover:bg-gray-100">
                                    1 passenger
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lower grid grid-cols-1 lg:grid-cols-2 pt-4 gap-4 ">
                        <HeroLocationInput/>
                        <HeroDateInput/>

                        {/*TODO: Add number of guests*/}
                        {/*<HeroGuestsInput/>*/}
                    </div>
                </div>
                <div className="right p-0 lg:pl-8 mt-4 lg:mt-0 flex items-end cursor-pointer">
                    <div className="btn bg-primary py-4 px-4 text-center rounded-lg font-semibold text-white w-full">Search</div>
                </div>
            </div>
        </div>
    );
};