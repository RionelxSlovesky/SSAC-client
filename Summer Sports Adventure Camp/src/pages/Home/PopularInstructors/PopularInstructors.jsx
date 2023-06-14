import useUsersByRole from "../../../hooks/useUsersByRole";

const PopularInstructors = () => {
  const [usersByRole] = useUsersByRole("instructor");
  return (
    <div className="py-8">
      <h1 className="text-center text-2xl mb-8">Popular Instructors</h1>
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {usersByRole.slice(0,6).map((user) => (
          <div key={user._id} className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={user.img}
                alt="Shoes"
                className="rounded-xl w-52 h-52 object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{user.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
