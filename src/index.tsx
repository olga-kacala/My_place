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
