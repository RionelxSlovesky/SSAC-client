import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";

const AddClass = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const className = form.className.value;
    const classImage = form.classImage.value;
    const instructorName = form.instructorName.value;
    const instructorEmail = form.instructorEmail.value;
    const seats = parseInt(form.seats.value);
    const price = parseFloat(form.price.value);

    const savedClass = {className,classImage,instructorName,instructorEmail,seats,price,status:'pending', enrolled: 0, feedback: ''}

    fetch("https://b7a12-summer-camp-server-side-rionelx-slovesky.vercel.app/class", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(savedClass),
    });
  };

  return (
    <div>
      <h1 className="text-center my-8 text-4xl">Add Class</h1>
      <div className="isolate bg-white px-6 pb-8">
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="className"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Class Name
              </label>
              <div className="mt-2.5">
                <input
                  required
                  type="text"
                  name="className"
                  id="className"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="classImage"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Class Image
              </label>
              <div className="mt-2.5">
                <input
                  required
                  type="text"
                  name="classImage"
                  id="classImage"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="instructorName"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Instructor Name
              </label>
              <div className="mt-2.5">
                <input
                  defaultValue={user.displayName}
                  disabled
                  type="text"
                  name="instructorName"
                  id="instructorName"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="instructorEmail"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Instructor Email
              </label>
              <div className="mt-2.5">
                <input
                  defaultValue={user.email}
                  disabled
                  type="text"
                  name="instructorEmail"
                  id="instructorEmail"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="seats"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Seats
              </label>
              <div className="mt-2.5">
                <input
                  required
                  type="number"
                  name="seats"
                  id="seats"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="price"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Price
              </label>
              <div className="mt-2.5">
                <input
                  required
                  type="number"
                  step="0.01"
                  name="price"
                  id="price"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <div className="form-control mt-6">
              <button className="btn btn-primary">Add Class</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClass;
