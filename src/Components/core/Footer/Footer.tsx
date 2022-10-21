// @flow 
import * as React from 'react';
import {SubscribeBanner} from "../SubscribeBanner/SubscribeBanner";
import './style.css'
import {Link} from "react-router-dom";

type Props = {};
export const Footer = (props: Props) => {
    return (
        <div className='pt-44 bg-background'>
            <div className="bg-bg-400">
                <div className="layout relative pt-44 pb-14">
                    <SubscribeBanner/>
                    <div className="grid grid-cols-5">
                        <div className="col-span-2">
                            <div className="img-wrapper">
                                <img className='w-40' src="/media/core/logo-transparent.png" alt="logo"/>
                                <p className='w-1/2 text-gray-400 mt-5'>TripGuide is a learning project that is made to
                                    improve
                                    and show the abilities of a young group of programmers</p>

                            </div>
                        </div>
                        <div className="footer--section">
                            <h2>Services</h2>
                            <ul>
                                <li><Link to='/'> Travel Booking</Link></li>
                                <li><Link to='/'> Flight Booking</Link></li>
                                <li><Link to='/'> Car Booking</Link></li>
                                <li><Link to='/'> Fivestar Hotel</Link></li>
                                <li><Link to='/'> Traveling</Link></li>
                            </ul>
                        </div>
                        <div className="footer--section">
                            <h2>Support</h2>
                            <ul>
                                <li><Link to='/'> Account</Link></li>
                                <li><Link to='/'> Legal</Link></li>
                                <li><Link to='/'> Contact</Link></li>
                                <li><Link to='/'> Terms & Conditions</Link></li>
                                <li><Link to='/'> Privacy Policy</Link></li>
                            </ul>
                        </div>
                        <div className="footer--section">
                            <h2>Business</h2>
                            <ul>
                                <li><Link to='/'> Success</Link></li>
                                <li><Link to='/'> Careers</Link></li>
                                <li><Link to='/'> Blog</Link></li>
                                <li><Link to='/'> Information</Link></li>
                                <li><Link to='/'> Travel Guide</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};