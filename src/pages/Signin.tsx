import Button from '../components/ui/Button';

function Signin() {
  return (
    <div className="flex h-full w-full items-center justify-center px-4 py-6">
      <div className="w-full">
        <h2 className="mb-8 text-2xl font-semibold">
          Let's track your reading!
        </h2>

        <form>
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="text-lg sm:basis-40">Email</label>
            <div className="grow">
              <input type="email" name="email" className="input" required />
              {/* <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
       error
      </p> */}
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
            <Button type="primary">Login</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signin;
