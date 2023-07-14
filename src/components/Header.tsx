import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="font-medium tracking-widest">
        Book Tracker
      </Link>

      <div>
        <button>sign in</button>
        <button>sign up</button>
      </div>
    </header>
  );
}
export default Header;
