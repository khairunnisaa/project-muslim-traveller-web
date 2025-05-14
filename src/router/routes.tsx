import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import DashboardLayout from "../pages/layouts/DashboardLayout";
import WebClientLayout from "../pages/layouts/WebClientLayout";
import About from "../pages/web-client/About";
import Home from "../pages/web-client/Home";
import Destination from "../pages/web-client/Destination";
import Transportation from "../pages/web-client/Tranportation";
import Hotel from "../pages/web-client/Hotel";
import Blog from "../pages/web-client/Blog";
import Contact from "../pages/web-client/Contact";
import HomeDashboard from "../pages/dashboard/HomeDashboard";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />

            {/* web-client Routes */}
            <Route path="/" element={<WebClientLayout />}>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/destination/:id" element={<Destination />} />
                <Route path="/transportation" element={<Transportation />} />
                <Route path="/hotel" element={<Hotel />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Route>

            {/* Dashboard Admin Routes */}
            <Route path="/admin" element={<DashboardLayout />}>
                <Route index element={<HomeDashboard />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
