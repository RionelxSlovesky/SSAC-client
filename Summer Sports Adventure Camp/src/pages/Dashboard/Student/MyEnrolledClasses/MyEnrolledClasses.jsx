import useEnrolledClasses from "../../../../hooks/useEnrolledClasses";
import MyEnrolledClassesRow from "./MyEnrolledClassesRow/MyEnrolledClassesRow";

const MyEnrolledClasses = () => {
  const [enrolledClasses, refetch] = useEnrolledClasses();

  return (
    <div>
      <h1 className="text-center my-8 text-4xl">My Enrolled Classes</h1>

      <div className="overflow-x-auto pb-8">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Class</th>
              <th>Instructor</th>
              <th>Price</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {enrolledClasses.map((enrolledClass) => (
              <MyEnrolledClassesRow key={enrolledClass._id} enrolledClass={enrolledClass}></MyEnrolledClassesRow>
            ))}
          </tbody>
        </table>
        <dialog id="my_modal_1" className="modal">
          <form method="dialog" className="modal-box">
            <h3 className="font-bold text-lg">Feedback</h3>
            <input
              id="feedback"
              type="text"
              placeholder="Type here"
              className="input input-bordered input-primary w-full max-w-xs"
            />
          </form>
        </dialog>
      </div>
    </div>
  );
};

export default MyEnrolledClasses;
