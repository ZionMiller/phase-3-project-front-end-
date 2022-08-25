import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';

import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
     <App />
    </BrowserRouter>
);

// import React from "react"
// import createRoot from "react-dom";
// import { BrowserRouter } from 'react-router-dom';

// import App from './components/App';

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
// );