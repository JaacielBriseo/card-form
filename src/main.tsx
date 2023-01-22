import React from 'react';
import ReactDOM from 'react-dom/client';
import { CardProvider } from './context';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<CardProvider>
			<App />
		</CardProvider>
	</React.StrictMode>
);
