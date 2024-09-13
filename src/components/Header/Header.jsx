import logo from './logo.png'
import { Link } from 'react-router-dom';
// import logo from './path/to/logo.png'

const Header = () => {
  return (
    <div className='header flex justify-between items-center p-4 bg-gray-100 shadow-md'>
      <div className='logo'>
        {/* Nilesh work Here */}
        <Link to="/">
          <img src={logo} alt="Logo" className='h-20 w-auto' />
        </Link>
      </div>
      <div className='items'>
        {/* Khusbu work Here */}
        <ul className='flex space-x-6 text-lg'>

          <li className='hover:text-blue-500 cursor-pointer'><Link to="/">Home</Link></li>
          <li className='hover:text-blue-500 cursor-pointer'><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Header