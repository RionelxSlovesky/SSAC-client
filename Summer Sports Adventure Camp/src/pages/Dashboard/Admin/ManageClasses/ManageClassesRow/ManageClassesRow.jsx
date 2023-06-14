const ManageClassesRow = ({ classItem, refetch, setId }) => {
  const handleApprove = () => {
    fetch(`https://b7a12-summer-camp-server-side-rionelx-slovesky.vercel.app/classes/approve/${classItem._id}`, {
      method: "PATCH",
    }).then(() => {
      alert(classItem.className + " approved");
      refetch();
    });
  };

  const handleDeny = () => {
    fetch(`https://b7a12-summer-camp-server-side-rionelx-slovesky.vercel.app/classes/deny/${classItem._id}`, {
      method: "PATCH",
    }).then(() => {
      alert(classItem.className + " denied");
      refetch();
    });
  };

  const handleModal = () => {
    setId(classItem._id)
    window.my_modal_1.showModal()
  }

  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={classItem.classImage}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{classItem.className}</div>
          </div>
        </div>
      </td>
      <td>
        {classItem.instructorName}
        <br />
        <span className="badge badge-ghost badge-sm">
          {classItem.instructorEmail}
        </span>
      </td>
      <td>{classItem.seats}</td>
      <td>${classItem.price}</td>
      <td>{classItem.status}</td>
      <th>
        {classItem.status == "pending" ? (
          <button onClick={handleApprove} className="btn btn-ghost btn-xs">
            Approve
          </button>
        ) : (
          <button disabled className="btn btn-ghost btn-xs">
            Approve
          </button>
        )}
      </th>
      <th>
        {classItem.status == "pending" ? (
          <button onClick={handleDeny} className="btn btn-ghost btn-xs">
            Deny
          </button>
        ) : (
          <button disabled className="btn btn-ghost btn-xs">
            Deny
          </button>
        )}
      </th>
      <th>
        <button onClick={handleModal} className="btn btn-ghost btn-xs">Send Feedback</button>
      </th>
    </tr>
  );
};

export default ManageClassesRow;
