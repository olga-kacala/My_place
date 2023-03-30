// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";

// // ReactDOM.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>,
// //   document.getElementById('root')
// // );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './App';

import { AppProvider } from './AppProvider';



const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<HashRouter>
		<AppProvider>
			<App />
		</AppProvider>
	</HashRouter>
);
