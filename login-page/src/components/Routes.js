import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';

const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
    );
};

export default AppRoutes;
