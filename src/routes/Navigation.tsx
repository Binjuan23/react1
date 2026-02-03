import {Navigate, NavLink, NavLinkRenderProps} from 'react-router-dom';
import {BrowserRouter, Route, Routes} from "react-router";

import logo from '../logo.svg';
import ShoppingPage from "../02-component-patterns/pages/ShoppingPage";

// const MainLayout = () => {
//     const activeNavStyle = ({isActive}: NavLinkRenderProps) => isActive ? 'nav-active' : '';
//     return (
//         <div className="main-layout">
//             <nav>
//                 <img src={logo} alt="React Logo"/>
//                 <ul>
//                     <li>
//                         <NavLink to="home" className={activeNavStyle}>Home</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="about" className={activeNavStyle}>About</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="users" className={activeNavStyle}>Users</NavLink>
//                     </li>
//                 </ul>
//             </nav>
//             <Outlet/>
//         </div>
//     );
// };
//
// const routes = [
//     {
//         path: '/',
//         element: <MainLayout/>,
//         children: [
//             {path: 'home', element: <h1>Home Page</h1>},
//             {path: 'about', element: <h1>About Page</h1>},
//             {path: 'users', element: <h1>Users Page</h1>},
//             {path: '*', element: <Navigate to="/home" replace/>},
//         ],
//     },
// ];

// const instrumentedRouter = withFaroRouterInstrumentation(createBrowserRouter(routes));

const Navigation = () => {
    const activeNavStyle = ({isActive}: NavLinkRenderProps) => {
        return isActive ? 'nav-active' : '';
    }
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React Logo"/>
                    <ul>
                        <li>
                            <NavLink to="/shopping" className={activeNavStyle}>Shopping</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={activeNavStyle}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/users" className={activeNavStyle}>Users</NavLink>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="about" element={<h1>About Page</h1>}/>
                    <Route path="users" element={<h1>Users Page</h1>}/>
                    <Route path="shopping" element={<ShoppingPage/>}/>

                    <Route path="/*" element={<Navigate to="/shopping" replace/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
};

// const Navigation = () => <RouterProvider router={instrumentedRouter}/>;

export default Navigation;