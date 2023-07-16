/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { FormEvent, useState } from 'react';
import Button from '../components/ui/Button';
import { useAddBookMutation } from '../redux/features/book/bookApi';

function AddBook() {
  const [addBook, { isLoading, isError, isSuccess }] = useAddBookMutation();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [publicationYear, setPublicationYear] = useState('');
  const [image, setImage] = useState('');
  const [descripttion, setDescription] = useState('');

  const date = new Date(publicationYear);
  const formattedDate = date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formattedGenre = genre.toLowerCase();

  function resetForm() {
    setTitle('');
    setAuthor('');
    setGenre('');
    setPublicationYear('');
    setImage('');
    setDescription('');
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    addBook({
      title,
      author,
      genre: formattedGenre,
      publicationYear: formattedDate,
      image,
      descripttion,
    });
    resetForm();
  }

  return (
    <div className="flex h-full w-full items-center justify-center px-4 py-6">
      <div className="w-full rounded-md bg-yellow-50 p-6">
        <h2 className="mb-8 text-2xl font-semibold">Want to add a new book?</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="text-lg sm:basis-40">Title</label>
            <div className="grow">
              <input
                type="text"
                name="title"
                className="input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="text-lg sm:basis-40">Author</label>
            <div className="grow">
              <input
                type="text"
                name="author"
                className="input"
                required
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="text-lg sm:basis-40">Genre</label>
            <div className="grow">
              <input
                type="text"
                name="genre"
                className="input"
                required
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="text-lg sm:basis-40">Publication Year</label>
            <div className="grow">
              <input
                type="date"
                name="publicationYear"
                className="input"
                required
                value={publicationYear}
                onChange={(e) => setPublicationYear(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="text-lg sm:basis-40">Image Url</label>
            <div className="grow">
              <input
                type="text"
                name="image"
                className="input"
                required
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="text-lg sm:basis-40">Summary</label>
            <div className="grow">
              <input
                type="text"
                name="description"
                className="input"
                required
                value={descripttion}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>

          <div>
            <Button disabled={isLoading} type="primary">
              {isLoading ? 'Adding book...' : 'Add book'}
            </Button>
          </div>

          {isError && (
            <p className="mt-4 rounded-md bg-red-100 p-2 text-lg text-red-700">
              There was an error adding book
            </p>
          )}

          {isSuccess && (
            <p className="mt-4 rounded-md bg-green-100 p-2 text-lg text-green-700">
              Book added successfully
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default AddBook;
