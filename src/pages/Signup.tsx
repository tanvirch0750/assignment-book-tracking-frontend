import Button from '../components/ui/Button';

function Signup() {
  return (
    <div className="flex h-full w-full items-center justify-center px-4 py-6">
      <div className="w-full rounded-md bg-yellow-50 p-6">
        <h2 className="mb-8 text-2xl font-semibold">
          Ready to track your reading? Let's signup first!
        </h2>

        <form>
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="text-lg sm:basis-40">Username</label>
            <div className="grow">
              <input type="text" name="username" className="input" required />
              {/* <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
           error
          </p> */}
            </div>
          </div>

          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="text-lg sm:basis-40">Email</label>
            <div className="grow">
              <input type="email" name="email" className="input" required />
            </div>
          </div>

          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="text-lg sm:basis-40">Password</label>
            <div className="grow">
              <input
                type="password"
                name="password"
                className="input"
                required
              />
            </div>
          </div>

          <div>
            <Button type="primary">Signup</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
