import React from 'react';
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {LazyPage1, LazyPage2, LazyPage3} from "../pages";

const LazyLayout = () => {
    return (
        <div>
            <h1>LazyLayout Page</h1>

            <ul>
                <li>
                    <NavLink to="/lazyload/lazy1">Lazy 1</NavLink>
                </li>
                <li>
                    <NavLink to="/lazyload/lazy2">Lazy 2</NavLink>
                </li>
                <li>
                    <NavLink to="/lazyload/lazy3">Lazy 3</NavLink>
                </li>
            </ul>

            <Routes>
                <Route path="lazy1" element={<LazyPage1/>}/>
                <Route path="lazy2" element={<LazyPage2/>}/>
                <Route path="lazy3" element={<LazyPage3/>}/>
                {/*<Route path="*" element={<div>404</div>}/>*/}
                <Route path="*" element={<Navigate to="/lazyload/lazy1" replace/>}/>
            </Routes>
        </div>
    );
};

export default LazyLayout;