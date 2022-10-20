// @flow 
import * as React from 'react';
import {Outlet} from "react-router-dom";
import {Header} from "./Components/core/Header/Header";
import {useState} from "react";
import {Auth} from "./Components/core/Auth/Auth";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import useAuth from "./Hooks/useAuth";

type Props = {};
export const App = (props: Props) => {
    const {user} = useAuth()
    const [isAuthComponentActive, setIsAuthComponentActive] = useState(false);

    const showAuthComponent = () => user || setIsAuthComponentActive(true)
    const hideAuthComponent = () => setIsAuthComponentActive(false)

    return (
        <div className='relative h-[2000px]'>

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
            {isAuthComponentActive && !user && <Auth hideAuthComponent={hideAuthComponent}/>}
            <Header showAuthComponent={showAuthComponent}/>
            <Outlet/>
        </div>
    );
};