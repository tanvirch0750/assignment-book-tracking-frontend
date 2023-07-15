import BookItem from './BookItem';

function BookLIst() {
  return (
    <ul className="mt-6 grid grid-cols-2 gap-4 px-2">
      <BookItem />
      <BookItem />
      <BookItem />
      <BookItem />
      <BookItem />
      <BookItem />
      <BookItem />
    </ul>
  );
}

export default BookLIst;
