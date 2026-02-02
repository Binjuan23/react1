import {Navigate, NavLink, NavLinkRenderProps} from 'react-router-dom';
import {Suspense} from 'react';
import logo from '../logo.svg';
import {BrowserRouter, Route, Routes} from "react-router";
import {routes} from "./routes";

// const MainLayout = () => {
//     const activeNavStyle = ({isActive}: NavLinkRenderProps) => isActive ? 'nav-active' : '';
//     return (
//         <div className="main-layout">
//             <nav>
//                 <img src={logo} alt="React Logo"/>
//                 <ul>
//                     <li>
//                         <NavLink to="lazy1" className={activeNavStyle}>Lazy 1</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="lazy2" className={activeNavStyle}>Lazy 2</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="lazy3" className={activeNavStyle}>Lazy 3</NavLink>
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
//             {path: 'lazy1', element: <LazyPage1/>},
//             {path: 'lazy2', element: <LazyPage2/>},
//             {path: 'lazy3', element: <LazyPage3/>},
//             {path: '*', element: <Navigate to="/lazy1" replace/>},
//         ],
//     },
// ];
//
// const instrumentedRouter = withFaroRouterInstrumentation(createBrowserRouter(routes));

const Navigation = () => {
    const activeNavStyle = ({isActive}: NavLinkRenderProps) => {
        return isActive ? 'nav-active' : '';
    }
    return (
        <Suspense fallback={<span>Loading...</span>}>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="React Logo"/>
                        <ul>
                            {
                                routes.map(({to, name}) => (
                                    <li key={to}>
                                        <NavLink to={to} className={activeNavStyle}>{name}</NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                    <Routes>
                        {routes.map(({path, Component}) => (
                            <Route key={path} path={path} element={<Component/>}/>
                        ))
                        }
                        <Route path="/*" element={<Navigate to={routes[0].to} replace/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </Suspense>
    );
};

// const Navigation = () => <RouterProvider router={instrumentedRouter}/>;

export default Navigation;