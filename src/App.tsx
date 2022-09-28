// @flow 
import * as React from 'react';
import {Outlet} from "react-router-dom";
import {Header} from "./Components/core/Header/Header";
import {useState} from "react";
import {Auth} from "./Components/core/Auth/Auth";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

type Props = {};
export const App = (props: Props) => {
    const [isAuthComponentActive, setIsAuthComponentActive] = useState(true);
    const showAuthComponent = () => setIsAuthComponentActive(true)
    const hideAuthComponent = () => setIsAuthComponentActive(false)

    return (
        <div className='bg-background h-[1000px] relative'>

            {/*Alert Manager*/}
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            {isAuthComponentActive && <Auth hideAuthComponent={hideAuthComponent}/>}
            <Header showAuthComponent={showAuthComponent}/>
            <Outlet/>
        </div>
    );
};