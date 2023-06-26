import { Route, Routes } from 'react-router-dom';
import { Login, Map } from '../pages';

export const AppRouter = () => {
    
    return (
        <>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/mapa' element={<Map />} />
            </Routes>
        </>
    )
}
