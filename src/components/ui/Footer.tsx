/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useGetTracklistQuery } from '../../redux/features/track/trackApi';
import { useGetWishlistQuery } from '../../redux/features/wishlist/wishlistApi';

function Footer() {
  const user = useAuth();
  const { data: wishlist } = useGetWishlistQuery(undefined);
  const { data: trackList } = useGetTracklistQuery(undefined);
  return (
    <>
      {user ? (
        <div className="flex flex-col items-center justify-between gap-4 bg-stone-800 px-2 py-3 text-sm uppercase text-stone-200 sm:px-6 md:flex-row md:text-base">
          <p className="space-x-4 text-xs font-semibold text-stone-300 sm:space-x-6 md:text-base">
            <span>
              Wish-listed books -{' '}
              {wishlist ? (
                <span className="font-bold text-yellow-400">
                  {wishlist?.data?.length}
                </span>
              ) : (
                '0'
              )}{' '}
            </span>
            <span>
              Track-listed Books -{' '}
              {trackList ? (
                <span className="font-bold text-yellow-400">
                  {trackList?.data?.length}
                </span>
              ) : (
                '0'
              )}
            </span>
          </p>
          <div className="md:text-md space-x-4 text-xs">
            <Link className="hover:text-yellow-400" to="/wishlist">
              Your wishlist &rarr;
            </Link>
            <Link className="hover:text-yellow-400" to="/tracker">
              Your Tracking List &rarr;
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center bg-stone-800 px-4 py-2 text-xs text-stone-400 sm:px-6">
          All rights reserved by Book Tracker - 2023
        </div>
      )}
    </>
  );
}

export default Footer;
