/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  useDeleteTracklistMutation,
  useEditTracklistMutation,
} from '../../redux/features/track/trackApi';

function TrackBookitemButtons({ id }: { id: string }) {
  const [
    deleteTracklist,
    {
      isSuccess: deleteSuccess,
      isLoading: deleteLoading,
      isError: deleteError,
    },
  ] = useDeleteTracklistMutation();

  const [editTracklist, { isLoading, isError, isSuccess }] =
    useEditTracklistMutation();

  function handeleDeleteFunction() {
    if (id) deleteTracklist(id);
  }

  function handleReadingSubmit() {
    editTracklist({
      id,
      data: {
        status: 'reading',
      },
    });
  }

  function handleSoonSubmit() {
    editTracklist({
      id,
      data: {
        status: 'soon',
      },
    });
  }

  function handleFinishedSubmit() {
    editTracklist({
      id,
      data: {
        status: 'finished',
      },
    });
  }

  return (
    <>
      <button
        onClick={handleReadingSubmit}
        disabled={isLoading}
        className="text-xs font-semibold text-blue-700 hover:text-blue-800 hover:underline"
      >
        Reading
      </button>
      <button
        disabled={isLoading}
        onClick={handleSoonSubmit}
        className="text-xs font-semibold text-blue-700 hover:text-blue-800 hover:underline"
      >
        Soon
      </button>
      <button
        disabled={isLoading}
        onClick={handleFinishedSubmit}
        className="text-xs font-semibold text-blue-700 hover:text-blue-800 hover:underline"
      >
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
