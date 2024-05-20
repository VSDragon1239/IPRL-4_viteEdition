import {BrowserRouter} from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx';

import './css/App.css';
import AppRoutes from "./routes/AppRoutes.jsx";

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <div className="App">
                    <AppRoutes />
                </div>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;

