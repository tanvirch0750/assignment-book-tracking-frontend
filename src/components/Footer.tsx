import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
        <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
          <span>X Books</span>
          <span>X reading</span>
        </p>
        <Link to="/tracker">Your Tracking List &rarr;</Link>
      </div>
      <div className="flex items-center justify-center bg-stone-900 px-4 py-2 text-xs text-stone-400 sm:px-6">
        All rights reserved by Book Tracker - 2023
      </div>
    </>
  );
}

export default Footer;