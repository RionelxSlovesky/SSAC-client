import useUsers from "../../../../hooks/useUsers";
import ManagerUsersRow from "./ManageUsersRow/ManagerUsersRow";

const ManageUsers = () => {

    const [usersInfo,refetch] = useUsers()

  return (
    <div>
      <h1 className="text-center my-8 text-4xl">Manage Users</h1>
      <div className="overflow-x-auto pb-8">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>User</th>
              <th>Role</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {
                usersInfo.map(user => <ManagerUsersRow key={user._id} user={user} refetch={refetch}></ManagerUsersRow>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
