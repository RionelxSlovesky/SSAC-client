const InstructorsCard = ({user}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={user.img}
          alt="Shoes"
          className="rounded-xl w-52 h-52 object-cover"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{user.name}</h2>
        <p>{user.email}</p>
      </div>
    </div>
  );
};

export default InstructorsCard;
