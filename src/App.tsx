import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import Loader from './components/ui/Loader';
import useAuthCheck from './hooks/useAuthCheck';
import AddBook from './pages/AddBook';
import AllBooks from './pages/AllBooks';
import Book from './pages/Book';
import Home from './pages/Home';
import MyBooks from './pages/MyBooks';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Tracker from './pages/Tracker';
import Wishlist from './pages/Wishlist';

function App() {
  const authCheck = useAuthCheck();
  return !authCheck ? (
    <Loader />
  ) : (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="all-books" element={<AllBooks />} />
          <Route path="book/:id" element={<Book />} />
          <Route path="add-book" element={<AddBook />} />
          <Route path="my-books" element={<MyBooks />} />
          <Route path="tracker" element={<Tracker />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
        </Route>

        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
