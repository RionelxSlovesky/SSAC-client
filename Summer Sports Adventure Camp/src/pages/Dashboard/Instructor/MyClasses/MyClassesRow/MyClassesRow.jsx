const MyClassesRow = ({classItem}) => {
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
            <div className="text-sm opacity-50">Price: ${classItem.price}</div>
          </div>
        </div>
      </td>
      <td>{classItem.seats}</td>
      <td>{classItem.enrolled}</td>
      <td>{classItem.feedback ? classItem.feedback : 'N/A'}</td>
      <td>{classItem.status}</td>
      <td><button className="btn btn-sm">Update</button></td>
    </tr>
  );
};

export default MyClassesRow;
