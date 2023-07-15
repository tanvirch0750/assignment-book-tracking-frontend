function Review() {
  return (
    <li className="flex items-center gap-1 bg-stone-50 p-3">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SmiBVjny5nDgdTE2TJKAfj4wPvFp8TXfJ2q7_H4xZ_fStpzyF7h2fTSumG2ElJkvaNQ&usqp=CAU"
        alt="book"
        className="h-10 w-10 rounded-full"
      />
      <div className="flex flex-col gap-0.5">
        <p className="text-sm font-medium">Tanvir Chowdhury</p>
        <p className="space-x-2">
          <span className="text-sm font-medium">Review:</span>
          <span>Best reading experience</span>
        </p>
      </div>
    </li>
  );
}

export default Review;
