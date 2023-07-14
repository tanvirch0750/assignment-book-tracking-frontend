import Filter from '../components/Filter';
import SearchBook from '../components/SearchBook';

function AllBooks() {
  return (
    <main className="px-2 py-4">
      <div className="flex items-center justify-between border-b pb-4">
        <SearchBook />
        <Filter />
      </div>
    </main>
  );
}

export default AllBooks;
