// @flow 
import * as React from 'react';
import {Outlet} from "react-router-dom";
import {Header} from "./Components/core/Header/Header";
import {useState} from "react";
import {Auth} from "./Components/core/Auth/Auth";

type Props = {};
export const App = (props: Props) => {
    const [isAuthComponentActive, setIsAuthComponentActive] = useState(false);
    const showAuthComponent = () => setIsAuthComponentActive(true)
    const hideAuthComponent = () => setIsAuthComponentActive(false)

    return (
        <div className='bg-background h-[1000px] relative'>
            {isAuthComponentActive && <Auth hideAuthComponent={hideAuthComponent}/>}
            <Header showAuthComponent={showAuthComponent}/>
            <Outlet/>
        </div>
    );
};