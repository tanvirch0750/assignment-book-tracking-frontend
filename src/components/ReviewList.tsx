import Review from './Review';
import Button from './ui/Button';

function ReviewList() {
  return (
    <div className="">
      <h2 className="text-md font-medium text-stone-950">Books Reviews:</h2>
      <form className="flex gap-2 py-2">
        <input
          type="text"
          placeholder="Add Review"
          className="w-full basis-3/4 rounded-full bg-yellow-100 px-4 py-3 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50"
        />
        <Button type="primary">Add Review</Button>
      </form>
      <ul className="divide-y divide-stone-200 py-2">
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
      </ul>
    </div>
  );
}

export default ReviewList;
