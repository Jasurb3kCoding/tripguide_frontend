// @flow 
import * as React from 'react';
import {Outlet} from "react-router-dom";

type Props = {
  
};
export const App = (props: Props) => {
    return (
        <div>
            <h1>Main Content</h1>
            <Outlet/>
        </div>
    );
};