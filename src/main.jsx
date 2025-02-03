import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { harsh } from './Redux/Store'

createRoot(document.getElementById('root')).render(
    <Provider store={harsh}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)
