import {render} from "react-dom";

import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home} from './Pages/Hotels/Home'
import {AuthProvider} from "./Context/AuthProvider";
import {Profile} from "./Pages/Profile/Profile";
import {ProfileLayout} from "./Components/Profile/ProfileLayout";
import RequireAuth from "./Components/core/Auth/RequireAuth";
import {ResetPassword} from "./Pages/Profile/ResetPassword";

render(
    <BrowserRouter>
        <AuthProvider>
            <Routes>
                <Route path='/' element={<App/>}>
                    <Route index element={<Home/>}/>
                    <Route path='/reset-password/:uid' element={<ResetPassword/>}>

                    </Route>
                    <Route element={<RequireAuth/>}>
                        <Route path='/profile' element={<ProfileLayout/>}>
                            <Route index element={<Profile/>}/>
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </AuthProvider>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
