import { Route, Routes } from 'react-router-dom';
import { Login, Map, Tomos} from '../pages';

export const AppRouter = () => {
    
    return (
        <>
            <Routes>

                <Route path='/' element={<Login />} />
                <Route path='/mapa' element={<Map />} />
                
                <Route path='/tomos' element={<Tomos/>} />
            </Routes>
        </>
    )
}
