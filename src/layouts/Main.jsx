import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../pages/share/Navbar';
import Footer from '../pages/share/Footer';

const Main = () => {
    const location = useLocation();
    console.log(location);
    const isLoginOrSingUp = location.pathname.includes('login') || location.pathname.includes('singUp');

    return (
        <div>
            {isLoginOrSingUp || <Navbar></Navbar> }
            <Outlet></Outlet>
           {isLoginOrSingUp || <Footer></Footer> }
        </div>
    );
};

export default Main;