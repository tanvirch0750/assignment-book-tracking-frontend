/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-floating-promises */
import {
  useAddWishlistMutation,
  useGetWishlistQuery,
} from '../redux/features/wishlist/wishlistApi';
import { IWishlistItem } from '../types/wishitemType';

function WishlistButton({ id }: { id: string }) {
  const { data: wishlist, isLoading: getWishLoading } =
    useGetWishlistQuery(undefined);

  const itemExist = (wishlist?.data as IWishlistItem[])?.filter(
    (item) => item.book.id === id
  );

  const [addWishlist, { isLoading, isError, isSuccess }] =
    useAddWishlistMutation();

  function handleSubmit() {
    addWishlist({ book: id });
  }

  return (
    <>
      {itemExist?.length > 0 ? (
        <span className="rounded-full bg-green-200 px-2">Wishlisted</span>
      ) : (
        <button
          disabled={isLoading || getWishLoading}
          onClick={handleSubmit}
          className="text-md text-blue-500 hover:text-blue-600 hover:underline"
        >
          {isLoading || getWishLoading
            ? 'Adding to the wishlist...'
            : 'Add to wishlist'}
        </button>
      )}
    </>
  );
}

export default WishlistButton;
