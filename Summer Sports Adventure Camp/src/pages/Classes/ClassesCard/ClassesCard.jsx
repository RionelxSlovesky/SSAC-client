const ClassesCard = ({ classItem, role }) => {
  const handleSelect = () => {
    const selectedClass = {
      classId: classItem._id,
      classImage: classItem.classImage,
      className: classItem.className,
      instructorName: classItem.instructorName,
      price: classItem.price
    };

    fetch("http://localhost:5000/selectedClasses", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(selectedClass),
    })
    .then(() => {
        alert(classItem.className + ' added to selected courses. Please check your dashboard.')
    })
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={classItem.classImage}
          alt="Shoes"
          className="rounded-xl w-52 h-52 object-cover"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{classItem.className}</h2>
        <p>Instructor: {classItem.instructorName}</p>
        <p>Seats: {classItem.seats}</p>
        <p>Price: ${classItem.price}</p>
        {classItem.seats == 0 || role != "student" ? (
          <button
            className={`btn btn-disabled ${
              classItem.seats == 0 ? "bg-red-600 text-white" : ""
            }`}
          >
            Select
          </button>
        ) : (
          <button
            onClick={handleSelect}
            className={`btn ${
              classItem.seats == 0 ? "bg-red-600 text-white" : ""
            }`}
          >
            Select
          </button>
        )}
      </div>
    </div>
  );
};

export default ClassesCard;
