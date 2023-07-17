/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useDeleteTracklistMutation } from '../../redux/features/track/trackApi';

function TrackBookitemButtons({ id }: { id: string }) {
  const [
    deleteTracklist,
    {
      isSuccess: deleteSuccess,
      isLoading: deleteLoading,
      isError: deleteError,
    },
  ] = useDeleteTracklistMutation();

  function handeleDeleteFunction() {
    if (id) deleteTracklist(id);
  }

  return (
    <>
      <button className="text-xs font-semibold text-blue-700 hover:text-blue-800 hover:underline">
        Reading
      </button>
      <button className="text-xs font-semibold text-blue-700 hover:text-blue-800 hover:underline">
        Soon
      </button>
      <button className="text-xs font-semibold text-blue-700 hover:text-blue-800 hover:underline">
        Finished
      </button>
      <button
        disabled={deleteLoading}
        onClick={handeleDeleteFunction}
        className="text-xs font-semibold text-blue-700 hover:text-blue-800 hover:underline"
      >
        {deleteLoading ? 'Removing...' : 'Remove'}
      </button>
    </>
  );
}

export default TrackBookitemButtons;
