import { Outlet } from 'react-router-dom';
import Navbar from '../pages/share/Navbar';
import Footer from '../pages/share/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;