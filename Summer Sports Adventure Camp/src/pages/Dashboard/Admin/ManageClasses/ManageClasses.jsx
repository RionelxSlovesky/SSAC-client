import useClasses from "../../../../hooks/useClasses";
import ManageClassesRow from "./ManageClassesRow/ManageClassesRow";

const ManageClasses = () => {

    const [classes, refetch] = useClasses();

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
            {
                classes.map(c => <ManageClassesRow key={c._id} classItem={c} refetch={refetch}></ManageClassesRow>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;
