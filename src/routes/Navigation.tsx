import {Navigate, NavLink, NavLinkRenderProps} from 'react-router-dom';

import logo from '../logo.svg';
import {createBrowserRouter, Outlet, RouterProvider} from "react-router";
import {withFaroRouterInstrumentation} from "@grafana/faro-react";
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";


const MainLayout = () => {
    const activeNavStyle = ({isActive}: NavLinkRenderProps) => isActive ? 'nav-active' : '';
    return (
        <div className="main-layout">
            <nav>
                <img src={logo} alt="React Logo"/>
                <ul>
                    <li>
                        <NavLink to="lazy1" className={activeNavStyle}>Lazy 1</NavLink>
                    </li>
                    <li>
                        <NavLink to="lazy2" className={activeNavStyle}>Lazy 2</NavLink>
                    </li>
                    <li>
                        <NavLink to="lazy3" className={activeNavStyle}>Lazy 3</NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    );
};

const routes = [
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {path: 'lazy1', element: <LazyPage1/>},
            {path: 'lazy2', element: <LazyPage2/>},
            {path: 'lazy3', element: <LazyPage3/>},
            {path: '*', element: <Navigate to="/lazy1" replace/>},
        ],
    },
];

const instrumentedRouter = withFaroRouterInstrumentation(createBrowserRouter(routes));

// const Navigation = () => {
//     const activeNavStyle = ({isActive}: NavLinkRenderProps) => {
//         return isActive ? 'nav-active' : '';
//     }
//     return (
//         <BrowserRouter>
//             <div className="main-layout">
//                 <nav>
//                     <img src={logo} alt="React Logo"/>
//                     <ul>
//                         <li>
//                             <NavLink to="/home" className={activeNavStyle}>Home</NavLink>
//                         </li>
//                         <li>
//                             <NavLink to="/about" className={activeNavStyle}>About</NavLink>
//                         </li>
//                         <li>
//                             <NavLink to="/users" className={activeNavStyle}>Users</NavLink>
//                         </li>
//                     </ul>
//                 </nav>
//                 <Routes>
//                     <Route path="about" element={<h1>About Page</h1>}/>
//                     <Route path="users" element={<h1>Users Page</h1>}/>
//                     <Route path="home" element={<h1>Home Page</h1>}/>
//
//                     <Route path="/*" element={<Navigate to="/home" replace/>}/>
//                 </Routes>
//             </div>
//         </BrowserRouter>
//     );
// };

const Navigation = () => <RouterProvider router={instrumentedRouter}/>;

export default Navigation;