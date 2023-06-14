const ManagerUsersRow = ({user}) => {
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={user.img}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{user.name}</div>
            <div className="text-sm opacity-50">{user.email}</div>
          </div>
        </div>
      </td>
      <td>{user.role}</td>
      <th>
        <button className="btn btn-ghost btn-xs">Make Instructor</button>
      </th>
      <th>
        <button className="btn btn-ghost btn-xs">Make Admin</button>
      </th>
    </tr>
  );
};

export default ManagerUsersRow;
