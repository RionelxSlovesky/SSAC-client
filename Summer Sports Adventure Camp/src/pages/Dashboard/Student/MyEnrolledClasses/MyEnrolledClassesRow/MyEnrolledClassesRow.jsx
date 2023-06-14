

const MyEnrolledClassesRow = ({ enrolledClass }) => {
    return (
        <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={enrolledClass.classImage}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{enrolledClass.className}</div>
          </div>
        </div>
      </td>
      <td>
        {enrolledClass.instructorName}
        <br/>
          <span className="badge badge-ghost badge-sm">{enrolledClass.instructorEmail}</span>
      </td>
      <td>${enrolledClass.price}</td>
    </tr>
    );
};

export default MyEnrolledClassesRow;