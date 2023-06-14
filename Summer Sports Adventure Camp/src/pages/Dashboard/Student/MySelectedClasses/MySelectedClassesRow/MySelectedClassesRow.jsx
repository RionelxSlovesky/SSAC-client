const MySelectedClassesRow = ({selectedClass}) => {
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={selectedClass.classImage}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{selectedClass.className}</div>
          </div>
        </div>
      </td>
      <td>{selectedClass.instructorName}</td>
      <td>${selectedClass.price}</td>
      <th>
        <button className="btn btn-ghost btn-xs">delete</button>
        <button className="btn btn-ghost btn-xs">pay</button>
      </th>
    </tr>
  );
};

export default MySelectedClassesRow;
