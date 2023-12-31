const MySelectedClassesRow = ({ selectedClass, refetch }) => {
  const handleDelete = () => {
    fetch(`https://b7a12-summer-camp-server-side-rionelx-slovesky.vercel.app/selectedClasses/${selectedClass._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert(`${selectedClass._id} removed from selected classes`);
          refetch();
        }
      });
  };

  const handlePay = () => {
    fetch("https://b7a12-summer-camp-server-side-rionelx-slovesky.vercel.app/enrolledClasses", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(selectedClass),
    });

    fetch(`https://b7a12-summer-camp-server-side-rionelx-slovesky.vercel.app/selectedClasses/${selectedClass._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert(
            `Payment Successful. ${selectedClass._id} added to Enrolled Classes.`
          );
          refetch();
        }
      });

    fetch(`https://b7a12-summer-camp-server-side-rionelx-slovesky.vercel.app/classes/seats/${selectedClass.classId}`, {
      method: "PATCH",
    })

    fetch(`https://b7a12-summer-camp-server-side-rionelx-slovesky.vercel.app/classes/enrolled/${selectedClass.classId}`, {
      method: "PATCH",
    })
  };

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
        <button onClick={handleDelete} className="btn btn-ghost btn-xs">
          delete
        </button>
        <button onClick={handlePay} className="btn btn-ghost btn-xs">
          pay
        </button>
      </th>
    </tr>
  );
};

export default MySelectedClassesRow;
