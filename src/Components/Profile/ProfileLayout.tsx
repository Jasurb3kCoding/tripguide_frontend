// @flow 
import * as React from 'react';
import {Outlet} from "react-router-dom";
import './style.css'
type Props = {
    
};
export const ProfileLayout = (props: Props) => {
    return (
        <div className='layout mt-12'>
            <Outlet/>
        </div>
    );
};