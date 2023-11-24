// import { Link, useNavigate } from 'react-router-dom';
// import { api } from '../../redux/api/apiSlice';
// import { userLoggedOut } from '../../redux/features/auth/authSlice';
// import { useAppDispatch, useAppSelector } from '../../redux/hooks';
// import LinkButton from './LinkButton';

// function Header() {
//   const auth = useAppSelector((state) => state.auth);
//   const dispatch = useAppDispatch();
//   const navigate = useNavigate();

//   const logout = () => {
//     dispatch(userLoggedOut());
//     localStorage.clear();
//     dispatch(api.util.resetApiState());
//     navigate('/signin');
//   };

//   return (
//     <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-300 px-4 py-3 uppercase sm:px-6">
//       <Link to="/" className="font-medium tracking-widest">
//         Book Tracker
//       </Link>

//       <div className="flex items-center gap-4 text-stone-700">
//         <LinkButton type="yellow" to="/all-books">
//           All Books
//         </LinkButton>

//         {auth?.accessToken && auth?.userId ? (
//           <>
//             <LinkButton type="yellow" to="/add-book">
//               Add Book
//             </LinkButton>

//             <LinkButton type="yellow" to="/my-books">
//               {auth?.userName?.split(' ')[0]}'s Books
//             </LinkButton>
//             <span
//               role="button"
//               className="text-md font-medium text-stone-800 hover:text-stone-900 hover:underline"
//               onClick={logout}
//             >
//               Logout
//             </span>
//           </>
//         ) : (
//           <>
//             <LinkButton type="yellow" to="/signin">
//               Signin
//             </LinkButton>
//             <LinkButton type="yellow" to="/signup">
//               Signup
//             </LinkButton>
//           </>
//         )}
//       </div>
//     </header>
//   );
// }
// export default Header;
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../../redux/api/apiSlice';
import { userLoggedOut } from '../../redux/features/auth/authSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import LinkButton from './LinkButton';

function Header() {
  const auth = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const logout = () => {
    dispatch(userLoggedOut());
    localStorage.clear();
    dispatch(api.util.resetApiState());
    navigate('/signin');
  };

  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-300 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="font-medium tracking-widest">
        Book Tracker
      </Link>

      <div className="hidden items-center gap-4 text-stone-700 sm:flex">
        <LinkButton type="yellow" to="/all-books">
          All Books
        </LinkButton>

        {auth?.accessToken && auth?.userId ? (
          <>
            <LinkButton type="yellow" to="/add-book">
              Add Book
            </LinkButton>

            <LinkButton type="yellow" to="/my-books">
              {auth?.userName?.split(' ')[0]}'s Books
            </LinkButton>
            <span
              role="button"
              className="text-md font-medium text-stone-800 hover:text-stone-900 hover:underline"
              onClick={logout}
            >
              Logout
            </span>
          </>
        ) : (
          <>
            <LinkButton type="yellow" to="/signin">
              Signin
            </LinkButton>
            <LinkButton type="yellow" to="/signup">
              Signup
            </LinkButton>
          </>
        )}
      </div>

      {/* Mobile menu */}
      <div className="flex items-center sm:hidden">
        <button
          onClick={toggleMobileMenu}
          className="text-stone-700 focus:outline-none"
        >
          {isMobileMenuOpen ? (
            // Close icon when the mobile menu is open
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            // Hamburger icon when the mobile menu is closed
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu links */}
      {isMobileMenuOpen && (
        <div className="fixed right-0 top-0 z-50 h-full w-full bg-yellow-300 sm:hidden">
          <div className="flex flex-col items-center gap-8 pt-16">
            <LinkButton type="yellow" to="/all-books">
              All Books
            </LinkButton>

            {auth?.accessToken && auth?.userId ? (
              <>
                <LinkButton type="yellow" to="/add-book">
                  Add Book
                </LinkButton>

                <LinkButton type="yellow" to="/my-books">
                  {auth?.userName?.split(' ')[0]}'s Books
                </LinkButton>
                <span
                  role="button"
                  className="text-md font-medium text-stone-800 hover:text-stone-900 hover:underline"
                  onClick={() => {
                    logout();
                    closeMobileMenu();
                  }}
                >
                  Logout
                </span>
              </>
            ) : (
              <>
                <LinkButton type="yellow" to="/signin">
                  Signin
                </LinkButton>
                <LinkButton type="yellow" to="/signup">
                  Signup
                </LinkButton>
              </>
            )}

            <button
              onClick={closeMobileMenu}
              className="mt-4 rounded-md bg-stone-700 px-4 py-2 font-medium text-yellow-300 hover:bg-stone-800"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
