import { Link } from 'react-router-dom';
import LinkButton from './ui/LinkButton';

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="font-medium tracking-widest">
        Book Tracker
      </Link>

      <div className="flex items-center gap-4 text-stone-700">
        <LinkButton type="yellow" to="/all-books">
          All Books
        </LinkButton>
        <LinkButton type="yellow" to="/signin">
          Signin
        </LinkButton>
        <LinkButton type="yellow" to="/signup">
          Signup
        </LinkButton>
      </div>
    </header>
  );
}
export default Header;
