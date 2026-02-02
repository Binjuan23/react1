import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {TracingInstrumentation} from "@grafana/faro-web-tracing";
import {
    createReactRouterV6DataOptions,
    getWebInstrumentations,
    initializeFaro,
    ReactIntegration
} from "@grafana/faro-react";
import {matchRoutes} from "react-router-dom";

initializeFaro({
    url: 'https://faro-collector-prod-eu-west-2.grafana.net/collect/63885dabd1504de68fea585052ef6120',
    app: {
        name: 'Mine',
        version: '1.0.0',
        environment: 'production'
    },

    instrumentations: [
        // Mandatory, omits default instrumentations otherwise.
        ...getWebInstrumentations(),

        // Tracing package to get end-to-end visibility for HTTP requests.
        new TracingInstrumentation(),

        //React integration for React applications.
        // new ReactIntegration({
        //     router: createReactRouterV6Options({
        //         createRoutesFromChildren,
        //         matchRoutes,
        //         Routes,
        //         useLocation,
        //         useNavigationType,
        //     }),
        // }),
        new ReactIntegration({
            router: createReactRouterV6DataOptions({
                matchRoutes,
            }),
        }),
    ],
});
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
