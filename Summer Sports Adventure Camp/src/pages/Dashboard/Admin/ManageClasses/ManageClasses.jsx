import { useState } from "react";
import useClasses from "../../../../hooks/useClasses";
import ManageClassesRow from "./ManageClassesRow/ManageClassesRow";

const ManageClasses = () => {
  const [classes, refetch] = useClasses();

  const [id, setId] = useState("");

  const handleFeedback = (id) => {
    const feedback = document.getElementById("feedback").value;

    fetch(`http://localhost:5000/classes/feedback/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ feedback: feedback }),
    }).then(() => {
      alert('feedback sent')
      refetch();
    });
  };

  return (
    <div>
      <h1 className="text-center my-8 text-4xl">Manage Classes</h1>
      <div className="overflow-x-auto pb-8">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Class</th>
              <th>Instructor</th>
              <th>Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {classes.map((c) => (
              <ManageClassesRow
                key={c._id}
                classItem={c}
                refetch={refetch}
                setId={setId}
              ></ManageClassesRow>
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
            <div className="modal-action">
              {/* if there is a button in form, it will close the modal */}
              <button onClick={() => handleFeedback(id)} className="btn">
                Send
              </button>
              <button className="btn">Close</button>
            </div>
          </form>
        </dialog>
      </div>
    </div>
  );
};

export default ManageClasses;
