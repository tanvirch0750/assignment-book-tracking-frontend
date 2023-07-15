import BookLIst from '../components/BookLIst';

function Home() {
  return (
    <div className="px-2 py-4">
      <div className="rounded-md bg-yellow-50 p-8">
        <blockquote className="text-2xl font-bold text-stone-600">
          "Reality doesn’t always give us the life that we desire, but we can
          always find what we desire between the pages of books."
        </blockquote>
        <span className="mt-2 block text-base font-medium italic text-stone-700">
          -- Adelise M. Cullens
        </span>
      </div>
      <BookLIst />
    </div>
  );
}

export default Home;
