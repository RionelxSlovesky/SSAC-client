const ManagerUsersRow = ({user, refetch}) => {

    const handleMakeInstructor = () => {
        fetch(`http://localhost:5000/users/instructor/${user._id}`,{
            method: 'PATCH'
        })
        .then(() => {
            alert(user.name + ' made instructor')
            refetch()
        })
    }

    const handleMakeAdmin = () => {
        fetch(`http://localhost:5000/users/admin/${user._id}`,{
            method: 'PATCH'
        })
        .then(() => {
            alert(user.name + ' made instructor')
            refetch()
        })
    }

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
        {
            user.role == 'instructor' ? <button disabled className="btn btn-ghost btn-xs">Make Instructor</button> : <button onClick={handleMakeInstructor} className="btn btn-ghost btn-xs">Make Instructor</button>
        }
      </th>
      <th>
        {
            user.role == 'admin' ? <button disabled  className="btn btn-ghost btn-xs">Make Admin</button> : <button onClick={handleMakeAdmin}  className="btn btn-ghost btn-xs">Make Admin</button>
        }
      </th>
    </tr>
  );
};

export default ManagerUsersRow;
