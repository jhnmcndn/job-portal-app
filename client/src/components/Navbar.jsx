import { assets } from '../assets/assets.js';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { user } = useUser();
  console.log('~~user:', user);

  return (
    <div className='shadow py-4'>
      <div className='container px-4 2xl:px-20 mx-auto flex justify-between items-center'>
        <img src={assets.logo} alt='Logo' />
        {user ? (
          <div className='flex items-center gap-3'>
            <Link to='/applications'>Applied Jobs</Link>s<p>|</p>
            {/*<p>Hi, {user.firstName + ' ' + user.lastName}</p>*/}
            <p>HI USER!!</p>
            <UserButton />
          </div>
        ) : (
          <div className='flex gap-4 max-sm:text-xs'>
            <button className='text-gray-600'>Recruiter Login</button>
            <button
              className='bg-blue-600 text-white px-6 sm:px-9 py-2 rounded-full'
              onClick={() => openSignIn()}
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;