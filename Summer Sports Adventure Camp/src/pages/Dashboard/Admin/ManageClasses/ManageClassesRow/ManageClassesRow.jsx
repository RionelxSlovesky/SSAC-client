const ManageClassesRow = ({classItem}) => {
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
        <button className="btn btn-ghost btn-xs">Approve</button>
      </th>
      <th>
        <button className="btn btn-ghost btn-xs">Deny</button>
      </th>
      <th>
        <button className="btn btn-ghost btn-xs">Send Feedback</button>
      </th>
    </tr>
  );
};

export default ManageClassesRow;
