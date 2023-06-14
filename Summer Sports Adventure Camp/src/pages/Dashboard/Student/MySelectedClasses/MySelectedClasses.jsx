import useSelectedClasses from "../../../../hooks/useSelectedClasses";
import MySelectedClassesRow from "./MySelectedClassesRow/MySelectedClassesRow";

const MySelectedClasses = () => {
  const [selectedClasses, refetch] = useSelectedClasses();

  return (
    <div>
      <h1 className="text-center my-8 text-4xl">My Selected Classes</h1>

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
            {selectedClasses.map((selectedClass) => (
              <MySelectedClassesRow
                key={selectedClass._id}
                selectedClass={selectedClass}
                refetch={refetch}
              ></MySelectedClassesRow>
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

export default MySelectedClasses;
