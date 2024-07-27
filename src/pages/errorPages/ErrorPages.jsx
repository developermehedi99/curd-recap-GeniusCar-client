import { Link } from 'react-router-dom';

const ErrorPages = () => {
    return (
        <div className='text-center mt-10'>
            <h1>404</h1>
            <button className='text-2xl'><Link to="/">Go Home</Link></button>
        </div>
    );
};

export default ErrorPages;