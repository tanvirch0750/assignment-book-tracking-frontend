import { IBook } from '../../types/bookType';
import BookItem from './BookItem';

function BookLIst({ books }: { books: IBook[] }) {
  return (
    <ul className="mt-6 grid grid-cols-1 gap-12 px-2 md:grid-cols-2 md:gap-10">
      {books.map((book: IBook) => (
        <BookItem book={book} key={book.id} />
      ))}
    </ul>
  );
}

export default BookLIst;
