import { Routes, Route } from "react-router-dom";
import { Home } from './home';
import { Menu } from './menu';
import { Details } from './menu/details';
import { Admin } from './admin';
import { Sign } from './sign';

export const Content = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/:id" element={<Details />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/sign" element={<Sign />} />
    </Routes>
)