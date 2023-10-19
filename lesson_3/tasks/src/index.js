import { createRoot } from 'react-dom/client';

import App from './components/App'

import './css/dark-theme.css'
import './css/light-theme.css'

createRoot(document.getElementById('app')).render(<App />)