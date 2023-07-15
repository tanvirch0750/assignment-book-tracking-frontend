import LinkButton from './ui/LinkButton';

type IBookIemProps = {
  wishlist?: boolean;
};

function BookItem({ wishlist }: IBookIemProps) {
  return (
    <li className="flex items-start gap-4 rounded-md bg-yellow-50 p-2 py-2">
      <img
        src="https://marketplace.canva.com/EAFPHUaBrFc/1/0/1003w/canva-black-and-white-modern-alone-story-book-cover-QHBKwQnsgzs.jpg"
        alt="book"
        className="h-40 object-cover"
      />
      <div className="flex h-40 grow flex-col gap-0.5">
        <p className="text-lg font-medium">Book Name</p>
        <p className="text-sm capitalize italic text-stone-500">
          Author: Tanvir Chowodhury
        </p>
        <p>
          Genre:{' '}
          <span className="rounded-full bg-yellow-100 px-2 text-sm tracking-wide">
            Ficton
          </span>
        </p>

        <p>Publication Year: 2020</p>

        <p>
          Added by:{' '}
          <span className="rounded-full bg-green-100 px-2 text-xs tracking-wide">
            Tanvir
          </span>
        </p>

        <span className="mt-auto flex items-center justify-between space-x-2">
          <LinkButton to="/book/id">Details</LinkButton>
          {wishlist && <LinkButton to="">Remove from wishlist</LinkButton>}
        </span>
      </div>
    </li>
  );
}

export default BookItem;
