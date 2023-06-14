import { useContext, useEffect, useState } from "react";
import MyClassesRow from "./MyClassesRow/MyClassesRow";
import { AuthContext } from "../../../../providers/AuthProvider";

const MyClasses = () => {

    const {user} = useContext(AuthContext)
    const [classes, setClasses] = useState([])

    useEffect(() => {
        fetch(`https://b7a12-summer-camp-server-side-rionelx-slovesky.vercel.app/classes?email=${user.email}`)
        .then(res => res.json())
        .then(data => setClasses(data))
    },[user.email])


  return (
    <div>
      <h1 className="text-center my-8 text-4xl">My Classes</h1>
      <div className="overflow-x-auto pb-8">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Class Details</th>
              <th>Seats</th>
              <th>Enrolled</th>
              <th>Feedback</th>
              <th>Status</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {
                classes.map(c => <MyClassesRow key={c._id} classItem={c}></MyClassesRow>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClasses;
